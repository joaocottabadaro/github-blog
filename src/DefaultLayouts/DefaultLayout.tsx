import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <div className="bg-background h-screen">
        <div className="bg-hero bg-cover bg-center h-96 w-full" />
        <div className="flex flex-col w-full container  max-w-4xl w-full justify-center items-center gap-10">
          <Outlet />
        </div>
      </div>
    </>
  )
}
