
import { useState } from "react"
import { faqsData } from "./data"
import FaqCard from "../FaqCard/faqCard";
import './faqs.css'
import SubscriptionForms from "../../Common/subscriptionsForm";

function FAQs(){

    const [open, setOpen] = useState(null);
    const onClick = (index)=>{
        if(open === index){
            setOpen(null);
        }else{
            setOpen(index);
        }
    };

    return(
        <div className="faqs_wrapper">
            <h3 className="faqs_heading">Frequently Asked Questions</h3>
            <div className="faqs_list">
                {
                    faqsData.map((faq,index)=>(
                        <FaqCard
                         isOpen ={open === index}
                         key={index}                         
                         title={faq.title}
                         onClick={()=>onClick(index)}
                         desc={faq.description}
                         />
                    ))
                }
            </div>   
            <SubscriptionForms text="Ready to watch? Enter your email to create or restart your membership."/>
        </div>
    )
}
export default FAQs