import React from "react";
import "./UsersList.css";
import UsersItems from "./UsersItems";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found!</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UsersItems
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
