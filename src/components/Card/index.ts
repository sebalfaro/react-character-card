import { Card as Root } from "./Card";
import { CardMedia } from "./CardMedia";
import { CardTop } from "./CardTop";
import { CardBody } from "./CardBody";
import { FavChip } from "./FavChip";
import { CardTitle } from "./CardTitle";
import { CardText } from "./CardText";
import { CardColumn } from "./CardColumn";
import { CardHeading } from "./CardHeading";
import { CardChip } from "./CardChip";
import { CardBox } from "./CardBox";
import { CardBold } from "./CardBold";

type CompoundCard = typeof Root & {
  Top: typeof CardTop;
  Media: typeof CardMedia;
  Body: typeof CardBody;
  Heading: typeof CardHeading;
  Column: typeof CardColumn;
  Box: typeof CardBox;
  Chip: typeof CardChip;
  FavChip: typeof FavChip;
  Title: typeof CardTitle;
  Text: typeof CardText;
  Bold: typeof CardBold;
};

const Card = Object.assign(Root, {
  Top: CardTop,
  Media: CardMedia,
  Body: CardBody,
  Heading: CardHeading,
  Column: CardColumn,
  Box: CardBox,
  Chip: CardChip,
  FavChip: FavChip,
  Title: CardTitle,
  Text: CardText,
  Bold: CardBold,
}) as CompoundCard;

export { Card };
