import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo"
  // };
  const { login, avatar_url, html_url } = props.user; // another way
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt=""
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="btn btn-dark btn-sm my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
