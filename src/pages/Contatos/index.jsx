import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Header } from "../../components/header";
import { TextArea } from "../../components/textarea";
import { Button } from "../../components/button";
import { Container } from "./style";

import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaInstagram  } from "react-icons/fa";

export function Contatos() {
    return (
        <Container>
            <Header/>
            <div className="Contact">
                <h1>BT</h1>
                <p>Fale conosco</p>
            </div>

            <div className="ContainerContent">
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

                <Section id="SecondSection" title="Nossos Contatos" >
                    <div className="ValueContact">
                        <FaPhoneAlt/>
                        <p>(43) 9-9115-5104</p>
                    </div>

                    <div className="ValueContact">
                        <FaWhatsapp/>
                        <p>(43) 9-9115-5104</p>
                    </div>

                    <div className="ValueContact">
                        <FaEnvelope/>
                        <p>jeanants@icloud.com</p>
                    </div>

                    <div className="icons">
                        <FaLinkedinIn/>
                        <FaGithub/>
                        <FaInstagram/>
                    </div>
                </Section>
            </div>

        </Container>
    )
}