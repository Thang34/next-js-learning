import Link from "next/link"
export default function Page() {
  return (
    <div>
      <h1 className=" text-yellow-200  ">Hello, CLIENT Page!</h1>
      <Link href={"/dashboard"}>
        <h1>Back to Dashboard</h1>
      </Link>
    </div>
  )

}