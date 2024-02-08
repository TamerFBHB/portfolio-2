import "./Projects.scss" ;
import Image from "next/image";

export default function Projects({state }) {
    return(
        <div id="project" className={`project  ${state === 3 ? "show" : "hide"}`}>
        <h1>this Projects page</h1>
        <Image src={"/Untitled.png"} alt=""  width={300} height={500}/>
    </div>
    )
};
