import React from 'react';
import './Menu.css';
import malaiKoftaImage from '../Assets/Malai Kofta.jpg';
import sahiPaneerImage from '../Assets/Sahi PAneer.jpg';
import dalMakhaniImage from '../Assets/Daal Makhani.jpg';
import paneerNoodlesImage from '../Assets/Paneer noodles.jpg';
import chanaMasalaImage from '../Assets/Chana Masala.png';
import alooGobiImage from '../Assets/Allo Gobhi.png';
import butterPaneerImage from '../Assets/Butter Paneer.png';

const menuItems = [
  {
    name: 'Malai Kofta',
    description: 'Soft paneer dumplings in a creamy tomato-based curry.',
    image: malaiKoftaImage
  },
  {
    name: 'Sahi Paneer',
    description: 'Cottage cheese and peas cooked in a spicy gravy.',
    image: sahiPaneerImage
  },
  {
    name: 'Butter Paneer',
    description: 'Rich and creamy paneer dish cooked in butter and spices.',
    image: butterPaneerImage
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in a buttery sauce.',
    image: dalMakhaniImage
  },
  {
    name: 'Paneer Noodles',
    description: 'Delicious noodles stir-fried with paneer and vegetables.',
    image: paneerNoodlesImage
  },
  {
    name: 'Chana Masala',
    description: 'Spiced chickpeas in a tangy tomato gravy.',
    image: chanaMasalaImage
  },
  {
    name: 'Aloo Gobi',
    description: 'Cauliflower and potatoes cooked with aromatic spices.',
    image: alooGobiImage
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