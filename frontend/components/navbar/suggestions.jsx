import React from 'react';

const Suggestions = (props) => {
  const options = props.results.map(res => (
    <li key={res.id}>
      @{res.username}
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
