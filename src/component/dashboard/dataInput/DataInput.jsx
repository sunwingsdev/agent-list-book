import "./DataInput.css";

const DataInput = () => {
  return (
    <div className="dataInputText">
      <form action="" className="form">
        <input
          type="text"
          placeholder="TYPE"
          className="form__input"
          id="name"
        />
        <label htmlFor="name" className="form__label">
          Type
        </label>

        <input
          type="link"
          placeholder="Email"
          className="form__input"
          id="email"
        />
        <label htmlFor="email" className="form__label">
          Phone App Link
        </label>

        <input
          type="number"
          placeholder="Subject"
          className="form__input"
          id="subject"
        />
        <label htmlFor="subject" className="form__label">
          Number
        </label>

        <input
          type="text"
          placeholder="Subject"
          className="form__input"
          id="subject"
        />
        <label htmlFor="subject" className="form__label">
          Complain
        </label>
      </form>
    </div>
  );
};

export default DataInput;
