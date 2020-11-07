import React, { memo, ReactNode } from "react";

import styles from "./container.module.css";

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default memo(Container);
