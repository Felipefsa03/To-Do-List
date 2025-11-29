import Container from "../components/container";
import Logo from "../assets/images/logo.svg?react";
import Logo2 from "../assets/images/logo.png"


export default function Header(){
    return <>   
        <Container as="header" className="mt-3 md:mt-20">
            <Logo className="h-9 md:h-24"/>
            <img src={Logo2} alt="Logo" className="h-18 md:h-24" />
       </Container>
    </>
}