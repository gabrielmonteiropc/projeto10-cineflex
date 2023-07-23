import { useEffect, useState } from 'react';
import { FormContainer } from './styled';
import axios from 'axios';
import { UrlPadrão } from './../../constants/url';
import { useNavigate } from 'react-router-dom';

export default function BuyerForm(props) {

    const { selecionar, sessão } = props;

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpfUsuario, setCpfUsuario] = useState('');

    const navigator = useNavigate();

    function pegarDados(e) {

        e.preventDefault();

        const novaLista = {

            ids: selecionar.map(s => s.id),
            name: nomeUsuario,
            cpf: cpfUsuario
        }

        const promise = axios.post(`${UrlPadrão}/seats/book-many`, novaLista);

        promise.then(respostaSucesso => navigator('/sucesso'));

        promise.catch(respostaErro => alert(respostaErro.response.data.message));

        // useEffect(() => {



        // }, []);

    }

    return (
        <FormContainer onSubmit={pegarDados}>
            <label htmlFor='nomeUsuario'>Nome do Comprador:</label>
            <input
                id='nomeUsuario'
                placeholder="Digite seu nome..."
                onChange={(e) => setNomeUsuario(e.target.value)}
                value={nomeUsuario}
            />

            <label htmlFor='cpfUsuario' >CPF do Comprador:</label>
            <input
                id='cpfUsuario'
                placeholder="Digite seu CPF..."
                onChange={(e) => setCpfUsuario(e.target.value)}
                value={cpfUsuario}
            />

            <button type='submit'>Reservar Assento(s)</button>
        </FormContainer>
    );
}