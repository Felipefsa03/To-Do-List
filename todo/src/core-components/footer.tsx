import { NavLink } from "react-router";
import Text from "../components/text";
// import Logo from "../assets/images/logo.svg?react"/


export default function footer(){
    return <>
        <footer className="my-5 md:my-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to ="/">
                    <Text variant="body-sm-bold" className="text-shadow-gray-300">
                        Tarefas
                    </Text>
                </NavLink>
                <NavLink to ="/componentes">
                    <Text variant="body-sm-bold" className="text-shadow-gray-300">
                        Componentes
                    </Text>
                </NavLink>
                
            </nav>
        </footer>

    </>
}