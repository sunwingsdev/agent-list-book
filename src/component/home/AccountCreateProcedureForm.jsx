import { useForm, Controller } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../pages/dashboard/editHome/EditHome.css";
import { useEditContentMutation } from "../../redux/features/allApis/homeContentsApi.js/homeContentsApi";
import ErrorToast from "../shared/ErrorToast";
import SuccessToast from "../shared/SuccessToast";

const AccountCreateProcedureForm = ({ data, handleClose }) => {
  const { _id, title, details, detailsList } = data;
  const [editContent] = useEditContentMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title || "",
      details: details || "",
      detailsList: detailsList || [],
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await editContent({ _id, data });
      if (result.data.modifiedCount) {
        handleClose();
        SuccessToast("Edited successfully");
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className="editHomeArea_1">
      <h2 className="mt-2 mb-4">Account Create Procedure Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            type="text"
            placeholder="Leave a comment here"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Details"
          className="mb-2"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            {...register("details", { required: "Details are required" })}
          />
          {errors.details && (
            <p className="error-message">{errors.details.message}</p>
          )}
        </FloatingLabel>

        <div className="mb-3">
          <label>Details List</label>
          {detailsList.map((item, index) => (
            <div key={index}>
              <Controller
                name={`detailsList[${index}]`}
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type="text"
                    placeholder={`Detail ${index + 1}`}
                    {...field}
                  />
                )}
              />
            </div>
          ))}
        </div>

        <Button type="submit" variant="primary">
          Submit Edit
        </Button>
      </form>
    </div>
  );
};

export default AccountCreateProcedureForm;
