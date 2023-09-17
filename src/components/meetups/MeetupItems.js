import { useContext } from "react";
import Card from "../../ui/Card";
import styles from "./Meetups.module.css";
import FavouritesContext from "../../store/favourites-context";
function MeetupItems(props) {
  const favouriteCtx = useContext(FavouritesContext);
  const itemFavourite = favouriteCtx.itemFavourite(props.id);
  function toggleFavouriteStatusHandler() {
    if (itemFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <>
      <Card>
        <li className={styles.item}>
          <div className={styles.image}>
            <img src={props.image} alt="Image" />
          </div>
          <div className={styles.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={styles.actions}>
            <button onClick={toggleFavouriteStatusHandler}>
              {itemFavourite ? "Remove From Favourites" : "To Favourites"}
            </button>
          </div>
        </li>
      </Card>
    </>
  );
}

export default MeetupItems;
