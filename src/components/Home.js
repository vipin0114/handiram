import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import malaiKoftaImage from '../Assets/Malai Kofta.jpg';
import paneerNoodlesImage from '../Assets/Paneer noodles.jpg';
import sahiPaneerImage from '../Assets/Sahi PAneer.jpg';
import dalMakhaniImage from '../Assets/Daal Makhani.jpg';
import vegManchurianImage from '../Assets/Veg Manchurian.jpg';
import alooGobiImage from '../Assets/Allo Gobhi.png';
const featuredDishes = [
  {
    name: 'Malai Kofta',
    description: 'Soft paneer dumplings in a creamy tomato-based curry.',
    image: malaiKoftaImage
  },
  {
    name: 'Paneer Noodles',
    description: 'Delicious noodles stir-fried with paneer and vegetables.',
    image: paneerNoodlesImage
  },
  {
    name: 'Shahi Paneer',
    description: 'Rich and creamy paneer dish with royal flavors.',
    image: sahiPaneerImage
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in a buttery sauce.',
    image: dalMakhaniImage
  },
  {
    name: 'Allo Gobi',
    description: 'Cauliflower and potatoes cooked with aromatic spices.',
    image: alooGobiImage
  },
  {
    name: 'Veg Manchurian',
    description: 'Cottage cheese and peas cooked in a spicy gravy.',
    image: vegManchurianImage
  }
];

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="Handiram Logo" 
          className="hero-logo" />
          <h1> Welcome to Handiram</h1>
          <p>Authentic Indian Cuisine</p>
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