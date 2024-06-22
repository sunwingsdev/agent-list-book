import "../../../component/dashboard/dataInput/DataInput.css";

const Headline = () => {
  return (
    <div className="">
      <div className="dataInputText">
        <form className="form" action="">
          <input
            type="text"
            placeholder="Headline"
            className="form__input"
            id="text"
          />
          <label htmlFor="headline" className="form__label">
            Headline
          </label>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Headline;
