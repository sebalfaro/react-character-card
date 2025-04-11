import styles from "../../styles/atoms/cardTitle.module.scss";
import { TextChildren } from "../../types";

export const CardTitle = ({ children }: TextChildren) => {
  return <h3 className={styles.cardTitle}>{children}</h3>;
};
