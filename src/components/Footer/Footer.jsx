import { FooterContainer } from './styled';

export default function Footer(props) {

    const { posterURL, title, weekday, horas } = props;

    return (
        <FooterContainer>
            <div>
                <img src={posterURL} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{weekday && horas && `${weekday} - ${horas}`}</p>
            </div>
        </FooterContainer>
    );
}