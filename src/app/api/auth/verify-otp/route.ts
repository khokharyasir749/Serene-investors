import { NextResponse } from 'next/server'
import { verifyOtp } from '@/lib/otpStore'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const code = typeof body.code === 'string' ? body.code.trim() : ''

    if (!email || !code) {
      return NextResponse.json(
        { success: false, error: 'Email and verification code are required.' },
        { status: 400 },
      )
    }

    const result = verifyOtp(email, code)

    if (!result.valid) {
      return NextResponse.json(
        { success: false, error: result.reason || 'Invalid or expired code' },
        { status: 400 },
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Code verified successfully.',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    )
  }
}
