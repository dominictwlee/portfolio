import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomeMain.css';

const bodyContent = [
  {
    topic: 'professional',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum',

      'facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem'
    ],
    class: styles.professional
  },

  {
    topic: 'personal',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',

      'similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
    ],
    class: styles.personal
  },

  {
    topic: 'social',
    body: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',

      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti'
    ],
    class: styles.social
  }
];

const BodyColumn = props => (
  <section className={props.styleClass}>{props.text.map(paragraph => <p>{paragraph}</p>)}</section>
);

BodyColumn.propTypes = {
  styleClass: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired
};

const HomeMain = () => (
  <main className={styles.container}>
    <figure className={styles.imgContainer}>
      <img
        className={styles.image}
        src="http://121clicks.com/wp-content/uploads/2012/04/portrait_eyes_14.jpg"
        alt="Portrait"
      />
    </figure>
    <h1 className={styles.header}>Hey, I&apos;m Dom.</h1>
    <h2 className={styles.subHeader}>Web Developer based in London. Learning, building, and creating things.</h2>
    {bodyContent.map(topic => <BodyColumn styleClass={topic.class} text={topic.body} key={topic.name} />)}
  </main>
);

export default HomeMain;
