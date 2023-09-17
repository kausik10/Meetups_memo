import { createContext, useState } from "react";
import { useFetcher } from "react-router-dom";

const FavouritesContext = createContext({
  favourties: [],
  totalfavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourtires, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteMeetup);
    });
  }
  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemFavouriteHandler(meetupId) {
    return userFavourtires.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourties: userFavourtires,
    totalfavourites: userFavourtires.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemFavourite: itemFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContext;
