import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./searchFrom.css";
import search from "../../asset/search.png";
import User from "../../utils/api/user";

const SearchForm = () => {
  const [nickname, setNickname] = useState("");
  const searchNickname = async () => {
    console.log(await User.searchNickname(nickname));
  };

  return (
    <form className="SearchFrom">
      <input
        className="search"
        placeholder="닉네임을 입력하세요."
        onChange={({ target: { value } }) => setNickname(value)}
        value={nickname}
      />
      <Link to="/about">
        {/* <img className="search-img" src={search} onClick={searchNickname} /> */}
      </Link>
    </form>
  );
};

export default SearchForm;