import { CaptionItem, CaptionCircle, CaptionContainer } from './styled';
import { seatColors } from '../../constants/colors';

export default function Caption() {

    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle data-test="seat" status={'selected'} seatColors={seatColors} />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle data-test="seat" status={'available'} seatColors={seatColors} />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle data-test="seat" status={'unavailable'} seatColors={seatColors} />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    );
}