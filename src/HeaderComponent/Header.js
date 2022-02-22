import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <ul>
            <li>
               <Link to='/'>About</Link>
            </li>
            <li>
               <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/addproducts'>AddProducts</Link>
            </li>
        </ul>
        </>
    )
}
export default Header;

