import React from 'react';
import WasteCard from '../WasteCard/WasteCard'

const WasteCardList = ({ favourites, wasteItems, addFav, removeFav }) => {
  return (
    <div>
      {wasteItems.map((item, i) => (
      	<WasteCard
      		key={i}
      		title={item.title}
      		body={item.body}
          addFav={addFav}
          removeFav={removeFav}
          isFavourited={favourites.some(eachFavourite => eachFavourite.title === item.title)}
      	/>
      ))}
    </div>
  );
}

export default WasteCardList;