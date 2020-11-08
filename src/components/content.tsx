import React, { memo, useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { fetchUser } from "../services";
import styles from "./content.module.css";

export type User = {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  location: string;
  created_at: string;
};

export interface ContentProps {
  userLogin: string;
}

const Content: React.FC<ContentProps> = ({ userLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    if (userLogin.length) {
      setIsLoading(true);
      fetchUser(userLogin)
        .then((data: User) => setUser(data))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    } else setUser({} as User);
  }, [userLogin]);

  if (!user.name) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={styles.progress}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img alt="avatar" className={styles.image} src={user.avatar_url} />
        <div className={styles.name}>
          {user.name}
          <br />
          {user.login}
        </div>
      </div>

      <div className={styles.description}>{user.bio}</div>
      <div className={styles.extraInfo}>
        <div className={styles.extraInfoSince}>
          User since: {new Date(user.created_at).toLocaleDateString()}
        </div>
        {user.location && <div>Location: {user.location}</div>}
      </div>

      <div className={styles.linksContainer}>
        <a href={user.html_url} className={styles.links}>
          {user.html_url}
        </a>
        <a href={user.blog} className={styles.links}>
          {user.blog}
        </a>
      </div>
    </div>
  );
};

export default memo(Content);
