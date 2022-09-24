'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('coffees', [
        {
        name: 'Moosetachio (Pistachio Butter Vanilla)',
        type: 'medium',
        description: 'Signature Infusion of buttery toasted pistachios complimented by lightly sweet vanilla beans.',
        price: 16.00,
        imgUrl: 'coffee1.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Flavor Savor',
        type: 'medium dark',
        description: 'Full-bodied Rwandan coffee offers a bright, creamy taste with complex citrus notes and a sharp finish.',
        price: 15.00,
        imgUrl: 'coffee2.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Yeard',
        type: 'medium dark',
        description: 'Medium to full bodied with intense and creamy notes of berries. Subtle notes of brown bread sweetness.',
        price: 15.00,
        imgUrl: 'coffee3.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Atomic Blonde',
        type: 'blonde (lightest)',
        description: 'Signature Infusion featuring the bold combination of vanilla and cayenne to kick-start your day.',
        price: 15.00,
        imgUrl: 'coffee4.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Big Easy (Toasted Praline)',
        type: 'medium',
        description: 'Signature Infusion of southern toasted praline is our nod to the flavors of New Orleans.',
        price: 16.00,
        imgUrl: 'coffee5.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Smooth Operator (Vanilla, Hazelnut)',
        type: 'medium',
        description: 'Signature Infusion featuring vanilla and roasted hazelnut.',
        price: 16.00,
        imgUrl: 'coffee6.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Moonshine (Bourbon Infused)',
        type: 'medium',
        description: 'Signature Infusion featuring bourbon. Sweet and oakey. Does not contain alcohol.',
        price: 16.00,
        imgUrl: 'coffee7.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Shaman (Turmeric, Cinnamon)',
        type: 'medium',
        description: 'Signature Infusion with cinnamon and turmeric. Medium bodied. Warm and creamy.',
        price: 16.00,
        imgUrl: 'coffee8.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Yeti (Chocolate, Cayenne)',
        type: 'medium',
        description: 'Signature Infusion featuring dark cocoa with cayenne to opens up a richer cocoa experience.',
        price: 16.00,
        imgUrl: 'coffee9.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Gunslinger (Mexico Chiapas)',
        type: 'medium',
        description: 'From the Chiapas region of Mexico, this full bodied blend is bold and bright with caramel and chocolate notes.',
        price: 16.00,
        imgUrl: 'coffee10.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Shag',
        type: 'medium',
        description: 'Costa Rican blend is smooth and aromatic. Medium to full-bodied. Bright with notes of toasted pine nut.',
        price: 15.00,
        imgUrl: 'coffee11.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Chinstrap (Columbia)',
        type: 'medium dark',
        description: 'Colombian Supremo beans are perfectly roasted to bring out the balanced flavors the region is known for.',
        price: 15.00,
        imgUrl: 'coffee12.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Verdi (Espresso Blend)',
        type: 'medium dark',
        description: 'Specially blended beans for a well balanced espresso that is bold and robust with a smooth, earthy finish.',
        price: 15.00,
        imgUrl: 'coffee13.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'French Fork (French Roast)',
        type: 'extra dark',
        description: 'Special blend of central American beans enhanced by our darkest roast. Full-bodied.',
        price: 15.00,
        imgUrl: 'coffee14.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Bandholz (Breakfast Blend)',
        type: 'medium light',
        description: 'Specially chosen for a lighter roasted. Medium-bodied. Buttery and smooth finish.',
        price: 15.00,
        imgUrl: 'coffee15.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Stubble (Signature Blend)',
        type: 'medium',
        description: 'Specially selected blend for a complex, satisfying cup. Light to Medium-bodied. Smoothly complex with a velvety finish.',
        price: 15.00,
        imgUrl: 'coffee16.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Baby Face (Decaf)',
        type: 'medium',
        description: 'Brazilian beans are treated to remove the caffeine, then roasted carefully for full coffee flavor and complexity.',
        price: 15.00,
        imgUrl: 'coffee17.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: 'Balbo',
        type: 'medium',
        description: 'Classic Brazilian beans roasted for a bit more strength and body. Medium-bodied. Clean and balanced.',
        price: 15.00,
        imgUrl: 'coffee18.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        name: '5 O Clock Shadow (House Blend)',
        type: 'medium',
        description: 'Roast master selected blend of central American beans for a smooth, well balanced cup. Medium-bodied.',
        price: 15.00,
        imgUrl: 'coffee19.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('coffees', null, {});
  }
};

