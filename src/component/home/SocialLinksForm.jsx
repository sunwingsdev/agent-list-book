import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../pages/dashboard/editHome/EditHome.css";
import { useEditContentMutation } from "../../redux/features/allApis/homeContentsApi.js/homeContentsApi";
import SuccessToast from "../shared/SuccessToast";
import ErrorToast from "../shared/ErrorToast";

const SocialLinksForm = ({ data }) => {
  const { title, details, _id } = data;
  const [editContent] = useEditContentMutation();

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      details: details,
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const result = await editContent({
        _id: _id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        SuccessToast("Edited successfully");
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className="editHomeArea_1">
      <h2 className="mt-2 mb-4">Social Links Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Enter title"
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title?.message}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Details"
          className="mb-2"
        >
          <Form.Control
            as="textarea"
            {...register("details", { required: "Details are required" })}
            placeholder="Enter details"
            style={{ height: "100px" }}
            isInvalid={!!errors.details}
          />
          <Form.Control.Feedback type="invalid">
            {errors.details?.message}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            {...register("link", { required: "Link is required" })}
            type="text"
            placeholder="Enter Link"
            isInvalid={!!errors.link}
          />
          <Form.Control.Feedback type="invalid">
            {errors.link?.message}
          </Form.Control.Feedback>
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Submit Edit
        </Button>
      </form>
    </div>
  );
};

export default SocialLinksForm;
