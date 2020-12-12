import React from "react";

const List = (props) => {
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
        <td>{props.hometown}</td>
        <td>{props.skills}</td>
        <td>{props.id}</td>
      </tr>
  );
};

export default List;
