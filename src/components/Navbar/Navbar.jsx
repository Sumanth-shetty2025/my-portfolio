import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Sumanth</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
