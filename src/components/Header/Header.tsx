import './Header.scss';
import { BsPersonCircle } from "react-icons/bs";

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
                    <div className='person'>
                        <BsPersonCircle size={32} />
                    </div>
                    <div className='user-name'>
                        Angelo Bordin
                    </div>
                </div>
            </div>
        </header>
    </>)
}