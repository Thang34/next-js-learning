
import Link from "next/link"
import Loading from "./loading"
import { Suspense } from "react"
import ErrorBoundary from "next/dist/client/components/error-boundary"
import Error from "./error"
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen overflow-hidden">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className=" text-6xl bg-gray-500 flex justify-around p-3">
        <Link href={"/"}>
          <div className=" bg-gray-800 p-2">Home</div>
        </Link>
        <Link href={"/dashboard/setting"}>
          <div>Setting</div>
        </Link>
        <Link href={"/dashboard/client"}>
          <div>Client</div>
        </Link>
        <div>Sale list</div>
        <div>Map</div>
      </div>
      <div className="flex w-full h-[-webkit-fill-available]">
        <div className=" bg-gray-600 min-w-[200px]">
          <div className="text-center">Side bar item 1</div>
          <div className="text-center">Side bar item 2</div>
          <div className="text-center">Side bar item 3</div>
          <div className="text-center">Side bar item 4</div>
          <div className="text-center">Side bar item 5</div>
        </div>
        {/* <ErrorBoundary fallback={<Error />}>
        </ErrorBoundary> */}
        <div className="w-full p-3">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </div>

      </div>
    </section>
  )
}