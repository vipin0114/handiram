import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const featuredDishes = [
  {
    name: 'Malai Kofta',
    description: 'Soft paneer dumplings in a creamy tomato-based curry.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Paneer Noodles',
    description: 'Delicious noodles stir-fried with paneer and vegetables.',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Shahi Paneer',
    description: 'Rich and creamy paneer dish with royal flavors.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in a buttery sauce.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Matar Paneer',
    description: 'Cottage cheese and peas cooked in a spicy gravy.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1><img src="/logo.png" alt="Handiram Logo" className="hero-logo" /> Welcome to Handiram</h1>
          <p>Authentic North Indian Cuisine</p>
          <div className="hero-buttons">
            <Link to="/reservation" className="btn">Reserve a Table</Link>
            <Link to="/menu" className="btn btn-gold">View Menu</Link>
          </div>
        </div>
      </section>

      <section className="featured-dishes">
        <h2>Our Signature Dishes</h2>
        <p>Experience the authentic flavors of North India</p>
        <div className="dishes-grid">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <img src={dish.image} alt={dish.name} />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <Link to="/menu" className="btn">View Full Menu</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;