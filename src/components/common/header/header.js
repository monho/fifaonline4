import "./header.css";
import SearchForm from "../SearchForm";

const Header = () => {
  console.log(window.location.href);
  return (
    <header>
      <div className="headerWrap">
        <h1>FOT.KR</h1>
        {window.location.href === "http://localhost:3000/about" ? (
          <SearchForm />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;