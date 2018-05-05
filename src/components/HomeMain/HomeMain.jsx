import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './HomeMain.css';
import portrait from '../../assets/portrait.png';
import SocialIcons from '../SocialIcons/SocialIcons';

const homeContent = [
  {
    id: 'professional',

    body: [
      {
        id: 'bio',
        title: 'Me in a nutshell:',
        content:
          "Ex-teacher and ex-fitness/nutrition coach. Empathetic communicator with a strong desire to help others. Self-taught, self-driven, and obsessively coding since January. Aspiring open source contributor. Whatever I lack in experience and natural talent, I'll make up for in grit, curiosity, and humbleness."
      },

      {
        id: 'currentTools',
        title: 'Currently using:',
        content:
          'Javascript(ES6), HTML, CSS, React, Node, Express, Mongoose(MongoDB), Handlebars, Webpack, PostCSS, CSS Modules, Mocha, Bulma, Atom, Git, Prettier, npm, Yarn, Heroku, Firebase, Dropbox, Gitter, BEM'
      },

      {
        id: 'usedTools',
        title: 'Have used:',
        content: 'Bootstrap, jQuery, Lodash, Semantic UI, Materialize, EJS, Sublime Text'
      }
    ],
    class: styles.professional
  },

  {
    id: 'personal',
    body: [
      {
        id: 'exercise',
        title: 'Physical Activities:',
        content:
          "I enjoy Muay Thai, strength training and hiking, though I've mostly been in front of the computer these days and need to get back into a more balanced lifestyle."
      },
      {
        id: 'music',
        title: "What I'm listening To:",
        content: 'Mostly metal, a bit of hip hop, and a touch of glitchy, dreamy weird stuff.',
        link: 'https://open.spotify.com/user/1294635599/playlist/3shMSYLIVvr1tn6vXuVzZC?si=N038gBFYRAOcro2V6oCXeQ'
      },
      {
        id: 'gaming',
        title: "Games I'm playing:",
        content: 'The Witcher 3, Overwatch, Monster Hunter World, Pillars Of Eternity, Divinity: Original Sin 2'
      }
    ],
    class: styles.personal
  },

  {
    id: 'social',
    body: [
      {
        id: 'socialMedia',
        title: 'You can find me at:'
      },
      {
        id: 'status',
        title: "What I'm up to:",
        content: 'Looking for work, internships, and mentors.'
      }
    ],
    class: styles.social
  }
];

const BodyColumn = ({ styleClass, body }) => (
  <section className={styleClass}>
    {body.map(({ id, title, content, link }) => (
      <div key={`${id}Fragment`} className={styles.sectionSpacing}>
        <h4 className={styles.bodyTitle} key={`${id}Header`}>
          {title}
        </h4>
        {content ? <p key={id}>{content}</p> : null}
        {link ? (
          <a key={`${id}Link`} href={link}>
            <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" className={styles.spotifyIcon} />
          </a>
        ) : null}
        {id === 'socialMedia' ? <SocialIcons /> : null}
      </div>
    ))}
  </section>
);

BodyColumn.propTypes = {
  styleClass: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired
};

const HomeMain = () => (
  <main className={styles.container}>
    <div className={styles.imgContainer}>
      <img className={styles.image} src={portrait} alt="Dom Lee Portrait" />
    </div>
    <h1 className={styles.header}>Hey, I&apos;m Dom.</h1>
    <h2 className={styles.subHeader}>Web Developer based in London. Learning, building, and creating things.</h2>
    {homeContent.map(topic => <BodyColumn styleClass={topic.class} body={topic.body} key={topic.id} />)}
  </main>
);

export default HomeMain;
