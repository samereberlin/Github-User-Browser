import React, { memo } from "react";

import styles from "./content.module.css";

export interface ContentProps {
  id: number;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  location: string;
  created_at: string;
}

const Content: React.FC<ContentProps> = ({ name }) => (
  <div className={styles.Content}>
      {name}
  </div>
);

export default memo(Content);
