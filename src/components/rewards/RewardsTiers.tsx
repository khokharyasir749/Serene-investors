'use client'

import React from 'react'
import { RewardsSection } from '@/components/sections/home/RewardsSection'
import { rewards } from '@/data'

export function RewardsTiers() {
  return <RewardsSection items={rewards} />
}
