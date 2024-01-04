import "./Dropdown.css";
import { HiOutlineTranslate } from "react-icons/hi";

function Dropdown({option}){
    
    return(
        <div className="common-dropdown-wrapper">
            <span className="drop-down-icon"><HiOutlineTranslate /></span>
            <select name="" id="" className="cmn-dropdown">
                {
                    option?.map((opt,indx)=>(
                        <option key={indx} value={opt.value} className="option">{opt.label} </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown