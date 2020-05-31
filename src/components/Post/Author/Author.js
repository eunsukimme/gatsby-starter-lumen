// @flow strict
import React from "react";
import { getContactHref } from "../../../utils";
import styles from "./Author.module.scss";
import { useSiteMetadata } from "../../../hooks";
import profileImage from "../../../../static/photo.jpg";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["author"]}>
      <img
        src={profileImage}
        alt={author.name}
        style={{ width: 75, height: 75, borderRadius: "100%" }}
      />
      <p className={styles["author__bio"]}>
        {author.bio}
        <a
          className={styles["author__bio-twitter"]}
          href={getContactHref("github", author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Github
        </a>
      </p>
    </div>
  );
};

export default Author;
