import { AiTwotoneAudio } from "react-icons/ai";
import "./Headline.css";
import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <div className="">
      <div className="headlineAreaInput mb-4">
        <form className="form" action="">
          <div className="form-group mb-2">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              className="form-control"
              id="Title"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              id="headline"
              aria-describedby="emailHelp"
              placeholder="Headline"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="headerMarquee">
        <div className="marqueeTitle">
          <AiTwotoneAudio className="marqueeSize" />
          <h2>NEWS</h2>
          <span></span>
        </div>
        <Marquee className="marqueeText">
          Welcome to our 11wickets official agentlist..Thanks For Stay With
          Tamim Khan Family...
        </Marquee>
      </div>
    </div>
  );
};

export default Headline;
