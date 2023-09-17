import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";
function Favmeet() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalfavourites == 0) {
    content = <p>No favourties. Please add</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourties} />;
  }

  return (
    <section>
      <h1>Fav meets</h1>
      {content}
    </section>
  );
}

export default Favmeet;
