import { useState } from "react";
import "./Custom.css";
import Question1 from "./components/Question1.tsx";
import Question2 from "./components/Question2.tsx";
import Question3 from "./components/Question3.tsx";
import Question4 from "./components/Question4.tsx";
import Question5 from "./components/Question5.tsx";
import Welcome from "./components/Welcome";
import User from "./type.ts";
import End from "./components/End.tsx";

function App() {
  const [user, setUser] = useState(2);

  // setUser will set the user data provided by the backend
  // user will use it to store the data in localstorage for now later it can be stored in database.

  const setResponse = (name: string) => {
    // Storing data in object
    const author: User = { user: user, response: {} };

    // Retriving the selected input
    const selectedInput = document.querySelector(
      `input[name='${name}']:checked`,
    ) as HTMLInputElement;
    // Storing answer of questions
    author.response[`question${name}`] = selectedInput.value;

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
          response: { ...author.response, ...oldAuthor.response },
          // response: { ...oldAuthor.response },
        };

        responses.splice(index, 1, updateAuthor);
      }
    } else {
      responses = [author];
    }

    localStorage.setItem("responses", JSON.stringify(responses));
  };

  return (
    <main>
      <Welcome />
      <Question1 setResponse={setResponse} />
      <Question2 setResponse={setResponse} />
      <Question3 setResponse={setResponse} />
      <Question4 setResponse={setResponse} />
      <Question5 user={user} />
      <End />
    </main>
  );
}

export default App;
