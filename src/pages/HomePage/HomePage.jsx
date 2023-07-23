import { ListContainer, PageContainer } from './styled';
import MovieCard from './../../components/MovieCard/MovieCard'


export default function HomePage() {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <MovieCard />
                <MovieCard />
            </ListContainer>

        </PageContainer>
    )
}