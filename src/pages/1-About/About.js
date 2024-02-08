import Image from "next/image";
import "./About.scss";

export default function About({state }) {
    
    return(
        <div id="about" className={`about  ${state === 1 ? "show" : "hide"}`}>
            <h1>this about page</h1>
            <Image src={"/Untitled.png"} alt=""  width={300} height={500}/>
        </div>
    )
};
