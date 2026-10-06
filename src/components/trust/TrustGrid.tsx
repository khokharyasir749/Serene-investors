'use client'

import React from 'react'
import { TrustSection } from '@/components/sections/home/TrustSection'
import { trustItems } from '@/data'

export function TrustGrid() {
  return <TrustSection items={trustItems} />
}
