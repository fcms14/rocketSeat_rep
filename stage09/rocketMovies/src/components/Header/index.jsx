import { RiShutDownLine } from 'react-icons/ri';
import { Container, Search, User, Profile } from "./styles";
import { Input } from "../../components/Input";
// import { Button } from "../../components/Button";


export function Header() {

    return (
        <Container>
            <h1>
                RocketMovies
            </h1>
            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <div>
                <User>
                    <strong> Felipe Cardoso </strong>
                    <span> <a href='/'>  Sair </a> </span>
                </User>
                <Profile to="/profile">
                    <img
                        src="https://github.com/fcms14.png"
                        alt="Foto do usuário"
                    />
                </Profile>
            </div>

            {/* <Logout>
            <RiShutDownLine />
        </Logout> */}

        </Container>
    )
}