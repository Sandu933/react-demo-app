import { Link } from "react-router-dom";
import navBarStyles from './MainNavigationBar.module.css'


function MainNavBar(){
    return(
        <header className={navBarStyles.header}>
            <div className={navBarStyles.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        {/* Link allow us to not to send extra request to the server instead it loads respective content according to the url */}
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetups">New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavBar;