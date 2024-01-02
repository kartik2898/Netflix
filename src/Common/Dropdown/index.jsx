import "./Dropdown.css";

function Dropdown({option}){
    
    return(
        <div className="common-dropdown-wrapper">
            <span className="drop-down-icon"></span>
            <select name="" id="" className="cmn-dropdown">
                {
                    option?.map((opt,indx)=>(
                        <option key={indx} value={opt.value}>{opt.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown