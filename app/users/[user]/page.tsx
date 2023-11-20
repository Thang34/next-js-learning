'use client'

export default function Page({ params }: { params: { user: string } }) {
  console.log({params})
  return (
    <div>
      <div className=" text-2xl">Show user ID: {params.user}</div>
    </div>
  )
}

