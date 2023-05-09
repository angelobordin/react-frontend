import axios from 'axios';
import './Login.scss';
import { useState } from 'react';
import { setSessionStorage } from '../../util/functions/SessionStorage';

interface IUserDataLogged {
    temporaryToken: string;
    user: {
        company_id: number;
        id: number;
        name: string;
    }
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logUser = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:8090/login', { email, password }).then(res => {
            const userDataLogged: IUserDataLogged = res.data.data;
            if (!userDataLogged) throw new Error(res.data);
            setSessionStorage('token', `Bearer ${userDataLogged.temporaryToken}`);
            setSessionStorage('userName', userDataLogged.user.name);
            setSessionStorage('userCompany', userDataLogged.user.company_id.toString());
            setSessionStorage('userId', userDataLogged.user.id.toString());
            setEmail('');
            setPassword('');
            window.location.href = 'home';
        }).catch(err => {
            alert(err);
        });
    }

    return (<>
        <div className="container-fluid background">
            <div className='row login'>
                <div className="row">
                    <div className='col-md-12 title text-center mb-3'>
                        <h1>Login</h1>
                    </div>
                </div>
                <form className='row' onSubmit={logUser}>
                    <div className="col-12 mb-3">
                        <div className="form-floating mb-3">
                            <input className="form-control" id="companyNumber" required placeholder="name@example.com" />
                            <label htmlFor="companyNumber">CNPJ</label>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailInput" required placeholder="name@example.com" />
                            <label htmlFor="emailInput">Email address</label>
                        </div>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="form-floating mb-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="passwordInput" required placeholder="Password" />
                            <label htmlFor="passwordInput">Password</label>
                        </div>
                    </div>
                    <div className='col-12 mb-3'>
                        <button className="btn btn-primary" type="submit"><strong>Avançar</strong></button>
                    </div>
                </form>
            </div>
        </div>
    </>);
}