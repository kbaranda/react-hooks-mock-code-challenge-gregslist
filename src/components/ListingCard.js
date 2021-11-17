import React, {useState} from "react";

function ListingCard({listing, onDeleted}) {
  const {image, description, location} = listing;
  const [isClicked, setIsClicked] = useState(false)

  function handleStarLiked(){
    setIsClicked((isClicked) => !isClicked)
    console.log(isClicked)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then((resp) => resp.json())
    .then(() => onDeleted(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isClicked === true ? (
          <button className="emoji-button favorite active"
          onClick={handleStarLiked}
          >★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={handleStarLiked}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
        onClick={handleDelete}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
