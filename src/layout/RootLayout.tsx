import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
type Props = {}

function RootLayout({}: Props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout