
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const applyLink = "https://forms.gle/o2AX7xMKuonMRBZ17";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">

        <div className="nav-container">

          {/* OneAlent Brand */}
          <a
            href="#home"
            className="nav-brand"
            onClick={closeMenu}
          >
            <img
              src="/OneAlentLogo.png"
              alt="OneAlent Logo"
              className="nav-logo"
            />

            <span className="brand-text">
              OneAlent
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Apply Button */}
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Apply Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
        >

          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              style={{ "--item-index": index }}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Apply Now
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
