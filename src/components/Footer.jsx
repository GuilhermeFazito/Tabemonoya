import {} from 'react';
import { AiOutlineMail, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';


export default function Footer (){

    return(
        <>
        <section>
            <AiOutlineMail/>
            <FaLinkedin/>
            <AiFillFacebook/>
            <AiFillInstagram/>
            <h3>@2023 - Todos os direitos reservados </h3>
        </section>
      
        </>

    )


}