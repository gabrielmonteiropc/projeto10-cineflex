import { useParams } from 'react-router-dom';
import SessionCard from '../../components/SessionCard/SessionCard';
import Footer from './../../components/Footer/Footer';
import { PageContainer } from './styled';
import { UrlPadrão } from './../../constants/url';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SessionsPage() {

    const { idFilme } = useParams(); // Destrutura a variável da URL do componente

    const [sessões, setSessões] = useState(undefined); //Pega os dados das sessão dos filmes do servidor

    useEffect(() => {

        const promise = axios.get(`${UrlPadrão}/movies/${idFilme}/showtimes`);

        promise.then(respostaSucesso => setSessões(respostaSucesso.data));

        promise.catch(respostaErro => alert(respostaErro.response.data.message));

    }, []);

    if (sessões === undefined) {
        return <div>Carregando...</div>
    }

    console.log(sessões);

    return (
        <PageContainer>
            Selecione o horário

            <div>
                {sessões.days.map(sessão => <SessionCard data-test="movie-day" key={sessão.id} sessão={sessão} />)}
            </div>

            <Footer posterURL={sessões.posterURL} title={sessões.title} />
        </PageContainer>
    )
}