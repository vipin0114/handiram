import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: 'Malai Kofta',
    description: 'Soft paneer dumplings in a creamy tomato-based curry.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Matar Paneer',
    description: 'Cottage cheese and peas cooked in a spicy gravy.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Butter Paneer',
    description: 'Rich and creamy paneer dish cooked in butter and spices.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in a buttery sauce.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Paneer Noodles',
    description: 'Delicious noodles stir-fried with paneer and vegetables.',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Chana Masala',
    description: 'Spiced chickpeas in a tangy tomato gravy.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Aloo Gobi',
    description: 'Cauliflower and potatoes cooked with aromatic spices.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;