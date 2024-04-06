import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="">
          <img src={logo} className="h-14"/>
          </div>
        </NavLink>

          <div className="flex ">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="">
                  <FaShoppingCart className=""/>
                  {
                    cart.length > 0 &&
                    <span
                    className="" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
