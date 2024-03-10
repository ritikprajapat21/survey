import { useEffect } from "react";

const End = () => {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (elements) => {
        const changeHash = () => {
          window.location.hash = "";
        };

        window.location.hash = elements[0].isIntersecting ? "end" : "";

        elements[0].isIntersecting && setTimeout(changeHash, 5000);
      },
      {
        threshold: 0.8,
      },
    );
    observer.observe(document.getElementById("end") as HTMLElement);
  });

  return (
    <section id="end" className="end-survey-page">
      <h1>Thank you for your time for completing our survey</h1>
      <p>
        Your opinions matter to us a lot and will help us to improve in future.
      </p>
    </section>
  );
};

export default End;
