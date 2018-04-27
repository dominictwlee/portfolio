import React from 'react';

import styles from './HomeMain.css';

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
    <h2 className={styles.subHeader}>Web Developer. Learning, building, and creating things.</h2>
    <section className={styles.textItem1}>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
      </p>
    </section>
    <section className={styles.textItem2}>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
      </p>
    </section>
    <section className={styles.textItem3}>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
      </p>
    </section>
  </main>
);

export default HomeMain;
