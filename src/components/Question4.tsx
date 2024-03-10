const Question4 = ({
  setResponse,
}: {
  setResponse: (name: string) => void;
}) => {
  return (
    <section id="question4" className="survey-page">
      <h1>Customer Survey</h1>
      <p className="number">4/5</p>
      <div className="question">
        <p>
          On a scale of 1-10 how would you recommend us to your friends and
          family?
        </p>
        <div>
          <label>
            <input
              type="radio"
              name="4"
              value="1"
              onChange={() => setResponse("4")}
            />{" "}
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="2"
              onChange={() => setResponse("4")}
            />{" "}
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="3"
              onChange={() => setResponse("4")}
            />{" "}
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="4"
              onChange={() => setResponse("4")}
            />{" "}
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="5"
              onChange={() => setResponse("4")}
            />{" "}
            <span>5</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="6"
              onChange={() => setResponse("4")}
            />{" "}
            <span>6</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="7"
              onChange={() => setResponse("4")}
            />{" "}
            <span>7</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="8"
              onChange={() => setResponse("4")}
            />{" "}
            <span>8</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="9"
              onChange={() => setResponse("4")}
            />{" "}
            <span>9</span>
          </label>
          <label>
            <input
              type="radio"
              name="4"
              value="10"
              onChange={() => setResponse("4")}
            />{" "}
            <span>10</span>
          </label>
        </div>
      </div>
      <div>
        <a href="#question3">
          <button className="prev">Prev</button>{" "}
        </a>
        <a href="#question5">
          <button className="next">Next</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Question4;
