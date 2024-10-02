import "./App.css";
import NewsPage from "./pages/NewsPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news&media' element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
