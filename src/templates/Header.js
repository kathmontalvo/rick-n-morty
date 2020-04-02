const Header = () => {
  const view = `
    <div class="Header-main"> 
      <div class="Header-logo">
        <h1>
          <a href="/">Rick y Morty</a>
        </h1>
      </div>
      <nav class=Header-nav">
        <a href="#/about">About</a>
      </nav>
    </div>
    `;
  return view;
};

export default Header;