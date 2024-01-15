import { HeaderLeft, HeaderTop, ButtonContent } from "./style";

import { FiMap, FiMapPin, FiPhone, FiHeart, FiBell } from "react-icons/fi";

export function Header(){
    return (
        <>
            <HeaderTop>
                <h1>BelovedTrip</h1>
            </HeaderTop>

            <HeaderLeft>

                <ButtonContent>
                    <FiBell/>
                    <span>Atividades</span>
                </ButtonContent>

                <ButtonContent>
                    <FiMapPin/>
                    <span>Locais</span>
                </ButtonContent>

                <ButtonContent>
                    <FiMap/>
                    <span>Reservas</span>
                </ButtonContent>

                <ButtonContent>
                    <FiPhone/>
                    <span>Contatos</span>
                </ButtonContent>

                <ButtonContent>
                    <FiHeart/>
                    <span>Favoritos</span>
                </ButtonContent>

            </HeaderLeft>
        </>
    )
}