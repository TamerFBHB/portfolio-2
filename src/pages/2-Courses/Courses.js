import "./Courses.scss" ;
import Image from "next/image";

export default function Courses({state }) {
    return(
        <div id="courses" className={`course  ${state === 2 ? "show" : "hide"}`}>
        <h1>this courses page</h1>
        <Image src={"/Untitled.png"} alt=""  width={300} height={500}/>
    </div>
    )
};
