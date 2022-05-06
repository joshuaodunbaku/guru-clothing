import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import SignIn from "./Routes/sign-in/sign-in";

const Shop = () => {
  return (
    <h1>Welcome to the Shopping Cart</h1>
  )
}



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;