import { Link } from 'react-router-dom';
import { ButtonsContainer, SessionContainer } from './styled';

export default function SessionCard(props) {

    const { id, date, weekday, showtimes } = props.sessão;

    return (
        <SessionContainer data-test="movie-day" >
            {`${weekday} - ${date}`}
            <ButtonsContainer data-test="movie-day">
                {showtimes.map(horário => (

                    <Link key={horário.id} to={`/assentos/${horário.id}`} data-test="showtime">
                        <button data-test="showtime">{horário.name}</button>
                    </Link>

                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}