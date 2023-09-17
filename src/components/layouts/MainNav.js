import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import img from "./1_EK8I8k19h9V04NnyO59C_A.png";
import FavouritesContext from "../../store/favourites-context";
function MainNav() {
  const favouriteCtx = useContext(FavouritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={img} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeets</Link>
          </li>
          <li>
            <Link to="/new-meets">NewMeetup</Link>
          </li>
          <li>
            <Link to="/fav-meets">FavMeetup
              <span className={styles.badge}>{favouriteCtx.totalfavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
