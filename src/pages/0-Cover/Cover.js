import Image from 'next/image';
import './Cover.scss';



export default function Cover(params) {
    return (
        <div id='home' className='page-cover'>
            <h1>this is cover</h1>
            <Image src={"/Untitled.png"} alt=""  width={300} height={500}/>
        </div>
    )
};
