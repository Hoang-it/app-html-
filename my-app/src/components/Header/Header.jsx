import styled from "styled-components/macro";

const HeaderStyle = styled.div`
  .nav {}
  .nav li {
    display: inline-block;
    font-size: 25px;
    padding: 20px;

  }
  a {
    text-decoration: none;
    color: white;
    font-family: 'Space Grotesk';
    font-style: normal;
  }
  .search-input {
    width: 250px;
    height: 30px;
    border: 1px solid #E5E5E5;
    border-radius: 3px;
    background-color: transparent;
    background: url('./assets/search-icon.svg') no-repeat left;
    background-size: 10px;
    background-position: 194px 10px;
  }

  .search-input::placeholder {
      padding-left: 7px;
      color: white;
  }

  .btn {
    color: white;
    background-image: linear-gradient(to right, #E12D2D, #1254FE);
    border-radius: 5px;
    width: 100px;
    height: 40px;
    border: none;
    margin-left: 100px;

  }
  ul {
    margin-left:180px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <header>
          <ul className="nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#clients">Our Clients</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <input className="search-input" placeholder="Search"></input>
              <button className="btn">Connect</button>
          </ul>
      </header>
    </HeaderStyle>    
  );
}