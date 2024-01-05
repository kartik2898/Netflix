
import "./footer.css"
import Dropdown from "../../Common/Dropdown";
function Footer(){

    const langOption = [{
        label:"English",
        value:"eng"
    },{
        label:"Hindi",
        value: "hindi"
    }];

    const quesdata = ["FAQ","Help Centre","Account","Media Centre","Investor Relations","Jobs","Ways to Watch",
    "Terms of Use","Privacy,Cookie Preferences","Corporate Information","Contact Us","Speed Test",
    "Legal Notices","Only on Netflix"];

    return(
        <div className="data-wrapper">
            <div className="data-ques-container">
                <div className="data-question">
                    <p>Questions? Call 000-800-919-1694</p>
                </div>
            </div>
            <div className="data-ques-list-wrapper">
                {
                    quesdata.map((ques,indx)=>(
                        <div className="data-ques-list-container" key={indx}>
                            <a href="">{ques}</a>
                        </div>
                    ))
                }
            </div>
            <div className="drop-down-con">
                <Dropdown option={langOption}/>
            </div>
            
            <div className="tagName">
                <p>Netflix India</p>
            </div>
        </div>
    );
};
export default Footer