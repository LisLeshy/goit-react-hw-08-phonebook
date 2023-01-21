import { Link } from "react-router-dom";
import { ContainerAuthNav, Button } from "./AuthNav.styled";

const AuthNav = () =>{
    return (
        <ContainerAuthNav 
        >
            <li><Link to={'register'}><Button
                type="button">Registration</Button></Link></li>
            <li><Link to={'login'}><Button
               
                type="button">Log in</Button></Link></li>
        </ContainerAuthNav >
    )
}

export default AuthNav