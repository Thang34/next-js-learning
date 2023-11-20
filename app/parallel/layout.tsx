import Link from "next/link"

export default function Layout(props: any) {
  return (
    <>
      {props.children}
      <div className=" bg-gray-500 flex justify-around min-h-[500px]">
        {props.team}
        {props.analytics}
      </div>
      <Link href={"/"}>
        <div>Back to main page</div>
      </Link>
    </>
  )
}