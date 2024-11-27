import { useContext } from "react";
import { mycontext } from "./App";

function GrandChild()
{
   const data=useContext(mycontext)


    return <div style={{border:"2px solid red", margin:"20px"}}>
        <h1>GrandChild Component</h1>
        <h2>{data.courseId}</h2>
        <h2>{data.courseName}</h2>
        <h2>{data.time}</h2>
        <button type="button" class="btn btn-primary">Save</button>
    </div>
}

export default GrandChild;