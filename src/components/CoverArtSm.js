import Figure from "react-bootstrap/Figure";
import { Col } from "react-bootstrap";

//formatting cover art and metadata for the CoverArtGrid component

export default function CovertArtSm(props) {
  let { collectionItem } = props;
  const { title, artistName, coverArt, releaseDate } = collectionItem;
  return (
    <Col>
      <Figure style={{ textAlign: "center" }}>
        <Figure.Image
          height={"150px"}
          width={"150px"}
          src={coverArt}
          style={{ borderRadius: "5px" }}
        />
        <Figure.Caption style={{ fontSize: "1 rem" }}>
          {title}
          <br />
          {artistName}
          <br />
          {releaseDate}
        </Figure.Caption>
      </Figure>
    </Col>
  );
}
