import { ButtonsContainer, SessionContainer } from './styled';

export default function SessionCard(props) {

    const { date, weekday, showtimes } = props.sessão;

    return (
        <SessionContainer>
            {`${weekday} - ${date}`}
            <ButtonsContainer>
                {showtimes.map(horário => <button key={horário.id}>{horário.name}</button>)}
            </ButtonsContainer>
        </SessionContainer>
    )
}