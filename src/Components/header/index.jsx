import Dropdown from "../../Common/Dropdown/index.jsx"
import Button from "../../Common/Button/index.jsx"
import "./Header.css"
import  Netflix from "../../assets/Netflix_logo.svg"


const langOption = [{
    label:"English",
    value:"eng"
},{
    label:"Hindi",
    value: "hindi"
}];
const Header =()=>{
    const onClickSignIn=()=>{
        alert("signIn");
    };
    return(
        <div className="hero-header-wrapper">
            <img src={Netflix}/>
            <div className="header-right-site">
            <Dropdown option={langOption}/>
            <Button label={"Sign In"} onClick ={onClickSignIn}/>
            </div>
        </div>
    )
}
export default Header