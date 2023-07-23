import { ListContainer, PageContainer } from './styled';
import MovieCard from './../../components/MovieCard/MovieCard'
import { useEffect, useState } from 'react';
import { UrlPadrão } from './../../constants/url';
import axios from 'axios';


export default function HomePage() {

    const [filmes, setFilmes] = useState(undefined); //Pega lista de filmes do servidor

    useEffect(() => {

        const promise = axios.get(`${UrlPadrão}/movies`);

        promise.then(respostaSucesso => setFilmes(respostaSucesso.data));

        promise.catch(respostaErro => alert(respostaErro.response.data.message));

    }, []);

    //Mostra mensagem para o usuário se os filmes ainda n chegaram
    if (filmes === undefined) {
        return <div>Carregando lista de filmes</div>
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {filmes.map(filme => <MovieCard filme={filme} key={filme.id} />)}
            </ListContainer>

        </PageContainer>
    )
}