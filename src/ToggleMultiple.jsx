import {useState} from "react";

function ToggleMultiple(){

    const[casee , setCase] = useState(null);

    return(
        <>
            <h1>{casee}</h1>
            <button onClick={()=>setCase(casee + 1)}>1</button>

            {
                casee===1?<h1>Case 1</h1>:
                casee===2?<h1>Case 2</h1>:
                casee===3?<h1>Case 3</h1>:
                casee===4?<h1>Case 4</h1>:
                <h1>Other condtion</h1>
            }

        </>
    )
}

export default ToggleMultiple;