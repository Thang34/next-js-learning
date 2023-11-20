'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-red-300 text-xl">Hello, Parallel Page!</h1>
    </div>
  )
}
