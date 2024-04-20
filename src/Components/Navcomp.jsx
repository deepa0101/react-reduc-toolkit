
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../Redux/store";

function NavComp() {
  const cartValue = useSelector(store=>store.cart.items)
    
  return (
    <div className="header-container">
    <nav className="navbar navbar-dark bg-dark">
 <div className="navcomp"><Link  activeStyle={{ color: 'white' }} to="/">
          <h4>Home</h4></Link>
        </div>
        <div className="navcomp"><Link  to="/cart">
          <h4>Cart {cartValue.length}</h4></Link>
        </div>
    </nav>
    </div>
  );
}



export default NavComp;