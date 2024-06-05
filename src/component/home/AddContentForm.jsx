import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import ErrorToast from "../shared/ErrorToast";
import SuccessToast from "../shared/SuccessToast";
import { useAddContentMutation } from "../../redux/features/allApis/homeContentsApi.js/homeContentsApi";

const AddContentForm = () => {
  const [addContent] = useAddContentMutation();
  const [option, setOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await addContent(data);
      if (result.data.insertedId) {
        SuccessToast("Content added");
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className="editHomeArea_1">
      <h2 className="mt-2 mb-4">Social Links Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select
          {...register("option", { required: true })}
          onChange={(e) => setOption(e.target.value)}
          aria-label="Default select example"
        >
          <option value="" selected disabled>
            Open this select menu
          </option>
          <option value="account-create">কিভাবে একাউন্ট খুলবেন?</option>
          <option value="account-create-procedure">
            একাউন্ট খোলার প্রসিডিউর
          </option>
          <option value="agent-list">এজেন্ট লিস্টঃ</option>
          <option value="complaint-agent">এজেন্ট এর বিরুদ্ধে অভিযোগ</option>
          <option value="transaction-procedure">ট্রান্সাকশন প্রসিডিউর</option>
          <option value="social-links">সোসিয়াল লিংক</option>
        </Form.Select>
        {errors.option && <p className="text-danger">This field is required</p>}

        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            type="text"
            placeholder="Leave a comment here"
            {...register("title", { required: true })}
          />
        </FloatingLabel>
        {errors.title && <p className="text-danger">This field is required</p>}

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comments"
          className="mb-2"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            {...register("details", { required: true })}
          />
        </FloatingLabel>
        {errors.comments && (
          <p className="text-danger">This field is required</p>
        )}

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddContentForm;
