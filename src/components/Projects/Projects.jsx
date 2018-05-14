import React from 'react';
import PropTypes from 'prop-types';

import styles from './Projects.css';
import asianFood from '../../assets/asian-food.png';
import js30 from '../../assets/javascript-30.png';
import yelpCamp from '../../assets/yelp-camp.png';
import weatherApp from '../../assets/weather-app.png';

const projectData = [
  {
    id: 'asianfood',
    name: 'Asian Munchies Worldwide',
    image: asianFood,
    github: 'https://github.com/dominictwlee/food-directory-app',
    host: 'https://protected-ocean-26918.herokuapp.com'
  },
  {
    id: 'javascript30',
    name: 'Javascript30',
    image: js30,
    github: 'https://github.com/dominictwlee/javascript-30',
    host: 'https://angry-goldwasser-cf5012.netlify.com'
  },
  {
    id: 'yelpcamp',
    name: 'YelpCamp',
    image: yelpCamp,
    github: 'https://github.com/dominictwlee/yelp-camp',
    host: 'https://angry-goldwasser-cf5012.netlify.com'
  },
  {
    id: 'weather',
    name: 'Weather App',
    image: weatherApp,
    github: 'https://github.com/dominictwlee/node-weather-app',
    host: 'https://weather-app-28837.herokuapp.com'
  }
];

const Card = props => (
  <div className={styles.card}>
    <figure className={styles.imageContainer}>
      <img src={props.image} alt={props.name} />
    </figure>

    <h3 className={styles.projectName}>{props.name}</h3>

    <div className={styles.cardFooter}>
      <div className={styles.cardFooterItem}>
        <a href={props.host} target="_blank">
          See It Live
        </a>
      </div>
      <div className={styles.cardFooterItem}>
        <a href={props.github} target="_blank">
          Github Repo
        </a>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

const Projects = () => (
  <main className={styles.container}>
    <h1 className={styles.title}>Projects</h1>
    {projectData.map(({ id, name, image, github, host }) => (
      <Card key={id} image={image} name={name} github={github} host={host} />
    ))}
  </main>
);

export default Projects;
