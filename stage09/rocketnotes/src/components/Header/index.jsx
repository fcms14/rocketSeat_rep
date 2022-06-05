import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
// import { Button } from "../../components/Button";


export function Header(){
  
  return(
    <Container>
        <Profile to="/profile">
            <img 
                src="https://github.com/fcms14.png" 
                alt="Foto do usuário" 
            />
            <div>
                <span> Bem-vindo </span>
                <strong> fcms14 </strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine />
        </Logout>

    </Container>
  )
}