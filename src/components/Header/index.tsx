import Language from "./Language";
import Navigation from "./Navigation";
import './index.scss';
import AddName from "./AddName";
import Logo from "./Logo";


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <Logo />
                <Navigation />
                <div className="header__right-container">
                    <Language />
                    <AddName />
                </div>
            </div>
        </header>
    );
}


export default Header;