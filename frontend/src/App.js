import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { authRoutes, routes } from "./static/data";
import { useSelector } from "react-redux";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { useEffect, useState } from "react";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isSeller, isLoading } = useSelector((state) => state.seller);
  const [userRoutes, setRoutes] = useState([]);

  useEffect(() => {
    // Store.dispatch(loadUser());

    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    // Store.dispatch(getAllEvents());
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
          {userRoutes.map((item) => (
            <Route path={item.route} element={item.component} />
          ))}
          {(!isAuthenticated || !user) &&
            authRoutes.map((item) => {
              return <Route path={item.route} element={item.component} />;
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
