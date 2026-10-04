import React from 'react';
import './About.css';
import malaiKoftaImage from '../Assets/Malai Kofta.jpg';

function About() {
  return (
    <main className="about-page">
      <section className="about page-shell">
        <header className="page-heading">
          <p className="section-kicker">Our story</p>
          <h1>A welcoming table on the road</h1>
          <p>Handibhog brings comforting North Indian food and warm hospitality to Dhampur–Nagina Road.</p>
        </header>
        <div className="about-story">
          <figure className="about-photo">
            <img src={malaiKoftaImage} alt="Malai kofta served in a traditional clay pot" loading="lazy" />
            <figcaption>Freshly made in Bijnor</figcaption>
          </figure>
          <div className="about-copy">
            <h2>Good food, wherever you’re headed.</h2>
            <p>Founded in 2026, Handibhog was built around a simple idea: serve fresh, hygienic, flavour-rich food in a place where guests can relax and refuel.</p>
            <p>Our menu brings familiar North Indian flavours to travellers, families, and local guests. We focus on quality ingredients, consistent taste, and the kind of hospitality that makes a quick stop feel like a welcome break.</p>
            <p>Taste is our promise and safety is our priority. We hope to become a place you visit once, then return to whenever you pass by.</p>
          </div>
        </div>
        <div className="owner-info">
          <div>
            <p className="section-kicker">The people behind the table</p>
            <h2>Prateek Singh &amp; Mamta</h2>
          </div>
          <p>With years of experience in the culinary arts, Mr. Prateek Singh brings the essence of North Indian cuisine to your table.</p>
        </div>
      </section>
    </main>
  );
}

export default About;