import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../pages/dashboard/editHome/EditHome.css";

const TransactionProcedureForm = () => {
  return (
    <div className="editHomeArea_1">
      <h2 className="mt-2 mb-4">Transaction Procedure Form</h2>
      <form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control type="text" placeholder="Leave a comment here" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="mb-2"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TransactionProcedureForm;
