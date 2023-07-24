import { SeatItem } from './styled';
import { useEffect, useState } from 'react';

export default function Seat(props) {

    const { seat, selecionarAssento, estaSelecionado } = props;

    const [status, setStatus] = useState('available');

    useEffect(() => {

        if (estaSelecionado) {
            setStatus('selected')
        } else {
            if (!seat.isAvailable) {
                setStatus('unavailable')
            } else {
                setStatus('available')
            }
        }

    }, [estaSelecionado])

    return (
        <SeatItem data-test="seat" onClick={selecionarAssento} status={status}>{seat.name} </SeatItem>
    );
}