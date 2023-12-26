import { useState } from "react"
import Button from "../Button/index.jsx"
import "./subs.css"
import ProtoTypes from "prop-types"

const SubscriptionForms = (props)=>{

    const {text} = props
    const [email, setEmail] = useState("");
    const onChangeEmail=(e)=>{
        const value = e.target.value;
        setEmail(value);
        
    }
    return(
        <div className="subscriptionForm-wrapper">
            <p className="subs-heading">{text}</p>
            <div className="subscriptionForm_inputWrapper">
            <input onChange={onChangeEmail}/>
            <Button label="Get Started >" />
            </div>
        </div>
    )
}

export default SubscriptionForms

SubscriptionForms.prototypes ={
    text : ProtoTypes.string.isRequired,
}