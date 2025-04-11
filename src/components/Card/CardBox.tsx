import { ReactNode } from "react";
import styles from "@styles/molecules/cardBox.module.scss";

interface Props {
  children: ReactNode;
}

export const CardBox = ({ children }: Props) => {
  return <div className={styles.cardBox}>{children}</div>;
};
