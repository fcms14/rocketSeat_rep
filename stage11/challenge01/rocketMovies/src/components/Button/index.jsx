import { FiPlus } from 'react-icons/fi'
import { Container } from "./styles";

export function Button({title, loading, add, toDelete, ...rest}) {

    return (
        <Container 
            toDelete = {toDelete}
            type="button"
            disabled={loading}
            {...rest}
        >
            {add ? <FiPlus /> : ""}
            {loading ? 'Carregando...' : title}

        </Container>
    )
}