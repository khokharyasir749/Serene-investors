type OtpEntry = {
  code: string
  expiresAt: number
}

// Using globalThis ensures the OTP map persists across hot-reloads in Next.js development
const globalForOtp = globalThis as unknown as {
  __serene_otp_store__?: Map<string, OtpEntry>
}

if (!globalForOtp.__serene_otp_store__) {
  globalForOtp.__serene_otp_store__ = new Map<string, OtpEntry>()
}

export const otpStore = globalForOtp.__serene_otp_store__

export function setOtp(email: string, code: string, ttlMs = 5 * 60 * 1000) {
  const normalized = email.toLowerCase().trim()
  otpStore.set(normalized, {
    code: code.trim(),
    expiresAt: Date.now() + ttlMs,
  })
}

export function verifyOtp(email: string, code: string): { valid: boolean; reason?: string } {
  const normalized = email.toLowerCase().trim()
  const entry = otpStore.get(normalized)

  if (!entry) {
    return { valid: false, reason: 'Invalid or expired code' }
  }

  if (Date.now() > entry.expiresAt) {
    otpStore.delete(normalized)
    return { valid: false, reason: 'Invalid or expired code' }
  }

  if (entry.code !== code.trim()) {
    return { valid: false, reason: 'Invalid or expired code' }
  }

  // Remove code after successful verification (one-time use)
  otpStore.delete(normalized)
  return { valid: true }
}
