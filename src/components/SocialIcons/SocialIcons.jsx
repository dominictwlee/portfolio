import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './SocialIcons.css';

const icons = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/dominictwlee/',
    iconClass: styles.instagram
  },

  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/dominic-lee-705646162/',
    iconClass: styles.linkedin
  },
  {
    id: 'github',
    url: 'https://github.com/dominictwlee',
    iconClass: styles.github
  }
];

const SocialIcons = () => (
  <ul className={styles.iconBar}>
    {icons.map(({ id, url, iconClass }) => (
      <li className={styles.iconContainer} key={id}>
        <a href={url}>
          <FontAwesomeIcon icon={['fab', id]} size="2x" className={iconClass} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
