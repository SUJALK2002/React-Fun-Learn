import {useState} from "react";

function Toggle(){

    const[on , setOn] = useState(false);

    return(
        <>
           <button onClick={()=>setOn(!on)}>Toggle</button> 

            {
                on?<h1>Sujal</h1>:null 
            }

        </>
    )
}

export default Toggle;