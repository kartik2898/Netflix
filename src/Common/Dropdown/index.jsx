import "./Dropdown.css";

function Dropdown(props){
    const {option=[]} = props

    
    return(
        <div className="common-dropdown-wrapper">

            <span className="drop-down-icon"></span>
            <select name="" id="">
                {Array.isArray(option)&&
                    option.map((opt,indx)=>{
                        <option value={opt.value}>{opt.label}</option>
                    })
                }
            </select>
            
        </div>
    )
}

export default Dropdown