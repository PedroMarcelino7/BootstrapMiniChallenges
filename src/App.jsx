import './App.css'
import PricingCards from './pages/PricingCards/PricingCards'
import Ratings from './pages/Ratings/Ratings'
import UserList from './pages/UserList/UserList'

function App() {
  return (
    <>
      <PricingCards name={'Pricing Cards'} number={'1'} />

      <hr />

      <Ratings name={'Average Ratings'} number={'2'} />

      <hr />

      <UserList name={'Users List'} number={'3'} />
    </>
  )
}

export default App
