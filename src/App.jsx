import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import UserList from "./components/UserList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemList />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        {/* <Route path="/items/:item_id" element={<SingleItem />}></Route>
        <Route path="/users/:username" element={<SingleUser />}></Route>
        <Route path="/users/:username/basket" element={<Basket />}></Route>
        <Route path="/users/:username/orders" element={<Orders />}></Route> */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
