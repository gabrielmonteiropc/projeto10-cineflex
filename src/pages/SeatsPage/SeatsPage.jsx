import Footer from '../../components/Footer/Footer'; 
import Seat from './../../components/Seat/Seat' 
import { SeatsContainer, PageContainer } from './styled'; 
import Caption from './Caption';
import BuyerForm from './BuyerForm';

export default function SeatsPage() {

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>

                <Seat />

            </SeatsContainer>

            <Caption />

            <BuyerForm />

            <Footer />

        </PageContainer>
    )
}