import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map(res => (
    <li key={res.id}>
      <Link className="dropdown-item" to={`/profile/${res.id}`}>@{res.username}</Link>
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
