import './styles/navbar.css'
import './index.css'

function Navbar(){
  return(
    <>
    <div className="navbar">
      <div className="logo">Workout</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

    </div>
    </>
  )
}
export default Navbar;