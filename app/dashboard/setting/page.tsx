import Link from "next/link"
export default function Page() {
  return (
    <div>
      <h1 className=" text-green-300">Hello, SETTING Page!</h1>
      <Link href={"/dashboard"}>
        <h1>Back to Dashboard</h1>
      </Link>
    </div>
  )

}