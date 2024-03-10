import User from "../type";

const Question5 = ({ user }: { user: number }) => {
  const setResponse = () => {
    // Storing data in object
    const author: User = { user: user, response: {} };

    // Retriving the selected input
    const selectedInput = document.querySelector(
      "textarea",
    ) as HTMLTextAreaElement;
    // Storing answer of questions
    author.response["question5"] = selectedInput.value;

    // Checking for existing response
    let responses =
      (JSON.parse(localStorage.getItem("responses") as string) as User[]) ||
      ([] as User[]);

    if (responses.length > 0) {
      const index = responses.findIndex(
        (response) => response.user === author.user,
      );
      if (index < 0) {
        responses.push(author);
      } else {
        let oldAuthor = responses[index] as User;

        const updateAuthor: User = {
          ...oldAuthor,
          response: { ...oldAuthor.response, ...author.response },
        };

        responses.splice(index, 1, updateAuthor);
      }
    } else {
      responses = [author];
    }

    localStorage.setItem("responses", JSON.stringify(responses));
  };

  return (
    <section id="question5" className="survey-page">
      <h1>Customer Survey</h1>
      <p className="number">5/5</p>
      <div className="question">
        <p>What could we do to improve our service?</p>
        <label>
          <textarea name="input" rows={15} cols={45} onChange={setResponse} />
        </label>
      </div>
      <div>
        <a href="#question4">
          <button className="prev">Prev</button>{" "}
        </a>
        <a href="#end">
          <button className="next">End</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Question5;
