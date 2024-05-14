const footerStyle={
    padding: ".5rem .5rem",
    textAlign: "center",
    color: "white"
}

export function Footer(){
    return(
        <>
        <footer style={footerStyle} className="bg-primary">
            <p> &copy;2024 Tutti i diritti riservati </p>
        </footer>
        </>
    );
}