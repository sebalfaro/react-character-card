import { ReactNode } from "react";
import styles from "../../styles/molecules/cardBody.module.scss";
import { Size } from "../../types";

interface Props {
  children: ReactNode;
  size: Size;
}

export const CardBody = ({ children, size }: Props) => {
  const bodySize = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  return <div className={`${styles.cardBody} ${bodySize}`}>{children}</div>;
};
