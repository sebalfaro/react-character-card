import { ReactNode } from "react";
import styles from "../../styles/molecules/cardHeading.module.scss";

interface Props {
  children: ReactNode;
}

export const CardHeading = ({ children }: Props) => {
  return <div className={styles.cardHeading}>{children}</div>;
};
