import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, Content, NewNote } from "./styles";
import { Search } from "../../components/Header/styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";


export function Home() {
    const { user } = useAuth();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const resp = await api.get(`/movies?user_id=${user.id}&title=${search}`)
            setMovies(resp.data);
        }
        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header>
                <Search>
                    <Input
                        placeholder="Pesquisar pelo título"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Search>
            </Header>



            <Section title="Meus filmes">
            </Section>

            <Content>
                {
                    movies.map(movie => (
                        <Note
                            key={String(movie.id)}
                            data={movie}
                        />
                    ))
                }
            </Content>

        </Container >
    )
}

