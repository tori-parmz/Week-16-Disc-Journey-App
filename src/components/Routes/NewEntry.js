import { Card } from "react-bootstrap";
import EntryForm from "../EntryForm";

//renders the New Entry form
const NewEntry = () => {
  return (
    <div id="new-entry-form">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Card style={{ width: "auto" }}>
              <Card.Body>
                <EntryForm />
              </Card.Body>
            </Card>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
