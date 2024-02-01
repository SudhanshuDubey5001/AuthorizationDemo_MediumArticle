import React from 'react';

export const TravelBlogPage = () => {
  const vacationPlaces = [
    { name: 'Beach Paradise', image: 'beach.jpg', description: 'A relaxing escape by the sea.' },
    { name: 'Mountain Retreat', image: 'mountain.jpg', description: 'Discover the beauty of the mountains.' },
  ];

  return (
    <div className="travel-blog-page">
      <header>
        <h1>Explore Wanderlust</h1>
        <p>Your gateway to unforgettable adventures</p>
      </header>
      
      <section className="vacation-places">
        {vacationPlaces.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <div className="place-details">
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2024 Explore Wanderlust</p>
      </footer>
    </div>
  );
};

export default TravelBlogPage;
