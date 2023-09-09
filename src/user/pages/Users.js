import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "sanjeev",
      image:
        "https://i.pinimg.com/1200x/26/1e/9e/261e9e461b7e09537fed22e4d04cc19c.jpg",
      places: "5",
    },
  ];

  return <UsersList items={USERS}/>;
};

export default Users;
