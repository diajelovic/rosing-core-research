import * as React from "react";

import * as styles from "./styles.module.css";

export class Image extends React.PureComponent {
  render() {
    return (
      <div>
        CUSTOM CSS IMAGE
        <div className={styles.image} />
      </div>
    );
  }
}
