import "./Header.css";
import img1 from "../Image/a.png";
import { Link, NavLink,useNavigate } from "react-router-dom";


function Header() {
  const nav=useNavigate();

  const logout=()=>{
  localStorage.removeItem("Loggin");
  nav("/login");

}
 const displayHeader =localStorage.getItem("Loggin");
  return (
  <>
  <div className="Header">
    <div className="logo_image"><img src={img1}/></div>
    {(displayHeader=='true')? 

    <div className="Nav_item">
      <div className="nav_child1">
      <NavLink to="/"> <div>Home</div></NavLink>
      <NavLink to="/Menu"><div>Menu</div></NavLink>
      <NavLink to="/Contact"><div>Contact us</div></NavLink>
      <NavLink to="/Gallery"><div>Gallery</div></NavLink>
      </div>
      <div className="nav_child2">
      <button onClick={logout}>Logout</button>
      </div>
    </div>
    
    :
    <div className="LogIn_div">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>
    </div>
}  
  </div>
  </>
  );
}

export default Header;