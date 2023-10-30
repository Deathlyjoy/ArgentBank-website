//---------- IMPORT ----------
import { Route, Routes } from "react-router-dom";

//---------- PAGES ----------
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";

//---------- LAYOUTS ----------
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

//---------- CSS ----------
import "./style/app.scss";


function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
