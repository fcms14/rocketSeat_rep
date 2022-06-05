import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>
            Intro ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ipsa at enim odio impedit natus beatae cumque pariatur dolorem esse. Sed error sit corporis eum delectus architecto eligendi repudiandae omnis.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li> <a href="#"> https://rocketseat.com.br/ </a></li>
              <li> <a href="#"> https://rocketseat.com.br/ </a></li>
            </Links>
          </Section>


          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>


          <Button title="Voltar"></Button>

        </Content>
      </main>

    </Container>
  )
}