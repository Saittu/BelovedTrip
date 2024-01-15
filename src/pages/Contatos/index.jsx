import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Header } from "../../components/header";
import { TextArea } from "../../components/textarea";
import { Button } from "../../components/button";
import { Container } from "./style";

export function Contatos() {
    return (
        <Container>
            <Header/>
            <div className="Contact">
                <h1>BT</h1>
                <p>Fale conosco</p>
            </div>

            <Section title="Mande sua mensagem">
                <div className="Menssege">
                    <Input 
                        title="Nome"
                        type="text"
                    />
                    <Input
                        title="E-mail"
                        type="email"
                    />
                </div>
                <Input title="Assunto" type="text"/>

                <TextArea placeholder="Mensagem"/>

                <Button title="Enviar"/>
            </Section>

        </Container>
    )
}