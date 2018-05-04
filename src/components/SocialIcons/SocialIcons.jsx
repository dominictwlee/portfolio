import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './SocialIcons.css';

const icons = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/dominictwlee/'
  },

  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/dominic-lee-705646162/'
  },
  {
    id: 'github',
    url: 'https://github.com/dominictwlee'
  }
];

const SocialIcons = () => (
  <ul className={styles.iconBar}>
    {icons.map(({ id, url }) => (
      <li className={styles.icon} key={id}>
        <a href={url}>
          <FontAwesomeIcon icon={['fab', id]} size="2x" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
