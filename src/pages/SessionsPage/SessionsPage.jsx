import SessionCard from '../../components/SessionCard/SessionCard';
import Footer from './../../components/Footer/Footer';
import { PageContainer } from './styled';

export default function SessionsPage() {

    return (
        <PageContainer>
            Selecione o horário
            
            <div>
                <SessionCard/>
            </div>

            <Footer/>
        </PageContainer>
    )
}