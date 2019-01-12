import React from 'react';
import WasteCard from '../WasteCard/WasteCard'

const WasteCardList = ({ wasteItems }) => {
  return (
    <div>
      {wasteItems.map(item => (
      	<WasteCard
      		key={wasteItems.indexOf(item)}
      		title={item.title}
      		body={item.body}
      	/>
      ))}
    </div>
  );
}

export default WasteCardList;