import React, { useRef, useEffect } from 'react';

function App() {
  const refs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const scrollToSection = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleNavClick = e => {
      e.preventDefault();
      const sectionId = e.target.getAttribute('href').substring(1);
      scrollToSection(refs[sectionId]);
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, [refs]);

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div ref={refs.section1} id="section1">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div ref={refs.section2} id="section2">
        <h2>Section 2</h2>
        <p>Nulla sed turpis nec libero sodales commodo.</p>
      </div>
      <div ref={refs.section3} id="section3">
        <h2>Section 3</h2>
        <p>Maecenas facilisis rhoncus ex in mattis.</p>
      </div>
    </div>
  );
}

export default App;
