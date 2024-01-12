import { Container, Form, Background } from "./style";

import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/CheckBox";

import { GoEyeClosed, GoEye } from "react-icons/go";
import { ButtonText } from "../../components/buttontext";

export function SignIn() {
    return (
        <Container>
            <Form>
                <header>

                    <ButtonText text="Entrar"/>

                    <ButtonText text="cadastrar"/>

                </header>

                <h1>BelovedTrip</h1>

                <p>Bem vindo, Entre e conheça nossos planos</p>


                <Input
                    title="E-mail"
                    type="text"
                />

                <Input
                    title="password"
                    type="password"
                    icon={GoEyeClosed}
                />

                <div className="OptionsUser">
                    <CheckBox
                        text="Manter conectado ?"
                    />

                    <ButtonText
                        text="Esqueceu a senha ?"
                    />
                </div>

                <Button
                    title="Entrar"
                />
            </Form>

            <Background/>
        </Container>
    )
}