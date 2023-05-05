import './style.scss';
import { useState } from 'react';
import axios from 'axios';
import { getSessionStorage, setSessionStorage } from '../../util/functions/SessionStorage';

interface IUserDataLogged {
    temporaryToken: string;
    userData: {
        company_id: number;
        id: number;
        name: string;
    }
}

export default function Login() {
    let userToken = getSessionStorage('token');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userLogged, setUserLogged] = useState(userToken != null);

    if (userLogged) {
        window.location.href = 'home';
    };

    const logUser = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:8090/login', { email, password }).then(res => {
            const userDataLogged: IUserDataLogged = res.data.data;
            setSessionStorage('token', `Bearer ${userDataLogged.temporaryToken}`);
            setSessionStorage('userName', userDataLogged.userData.name);
            setSessionStorage('userCompany', userDataLogged.userData.company_id.toString());
            setSessionStorage('userId', userDataLogged.userData.id.toString());
            setUserLogged(true);
            window.location.href = 'home';
        }).catch(err => {
            alert(err);
        });
    }

    return (<>
        <div className="background">
            <div className='login'>
                <div className='title text-center mb-3'>
                    <h1>Login</h1>
                </div>
                <form className="form" onSubmit={logUser}>
                    <div className='form-group'>
                        <div className="col-md-12 mb-3">
                            <div className="form-floating mb-3">
                                <input className="form-control" id="companyNumber" required placeholder="name@example.com" />
                                <label htmlFor="companyNumber">CNPJ</label>
                            </div>
                        </div>

                        <div className="col-md-12 mb-3">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="emailInput" required placeholder="name@example.com" />
                                <label htmlFor="emailInput">Email address</label>
                            </div>
                        </div>

                        <div className="col-md-12 mb-3">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" required placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                        </div>
                        <div className="divBtn">
                            <button className="btn btn-primary" type="submit"><strong>Avançar</strong></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>);
}