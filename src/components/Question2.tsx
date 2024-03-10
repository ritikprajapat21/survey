const Question2 = ({
  setResponse,
}: {
  setResponse: (name: string) => void;
}) => {
  return (
    <section id="question2" className="survey-page">
      <h1>Customer Survey</h1>
      <p className="number">2/5</p>
      <div className="question">
        <p>How fair are the prices compared to the similar retailer?</p>
        <div>
          <label>
            <input
              type="radio"
              name="2"
              value="1"
              onChange={() => setResponse("2")}
            />{" "}
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="2"
              value="2"
              onChange={() => setResponse("2")}
            />{" "}
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="2"
              value="3"
              onChange={() => setResponse("2")}
            />{" "}
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="2"
              value="4"
              onChange={() => setResponse("2")}
            />{" "}
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="2"
              value="5"
              onChange={() => setResponse("2")}
            />{" "}
            <span>5</span>
          </label>
        </div>
      </div>
      <div>
        <a href="#question1">
          <button className="prev">Prev</button>{" "}
        </a>
        <a href="#question3">
          <button className="next">Next</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Question2;
