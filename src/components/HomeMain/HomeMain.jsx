import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomeMain.css';
import portrait from '../../assets/portrait.png';

const bodyContent = [
  {
    name: 'professional',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum',

      'facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem'
    ],
    class: styles.professional
  },

  {
    name: 'personal',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',

      'similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
    ],
    class: styles.personal
  },

  {
    name: 'social',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',

      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti'
    ],
    class: styles.social
  }
];

const BodyColumn = props => (
  <section className={props.styleClass}>
    {props.text.map((paragraph, index) => (
      <p key={`${props.name}${index}`}>{paragraph}</p> // eslint-disable-line react/no-array-index-key
    ))}
  </section>
);

BodyColumn.propTypes = {
  styleClass: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired
};

const HomeMain = () => (
  <main className={styles.container}>
    <div className={styles.imgContainer}>
      <img className={styles.image} src={portrait} alt="Dom Lee Portrait" />
    </div>
    <h1 className={styles.header}>Hey, I&apos;m Dom.</h1>
    <h2 className={styles.subHeader}>Web Developer based in London. Learning, building, and creating things.</h2>
    {bodyContent.map(topic => (
      <BodyColumn styleClass={topic.class} text={topic.body} key={topic.name} name={topic.name} />
    ))}
  </main>
);

export default HomeMain;
