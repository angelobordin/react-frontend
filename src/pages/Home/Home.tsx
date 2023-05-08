import './Home.scss';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Menu from "../../components/Menu/Menu";

export default function Home() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-10">
                    <Main />
                </div>
            </div>
        </div>
    </>)
}