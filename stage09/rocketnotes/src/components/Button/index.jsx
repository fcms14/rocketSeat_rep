import { Container } from "./styles";

export function Button({title, loading}) {

    return (
        <Container 
            type="button"
            disabled={loading}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}