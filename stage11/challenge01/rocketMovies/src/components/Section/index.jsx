import { Container } from "./styles";
import { Button } from "../Button";
import { Link } from 'react-router-dom'

export function Section({ title, children }) {

  return (
    <Container>
      <h2> {title} </h2>
      {children}

      <Link to='/new'>
        <Button title="Adicionar Filme" add > </Button>
      </Link>      
    </Container>
  )
}