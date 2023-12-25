 import "./Button.css"

 function Button(props){
    

    const {onClick,label} = props;

    return(
        <button onClick={onClick} className="comn-btn">{label}</button>
    )
 }

 export default Button