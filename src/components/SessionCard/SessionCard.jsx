import { Link } from 'react-router-dom';
import { ButtonsContainer, SessionContainer } from './styled';

export default function SessionCard(props) {

    const { id, date, weekday, showtimes } = props.sessão;

    return (
        <SessionContainer>
            {`${weekday} - ${date}`}
            <ButtonsContainer>
                {showtimes.map(horário => (

                    <Link key={horário.id} to={`/assentos/${id}`}>
                        <button>{horário.name}</button>
                    </Link>

                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}