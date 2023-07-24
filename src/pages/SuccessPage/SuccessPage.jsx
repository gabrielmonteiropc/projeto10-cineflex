import { Link } from 'react-router-dom';
import { PageContainer, TextContainer } from './styled';

export default function SuccessPage(props) {

    const { movie, date, sessão, ingressos, nome, cpf } = props.pegarInformações;

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{movie}</p>
                <p>{date} - {sessão}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>

                {ingressos.map(i => <p key={i}>{i}</p>)}

            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <Link to='/'>
                <button>Voltar para Home</button>
            </Link>
        </PageContainer >
    )
}