import Layout from './components/layout'
import { Outlet } from 'react-router'

export default function App() {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
