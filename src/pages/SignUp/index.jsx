import { Link } from "react-router-dom";

import { Container, Form, Background } from "./style";

import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/CheckBox";

import { GoEyeClosed, GoEye } from "react-icons/go";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { ButtonText } from "../../components/buttontext";

export function SignUp() {
    return (
        <Container>
            <Form>
                <header>

                    <Link to="/">
                        Entrar
                    </Link>

                    <ButtonText text="cadastrar"/>

                </header>

                <h1>BelovedTrip</h1>

                <p>Bem vindo, Entre e conheça nossos planos</p>


                <Input
                    title="Name"
                    type="text"
                    autoComplete="name"
                />

                <Input
                    title="E-mail"
                    type="email"
                    autoComplete="e-mail"
                />

                <Input
                    title="password"
                    type="password"
                    autoComplete="current-password"
                    icon={GoEyeClosed}
                />


                <Button
                    title="Cadastrar"
                />
                <div className="endSignIn">
                    <ButtonText
                        text="Mais sobre nós"
                    />

                    <a href=""><RiInstagramFill/></a>
                    <a href=""><RiLinkedinBoxFill/></a>
                </div>

            </Form>

            <Background/>
        </Container>
    )
}