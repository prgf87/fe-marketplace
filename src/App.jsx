import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";
import { useContext, useState } from "react";
import { UserContext } from "./utils/UserContext";
import { BasketContext } from "./utils/BasketContext";
import Basket from "./components/Basket";

function App() {
  const { user } = useContext(UserContext);
  const { basket } = useContext(BasketContext);
  const [currUser, setCurrUser] = useState(user.users[0]);
  const [currBasket, setCurrBasket] = useState(basket);
  return (
    <>
      <Header currUser={currUser} currBasket={currBasket}></Header>

      <Routes>
        <Route path="/" element={<ItemList setCurrBasket={setCurrBasket} />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/:username/basket" element={<Basket />}></Route>
        {/*  <Route path="/users/:username" element={<SingleUser />}></Route>
        <Route path="/users/:username/basket" element={<Basket />}></Route>
        <Route path="/users/:username/orders" element={<Orders />}></Route> */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
