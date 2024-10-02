import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}