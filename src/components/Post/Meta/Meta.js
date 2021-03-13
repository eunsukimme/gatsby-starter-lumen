// @flow strict
import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";

type Props = {
  date: string,
  updated: string,
};

const Meta = ({ date, updated }: Props) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      {`Published ${moment(date).format("D MMM YYYY")}`}
      {updated ? `| ${moment(updated).format("D MMM YYYY")}` : null}
    </p>
  </div>
);

export default Meta;
