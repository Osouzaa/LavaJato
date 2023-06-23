import * as C from "./style.ts"

const MarcarLavagem = () => {
    const handleClick = () => {
        window.open("https://web.whatsapp.com/send?phone=5531982991526&text=Ol%C3%A1%2C+Gostaria+de+marcar+um+horario%21", "_blank");
    };

    return (
        <C.Container>
            <C.Title>Marque seu horário</C.Title>
            <C.Button onClick={handleClick}>
                FALE CONOSCO
            </C.Button>
        </C.Container>
    );
};

export default MarcarLavagem;
