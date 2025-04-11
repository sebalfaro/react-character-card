import { ReactNode } from "react";
import styles from "../../styles/molecules/cardColumn.module.scss";

interface Props {
  children: ReactNode;
}

export const CardColumn = ({ children }: Props) => {
  return <div className={styles.cardColumn}>{children}</div>;
};
