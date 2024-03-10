const Question3 = ({
  setResponse,
}: {
  setResponse: (name: string) => void;
}) => {
  return (
    <section id="question3" className="survey-page">
      <h1>Customer Survey</h1>
      <p className="number">3/5</p>
      <div className="question">
        <p>How satisfied are you with the value for money of your purchase?</p>
        <div>
          <label>
            <input
              type="radio"
              name="3"
              value="1"
              onChange={() => setResponse("3")}
            />{" "}
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="3"
              value="2"
              onChange={() => setResponse("3")}
            />{" "}
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="3"
              value="3"
              onChange={() => setResponse("3")}
            />{" "}
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="3"
              value="4"
              onChange={() => setResponse("3")}
            />{" "}
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="3"
              value="5"
              onChange={() => setResponse("3")}
            />{" "}
            <span>5</span>
          </label>
        </div>
      </div>
      <div>
        <a href="#question2">
          <button className="prev">Prev</button>{" "}
        </a>
        <a href="#question4">
          <button className="next">Next</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Question3;
