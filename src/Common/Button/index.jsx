 import "./Button.css"
 import PropTypes from "prop-types";

 function Button(props){
    

    const {onClick,label} = props;

    return(
        <button onClick={onClick} className="comn-btn">{label}</button>
    )
 }

 export default Button

 Button.prototype ={
    onClick : PropTypes.func,
    label : PropTypes.string.isRequired
 };