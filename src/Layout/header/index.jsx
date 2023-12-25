import Dropdown from "../../Common/Dropdown/index.jsx"
import Button from "../../Common/Button/index.jsx"
import "./Header.css"


const Header =()=>{

    const onClickSignIn=()=>{
        alert("signIn");
    };
    return(
        <div className="hero-header-wrapper">
            <image/>
            <Dropdown/>
            <Button label={"Sign In"} onClick ={onClickSignIn}/>
        </div>
    )
}
export default Header