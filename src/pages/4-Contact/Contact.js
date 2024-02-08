import "./Contact.scss" ;
import Image from "next/image";

export default function Contact({state }) {
    return(
        <div id="contact" className={`contact  ${state === 4 ? "show" : "hide"}`}>
        <h1>this Contact page</h1>
        <Image src={"/Untitled.png"} alt=""  width={300} height={500}/>
    </div>
    )
};
