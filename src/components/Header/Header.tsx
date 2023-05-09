import './Header.scss';
import { BsFillGearFill, BsFillGrid3X3GapFill, BsPersonCircle, BsPersonFill } from "react-icons/bs";

export default function Header() {
    return (<>
        <header>
            <div className='company'>
                <div className='first'>
                    <div className='sigla'>
                        B
                    </div>
                    <div className='company-name'>
                        Biovalle Group
                    </div>
                </div>
            </div>
            <div className='user'>
                <div className='second'>
                    <div className="userdata">
                        <div className='person'>
                            <BsPersonCircle size={32} />
                        </div>
                        <div className='user-name'>
                            Angelo Bordin
                        </div>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li><BsPersonFill /><a>Perfil</a></li>
                            <li><BsFillGearFill /><a>Configurações</a></li>
                            <li><BsFillGrid3X3GapFill /><a>Utilidades</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>)
}