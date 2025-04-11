import styles from "../../styles/atoms/cardText.module.scss";
import { TextChildren } from "../../types";

export const CardText = ({ children }: TextChildren) => {
  return <p className={styles.cardText}>{children}</p>;
};
