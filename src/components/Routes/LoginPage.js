import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="container-fluid" id="login-page">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img
              src="./Assets/logo-with-tagline.png"
              id="logo-login-page"
            ></img>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm"></div>
          <div className="col-sm">
            <Card className="p-3" id="login-card">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="plaintext"
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="success">Login</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
