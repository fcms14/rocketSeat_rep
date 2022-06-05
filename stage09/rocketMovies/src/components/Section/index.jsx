import { Container } from "./styles";
import { Button } from "../Button";

export function Section({title, children}){
  
  return(
    <Container>
        <h2> {title} </h2>
        {children}

      <a href="new">
        <Button title="Adicionar Filme" add > </Button>
      </a>
    </Container>
  )
}