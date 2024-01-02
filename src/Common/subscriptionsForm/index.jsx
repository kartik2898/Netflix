import { useState } from "react"
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
            <h3 className="subs-heading">{text}</h3>
            <div className="subscriptionForm_inputWrapper">
                <div className="subs-inpt-container">
                    <input onChange={onChangeEmail} className="sub-form-input" id="email"/>
                    <label className="subs-form-inpt-text" htmlFor="email">Email addres</label>
                </div>
                <button className="sub-btn">Get Started {">"}</button>
            </div>
        </div>
    )
}

export default SubscriptionForms

SubscriptionForms.prototypes ={
    text : ProtoTypes.string.isRequired,
}