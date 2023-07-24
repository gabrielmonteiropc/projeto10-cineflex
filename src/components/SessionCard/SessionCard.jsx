import { Link } from 'react-router-dom';
import { ButtonsContainer, SessionContainer } from './styled';

export default function SessionCard(props) {

    const { id, date, weekday, showtimes } = props.sessão;

    return (
        <SessionContainer data-test="movie-day" >
            {`${weekday} - ${date}`}
            <ButtonsContainer data-test="showtime" >
                {showtimes.map(horário => (

                    <Link data-test="showtime" key={horário.id} to={`/assentos/${horário.id}`}>
                        <button data-test="showtime">{horário.name}</button>
                    </Link>

                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}