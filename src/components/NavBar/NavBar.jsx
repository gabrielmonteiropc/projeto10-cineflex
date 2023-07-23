import { NavContainer } from './styled';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <NavContainer>
            <Link to={"/"}>
                CINEFLEX
            </Link>
        </NavContainer>
    );
}