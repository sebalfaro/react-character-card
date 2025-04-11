import styles from "../../styles/molecules/cardMedia.module.scss";

interface Props {
  imgPath: string;
  alt: string;
}

export const CardMedia = ({ imgPath, alt }: Props) => {
  return (
    <div className={styles.media}>
      <img className={styles.image} src={imgPath} alt={alt} />
    </div>
  );
};
