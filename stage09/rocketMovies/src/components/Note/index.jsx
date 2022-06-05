import { FiStar, FiClock } from 'react-icons/fi'
import { Container, Author } from "./styles";
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {


  return (
    <Container>
      <h1>{data.title}</h1>

      <Author>
        <img src={data.picture} alt="Foto do usuário" width = "20" />
        Por  <span> {data.author} </span> 
        <FiClock /> {data.date} às {data.time}
      </Author>

      <h2> 
        <FiStar class= {data.stars >= 1 ? "rated" : ""} />
        <FiStar class= {data.stars >= 2 ? "rated" : ""} />
        <FiStar class= {data.stars >= 3 ? "rated" : ""} />
        <FiStar class= {data.stars >= 4 ? "rated" : ""} />
        <FiStar class= {data.stars >= 5 ? "rated" : ""} />
      </h2>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  )
}