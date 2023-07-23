import { CaptionItem, CaptionCircle, CaptionContainer } from './styled';

export default function Caption() {

    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle status={'selected'} seatColors={seatColors} />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle status={'available'} seatColors={seatColors} />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle status={'unavailable'} seatColors={seatColors} />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    );
}