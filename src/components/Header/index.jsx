import { Container, Profile, Logout } from "./styles";

import { RiShutDownLine } from 'react-icons/ri'

export function Header(props) {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/guilhermeaugustodsd.png" alt="Foto do usuário"/>

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Guilherme Dantas</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine size={20} color="#fff"/>
            </Logout>
        </Container>
            
    );
}