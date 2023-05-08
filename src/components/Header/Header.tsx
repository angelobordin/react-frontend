import './Header.scss';
import { BsPersonCircle } from "react-icons/bs";

export default function Header() {
    return (<> 
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className='company'>
                            <div className="sigla">
                                B
                            </div>
                            <div className="company-name">
                                Biovalle Group
                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <div className="second">
                            <div className="user">
                                <div className='user-foto'>
                                    <BsPersonCircle size={32} />
                                </div>
                                <div className='user-name'>
                                    Angelo Bordin
                                </div>
                            </div>
                        </div>
                        {/* <ul className='lista'>
                            <li><a href="#">Perfil</a></li>
                            <li><a href="#">Configurações</a></li>
                            <li><a href="#">Notificações</a></li>
                            <li><a href="#">Desconectar</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </header>
    </>)
}