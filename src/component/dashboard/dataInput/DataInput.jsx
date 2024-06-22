import { useForm } from "react-hook-form";
import "./DataInput.css";
import { useAddDataMutation } from "../../../redux/features/allApis/dataApi/dataApi";
import SuccessToast from "../../shared/SuccessToast";
import ErrorToast from "../../shared/ErrorToast";

const DataInput = () => {
  const [addData] = useAddDataMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await addData(data);
      if (result.data.insertedId) {
        SuccessToast("Data added");
        reset(); // Reset the form after successful submission
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className="dataInputText">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <select
          className="form__input mb-4"
          aria-label="Default select example"
          {...register("role")}
        >
          <option value="admin">Admin</option>
          <option value="sub-admin">Sub Admin</option>
          <option value="super-agent-list">Super Agent List</option>
          <option value="master">Master</option>
          <option value="service">Service</option>
        </select>

        <input
          type="text"
          placeholder="TYPE"
          className="form__input"
          id="name"
          {...register("type", { required: true })}
        />
        <label htmlFor="name" className="form__label">
          Type
        </label>
        {errors.type && <span className="error">This field is required</span>}

        <input
          type="text"
          placeholder="Number"
          className="form__input"
          id="number"
          {...register("number", {
            required: "This field is required",
            pattern: {
              value: /^\+\d+$/,
              message: "Please enter a valid number with country code",
            },
          })}
        />
        <label htmlFor="number" className="form__label">
          Number
        </label>
        {errors.number && (
          <span className="error">{errors.number.message}</span>
        )}

        <textarea
          placeholder="Complain"
          className="form__input"
          id="complain"
          {...register("complain", { required: true })}
        />
        <label htmlFor="complain" className="form__label">
          Complain
        </label>
        {errors.complain && (
          <span className="error">This field is required</span>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataInput;
