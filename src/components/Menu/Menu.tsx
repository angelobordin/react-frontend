import { BsFillPeopleFill, BsFillTruckFrontFill } from 'react-icons/bs';
import './Menu.scss';
export default function Menu() {
    const openMenuItem = (e: any) => {
        console.log(e)
        const className = e.target.classList[1];
        console.log(className);
    }

    return (<>
        <nav className="menu">
            <ul className='menuLista' onClick={openMenuItem}>
                <li className='menuItem'>
                    <BsFillPeopleFill /><a className={`itemName customer`}>Cliente</a>
                    <ul className='menuOpcoes'>
                        <li className='opcaoItem'><a href="#">Novo Cadastro</a></li>
                        <li className='opcaoItem'><a href="#">Pesquisar</a></li>
                    </ul>
                </li>
                <li className='menuItem'>
                    <BsFillTruckFrontFill /><a className='itemName'>Fornecedores</a>
                    <ul className='menuOpcoes'>
                        <li className='opcaoItem'><a href="#">Novo Cadastro</a></li>
                        <li className='opcaoItem'><a href="#">Pesquisar</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>)
}