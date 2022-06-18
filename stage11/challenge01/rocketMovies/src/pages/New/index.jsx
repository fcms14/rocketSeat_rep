import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./styles";

export function New() {
    // const [links, setLinks] = useState([]);
    // const [newLink, setNewLink] = useState("");
    const [title, setTitle] = useState([]);
    const [rating, setRating] = useState([]);
    const [description, setDescription] = useState([]);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    // function handleAddLink(){
    //     setLinks((prevState => [...prevState, newLink]));
    //     setNewLink("");
    // }

    function handleAddTag() {
        setTags((prevState => [...prevState, newTag]));
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovieNote(){
        if(!title || title==""){
            return alert("Digite um título")
        }       
        if(!rating || rating==""){
            return alert("Digite a nota")
        }
        if(Number(rating) < 0 || Number(rating) > 5){
            return alert("Digite uma nota entre 0 e 5")
        }
        if(!description || description==""){
            return alert("Digite a descrição")
        }
        if(!tags || tags==""){
            return alert("Digite a(s) tag(s)")
        }
        if(newTag){
            return alert("Há um Marcador pendente para adicionar")
        }

        await api.post("/movies", {
            title,
            description,
            rating,
            tags
        });

        alert("Nota criada com sucesso!");
        navigate("/");
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to='/'>
                            <FiArrowLeft /> Voltar
                        </Link>
                        <h1> Novo Filme </h1>
                    </header>

                    <section>
                        <div>
                            <Input
                                placeholder="Título"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                type="number"
                                placeholder="Sua nota (de 0 a 5)"
                                onChange={e => setRating(e.target.value)}
                            />
                            {/* <Input type='range' placeholder="Sua nota (de 0 a 5)" /> */}
                        </div>
                    </section>

                    <section>
                        <div>
                            <Textarea
                                placeholder="Descrição"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                    </section>

                    <h2> Marcadores </h2>

                    <section className="marcadores">
                        <div>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                isNew
                                placeholder="Novo Marcador"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </section>

                    <section>
                        {/* <div>
                            <Button title="Exluir filme" toDelete />
                        </div> */}
                        <div>
                            <Button title="Salvar Filme" onClick={handleNewMovieNote} />
                        </div>
                    </section>
                </Form>
            </main>

        </Container>
    )
}