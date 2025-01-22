import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-inline: auto;
  max-width: 430px;
  min-width: 320px;
  overflow-x: hidden;
  overflow-y: auto;
`

const DefaultLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default DefaultLayout
