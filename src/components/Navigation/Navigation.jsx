import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Button } from "./Navigation.styled";

 const Navigation = () =>{
    const isLogin = useSelector(selectIsLoggedIn);
    return (
        <ul
            
        >
            <li><Link to={'/'}><Button
                
                type="button">Home</Button></Link></li>
            {isLogin && <li><Link to={'contacts'}><Button
                
                type="button">Contacts</Button></Link></li>}
        </ul>
    )
}

export default Navigation