import "./DataInput.css";

const DataInput = () => {
  return (
    <div className="dataInputText">
      <form action="" className="form">
        <select
          className="form__input mb-4"
          aria-label="Default select example"
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
        />
        <label htmlFor="name" className="form__label">
          Type
        </label>

        <input
          type="link"
          placeholder="Link"
          className="form__input"
          id="email"
        />
        <label htmlFor="email" className="form__label">
          Phone App Link
        </label>

        <input
          type="text"
          placeholder="Subject"
          className="form__input"
          id="subject"
        />
        <label htmlFor="subject" className="form__label">
          Number
        </label>

        <textarea placeholder="Subject" className="form__input" id="subject" />
        <label htmlFor="subject" className="form__label">
          Complain
        </label>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default DataInput;
