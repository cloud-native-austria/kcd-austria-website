import PropTypes from 'prop-types';
import React from 'react';

const Person = ({ name, picture, tagLine }) => (
  <div className="w-[200px] text-center">
    <span className="drop-shadow">
      <img src={picture} alt={name} className="heptagon bg-white w-full h-[200px] mb-4 object-cover" />
    </span>
      <strong>{name}</strong>
    <p className="text-sm">{tagLine}</p>
  </div>
);

Person.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.any,
  tagLine: PropTypes.string,
};

Person.defaultProps = {
  name: null,
  picture: null,
  tagLine: null,
};

export default Person;
