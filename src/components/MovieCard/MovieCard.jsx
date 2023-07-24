import { MovieContainer } from './styled';
import { Link } from 'react-router-dom';


export default function MovieCard(props) {

    const { id, posterURL, title } = props.filme // Faz a destruturação dos filmes

    return (
        <MovieContainer data-test="movie">
            <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt={title} />
            </Link>
        </MovieContainer>
    );
}