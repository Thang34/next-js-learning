'use client'

import { useRouter } from 'next/navigation'

const userNames = [
  "User 1",
  "User 2",
  "User 3",
  "User 4",
  "User 5",
  "User 6",
]

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1 className=" text-red-300">Hello, User Page!</h1>
      <ul>
        {userNames.map((userName: any, index: any) => {
          return (
            <li
              key={index}
              onClick={() => router.push(`/users/${index + 1}`)}
            >
              {userName}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
