
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from "./component/Footer.jsx";
import Pizza from "./pages/Pizza.jsx";
import Biryani from "./pages/Biryani.jsx";
import Berger from "./pages/Birger.jsx";
import Chiness from "./pages/Chiness.jsx";
import Ideli from "./pages/ideli.jsx";
import N_indian from "./pages/N_indian.jsx";
import { Menup } from "./pages/menup.jsx";
import { Log_in } from "./pages/Login.jsx";
import { Sign_up } from "./pages/signUp.jsx";
import Protected from "./Services/protected.js";
import Header from "./component/Header.jsx";
function App() {
  return (
   <> 
    <Header/>
   <Routes>
    <Route path="/" element={<Protected/>}>
    <Route path="/" element={<Home/>}/>
        <Route  path="/Menu/" element={<Menu/>}>
            <Route  path="/Menu/" element={<Pizza />} />
            <Route  path="/Menu/biryani" element={<Biryani />} />
            <Route  path="/Menu/burger" element={<Berger/>} />
            <Route path="/Menu/Chiness" element={<Chiness/>}/>
            <Route path="/Menu/ideli" element={<Ideli/>}/>
            <Route path="/Menu/north indian" element={<N_indian/>}/>
        </Route>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Gallery" element={<Gallery/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    </Route>
   </Routes>
   {/* category product router */}
   <Routes>
    <Route path="/Pizza" element={<Pizza/>}/>
    <Route path="/Biryani" element={<Biryani/>}/>
    <Route path="/Berger" element={<Berger/>}/>
    <Route path="/Chiness" element={<Chiness/>}/>
    <Route path="/ideli" element={<Ideli/>}/>
    <Route path="/north indian" element={<N_indian/>}/>
    <Route path="/login" element={<Log_in/>}/>
    <Route path="/signup" element={<Sign_up/>}/>
   </Routes>
   <Footer/>
   </>


  );
}

export default App;
