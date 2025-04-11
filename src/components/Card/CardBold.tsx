import { TextChildren } from "../../types";
import styles from "../../styles/atoms/cardBold.module.scss";

export const CardBold = ({ children }: TextChildren) => {
  return <b className={styles.cardBold}>{children}</b>;
};
