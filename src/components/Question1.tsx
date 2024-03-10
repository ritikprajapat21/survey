const Question1 = ({
  setResponse,
}: {
  setResponse: (name: string) => void;
}) => {
  return (
    <section id="question1" className="survey-page">
      <h1>Customer Survey</h1>
      <p className="number">1/5</p>
      <div className="question">
        <p>How satisfied are you with our products?</p>
        <div>
          <label>
            <input
              type="radio"
              name="1"
              value="1"
              onChange={() => () => setResponse("1")}
            />{" "}
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="1"
              value="2"
              onChange={() => setResponse("1")}
            />{" "}
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="1"
              value="3"
              onChange={() => setResponse("1")}
            />{" "}
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="1"
              value="4"
              onChange={() => setResponse("1")}
            />{" "}
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="1"
              value="5"
              onChange={() => setResponse("1")}
            />{" "}
            <span>5</span>
          </label>
        </div>
      </div>
      <div>
        <a href="#welcome">
          <button className="prev">Prev</button>{" "}
        </a>
        <a href="#question2">
          <button className="next">Next</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Question1;
