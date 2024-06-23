import { AiTwotoneAudio } from "react-icons/ai";
import "./Headline.css";
import Marquee from "react-fast-marquee";
import {
  useAddHeadlineMutation,
  useGetHeadlineQuery,
} from "../../../redux/features/allApis/headlineApi/headlineApi";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import Loader from "../../../component/shared/Loader";

const Headline = () => {
  const [addHeadline] = useAddHeadlineMutation();
  const { data: headline, isLoading } = useGetHeadlineQuery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();

  const onSubmit = async (data) => {
    try {
      const result = await addHeadline(data);
      if (result.data.insertedId) {
        addToast("Headline added successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        reset();
      }
    } catch (error) {
      addToast(error.message, { appearance: "error", autoDismiss: true });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      {!headline ? (
        <div className="headlineAreaInput mb-4">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                className="form-control"
                id="Title"
                {...register("title", { required: "Title is required" })}
                placeholder="Title"
              />
              {errors.title && (
                <p className="error-message">{errors.title.message}</p>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="headline">Headline</label>
              <input
                type="text"
                className="form-control"
                id="headline"
                {...register("headline", { required: "Headline is required" })}
                placeholder="Headline"
              />
              {errors.headline && (
                <p className="error-message">{errors.headline.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="headerMarquee">
        <div className="marqueeTitle">
          <AiTwotoneAudio className="marqueeSize" />
          <h2>{headline?.title}</h2>
          <span></span>
        </div>
        <Marquee className="marqueeText">{headline?.headline}</Marquee>
      </div>
      )}
    
    </div>
  );
};

export default Headline;
