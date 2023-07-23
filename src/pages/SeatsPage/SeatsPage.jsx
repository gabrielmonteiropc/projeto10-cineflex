import Footer from '../../components/Footer/Footer';
import Seat from './../../components/Seat/Seat'
import { SeatsContainer, PageContainer } from './styled';
import Caption from './Caption';
import BuyerForm from './BuyerForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UrlPadrão } from '../../constants/url';
import { seatColors } from '../../constants/colors';

export default function SeatsPage() {

    const { idSessao } = useParams();

    const [sessão, setSessão] = useState(undefined);

    const [selecionar, setSelecionar] = useState([]);

    useEffect(() => {

        const promise = axios.get(`${UrlPadrão}/showtimes/${idSessao}/seats`);

        promise.then(respostaSucesso => setSessão(respostaSucesso.data));

        promise.catch(respostaErro => alert(respostaErro.response.data.message));

    }, []);

    if (sessão === undefined) {
        return <div>Carregando</div>

    }

    console.log(sessão);

    function selecionarAssento(seat) {

        if (!seat.isAvailable) {
            alert('Esse assento não está disponível')
        } else {
            const estaSelecionado = selecionar.some(s => s.id === seat.id);
            if (estaSelecionado) {

                const remove = selecionar.filter(s => s.id !== seat.id);

                setSelecionar(remove);
            } else {
                setSelecionar([...selecionar, seat]);
            }
        }
    }

    console.log(selecionar);

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>

                {sessão.seats.map(seat => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        seatColors={seatColors}
                        selecionarAssento={() => selecionarAssento(seat)}
                        estaSelecionado={selecionar.some(s => s.id === seat.id)}
                    />
                )
                )}

            </SeatsContainer>

            <Caption />

            <BuyerForm selecionar={selecionar} sessão={sessão} />

            <Footer
                posterURL={sessão.movie.posterURL}
                title={sessão.movie.title}
                weekday={sessão.day.weekday}
                horas={sessão.name}
            />

        </PageContainer>
    )
}