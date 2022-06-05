import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from "./styles";

export function New() {

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
              <Input placeholder="Título" />
            </div>
            <div>
              <Input range placeholder="Sua nota (de 0 a 5)" />
            </div>
          </section>

          <section>
            <div>
              <Textarea placeholder="Observações" />
            </div>
          </section>

          <h2> Marcadores </h2>

          <section class="marcadores">
            <div>
              <NoteItem value="React" />
            </div>
            <div>
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </section>

          <section>
            <div>
              <Button title="Exluir filme" toDelete />
            </div>
            <div>
              <Button title="Salvar Alterações" />
            </div>
          </section>



        </Form>
      </main>

    </Container>
  )
}