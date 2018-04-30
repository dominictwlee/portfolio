import React from 'react';

import styles from './Projects.css';

const Projects = () => (
  <main className={styles.container}>
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.card}>
      <img
        src="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
        alt=""
      />
      <h1>Hello World</h1>
      <p>Stuff stuff stuff stuff</p>
    </div>
    <div className={styles.card}>
      <img
        src="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
        alt=""
      />
      <h1>Hello World</h1>
      <p>Stuff stuff stuff stuff</p>
    </div>
    <div className={styles.card}>
      <img
        src="https://i1.wp.com/www.styleshout.com/wp-content/uploads/2017/05/dazzle.jpg?fit=1050%2C730&ssl=1"
        alt=""
      />
      <h1>Hello World</h1>
      <p>Stuff stuff stuff stuff</p>
    </div>
  </main>
);

export default Projects;
