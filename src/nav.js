import { Link } from "react-router-dom";

export default function Nav({logged}){
  return(
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Products</Link>
          <Link to="/customers">Customers</Link>


        </ul>

        <ul className="button">
        {
          !logged ?  <Link to="/login" className="c-btn login">Login</Link> : <Link to="/logout" className="c-btn logout">Logout</Link>
        }
        </ul>
      </nav>
    </>
  )
}
