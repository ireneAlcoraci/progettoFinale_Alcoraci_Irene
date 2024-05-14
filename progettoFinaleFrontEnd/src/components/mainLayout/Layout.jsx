import { Navbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import { useOutlet } from "react-router-dom";

export function Layout(){
const outlet = useOutlet();

    return(
        <>
        <Navbar/>
        {outlet}
        <Footer/>
        </>
    );
}