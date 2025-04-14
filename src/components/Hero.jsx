import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
  <div className="hero-content" data-aos="zoom-in">
    <h1 className="hero-title">Hi, I'm Belal Amr 👋</h1>
    <p className="hero-subtitle">Fullstack Developer | React & Laravel Specialist</p>
    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
      <a href="#projects" className="btn">View Projects</a>
      <a href="#contact" className="btn btn-outline">Contact Me</a>
    </div>
  </div>
</section>

  );
}

export default Hero;
