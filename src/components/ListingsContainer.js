import React, { useEffect, useState } from "react"
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((listings) => setListings(listings))
  }, [])

  function onDeleted(deletedListing){
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
          key={listing.id} listing={listing}
          onDeleted={onDeleted}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
