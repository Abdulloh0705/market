import Nav from '../Components/navbar/Nav'
import { Outlet } from 'react-router-dom'


const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />

    </>
  )
}

export default HomeLayout
