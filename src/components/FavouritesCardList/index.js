import React from 'react';
import WasteCard from '../WasteCard';
import './FavouritesCardList.css';


const FavouritesCardList = ({favourites, removeFav, addFav}) => {
  return (
    <div className="favouritesCardList">
      <h1 className="favouritesHeading pl4">Favourites</h1>
      {favourites.map((item, i) => (
        <WasteCard
          key={i}
          title={item.title}
          body={item.body}
          addFav={addFav}
          removeFav={removeFav}
          isFavourited
        />
      ))}
    </div>

  );
};

export default FavouritesCardList;
