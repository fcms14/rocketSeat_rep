import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, User, Profile } from "./styles";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Header({ children }) {
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return (
        <Container>
            <h1>
                RocketMovies
            </h1>
            
            {children}

            <div>
                <User>
                    <strong> {user.name} </strong>
                    <span> <a href='/' onClick={signOut}>  Sair </a> </span>
                </User>
                <Profile to="/profile">
                    <img
                        src={avatarUrl}
                        alt={user.name}
                    />
                </Profile>
            </div>

        </Container>
    )
}