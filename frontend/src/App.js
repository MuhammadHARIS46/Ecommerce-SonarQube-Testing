import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { authRoutes, routes } from "./static/data";
import { useSelector } from "react-redux";
import Store from "./redux/store";
import { loadSeller } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { useEffect, useState } from "react";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const [userRoutes, setRoutes] = useState([]);

  useEffect(() => {

    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    console.log("asdasd");
    setRoutes(routes);
  }, [isSeller, isAuthenticated]);
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          {userRoutes.map((item,index) => (
            <Route path={item.route} element={item.component} key={index} />
          ))}
          {(!isAuthenticated || !user) &&
            authRoutes.map((item,index) => {
              return <Route path={item.route} element={item.component} key={index} />;
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
