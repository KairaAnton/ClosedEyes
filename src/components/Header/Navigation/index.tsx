import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Language from '../Language';
import search from '../../../images/search.png';
import './index.scss';


type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {

    const [isActive, setIsActive] = useState(false)
    const clickedNav = () => { setIsActive(!isActive) }
    return (
        <section className="navigation">

            <nav className={classNames({ "navigation__nav-container": !isActive }, { "navigation__nav-container-active": isActive })}>

                <Link to='/' className='navigation__span'>ЗНАЙТИ ЛЮДИНУ</Link>
                <Link to='/' className='navigation__span'>ПРО ПРОЕКТ</Link>
                <Link to='/' className='navigation__span'>ПІДТРИМАТИ</Link>
                <Language className="navigation__language navigation__span" />

            </nav>
            <div>
                <button className='navigation__search'><img src={search} alt='' /></button>
                <div onClick={clickedNav} className={classNames('navigation__nav-menu',{'navigation__nav-menu-active':isActive})}>
                    <span />
                </div>
            </div>
        </section>
    );
}


export default Navigation;