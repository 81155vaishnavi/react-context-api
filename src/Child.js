import GrandChild from "./GrandChild";
import { mycontext } from "./App";
import { useContext } from "react";

function Child()
{
    const data =useContext(mycontext);
    
   // console.log(data);

    return <div style={{border:"2px solid green ",margin:"20px"}}>
        <h1>Child Component..</h1>
        <h2>{data.courseId}</h2>
        <h2>{data.courseName}</h2>
        <h2>{data.time}</h2>
        <button type="button" class="btn btn-danger">SaveChild</button>
        <GrandChild />
    </div>
}

export default Child;