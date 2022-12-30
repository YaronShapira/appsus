import { SideBar } from './side-bar.jsx'

export const PageLayout = ({ children }) => {
  console.log('children:', children)
  return (
    <div>
      <SideBar />
      <div>{children}</div>
    </div>
  )
}
