import React from 'react';

const FeaturedPropertiesCarousel = ({ properties }: { properties: any[] }) => {
  return (
    <div>
      {/* Qui va il carosello delle proprietà in evidenza */}
      <pre>{JSON.stringify(properties, null, 2)}</pre>
    </div>
  );
};

export default FeaturedPropertiesCarousel; 