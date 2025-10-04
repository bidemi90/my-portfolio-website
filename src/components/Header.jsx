import React from "react";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div>a tech</div>
         <section>
          <div>
            <a href="#about">
              <button>about</button>
            </a>
            <hr />
          </div>

          <div>
            <a href="#projects">
              <button>project</button>
            </a>
            <hr />
          </div>

          <div>
            <a href="#contact">
              <button>contact</button>
            </a>
            <hr />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;
