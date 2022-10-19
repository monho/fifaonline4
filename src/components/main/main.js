import SearchForm from "../common/SearchForm";
import Footer from "../common/footer/Footer"
import "./main.css";

const Main = () => {
  return (
    <main>
      <h2 className="main-head">FOT.KR</h2>
      <SearchForm />
      <Footer />
    </main>
  );
};

export default Main;