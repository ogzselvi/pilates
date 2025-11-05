'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to clients page by default
    router.push('/dashboard/clients')
  }, [router])

  return null
}
