
import { useState } from "react"
import { faqsData } from "./data"
import FaqCard from "../faqCard/faqCard";
import './faqs.css'

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
            
        </div>
    )
}
export default FAQs