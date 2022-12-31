import { AppHeader } from './app-header.jsx'
import { SideBar } from './side-bar.jsx'
import UserMsg from './user-msg.jsx'
const { Fragment } = React

export const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      <SideBar />
      <div className='overflow-wrapper'>{children}</div>
      <UserMsg />
    </Fragment>
  )
}
