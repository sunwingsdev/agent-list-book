import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../pages/dashboard/editHome/EditHome.css";

const AccountCreateForm = ({ data }) => {
  const { title, details } = data;
  return (
    <div className="editHomeArea_1">
      <h2 className="mt-2 mb-4">Account Create Form</h2>
      <form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            defaultValue={title}
            type="text"
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Details"
          className="mb-2"
        >
          <Form.Control
            as="textarea"
            defaultValue={details}
            placeholder="Leave  details here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Submit Edit
        </Button>
      </form>
    </div>
  );
};

export default AccountCreateForm;
