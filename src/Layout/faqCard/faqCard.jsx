import { IoMdAdd,IoMdClose } from "react-icons/io";
import "./faqCard.css";

function FaqCard({title,desc,onClick,isOpen}){
    

    return(
        <div className="faqCard_wrapper">
            <div onClick={onClick} className="faqCardHeader">
                <p className="faqTitle">{title}</p>

                {isOpen && <IoMdClose fontSize={40}/>}
                {!isOpen && <IoMdAdd  fontSize={40}/>}
            </div>
            {isOpen && <div className="feqDesc">{desc}</div>}
        </div>
    );
};

export default FaqCard;