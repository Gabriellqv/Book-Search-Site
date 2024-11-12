import Header from '../../components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home
