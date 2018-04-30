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
    <Card
      image="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
      name="My Project"
      description="This is a project"
    />
    <Card
      image="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
      name="My Project2"
      description="This is another project"
    />
    <Card
      image="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
      name="My Project3"
      description="This is the third project"
    />
  </main>
);

export default Projects;
