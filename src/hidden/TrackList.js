import ListGroup from 'react-bootstrap/ListGroup';

export default function TrackList() {
  return (
    <ListGroup as="ol" numbered id='track-list'>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
  );
}