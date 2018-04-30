import React from 'react';
import PropTypes from 'prop-types';

import styles from './Projects.css';

const Card = props => (
  <div className={styles.card}>
    <img src={props.image} alt={props.name} />
    <h1>{props.name}</h1>
    <p>{props.description}</p>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Projects = () => (
  <main className={styles.container}>
    <h1 className={styles.title}>Projects</h1>
    <Card />
    <Card />
    <Card />
  </main>
);

export default Projects;
