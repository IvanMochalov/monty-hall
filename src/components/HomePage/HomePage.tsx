import { useMainLogic } from '@/hooks/useMainLogic'
import React from 'react'

export const HomePage = () => {
  useMainLogic()
  return <div>Home</div>
}
