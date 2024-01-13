import React, {useState} from 'react'
import './Navbar.css'
import cart from "../Assests/cart-icons.png"
import logo from "../Assests/download.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop") 
  return (
    <div className='navbar'>
      <div style={{height:"40px"}} className="nav-logo">
      <img src={logo} alt="" />
        <p>Vworld</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("mens")}}><Link to='/'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> */}
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img style={{height:"50px"}}src={cart} alt="" /></Link>
        <div className="nav-cart-count">0</div>

      </div>

    </div>
  )
}

export default Navbar