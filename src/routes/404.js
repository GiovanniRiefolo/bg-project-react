import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh no!</h1>
      <p>La pagina che stavi cercando non c'è più &#128517;.</p>
      <p>
        <i>{error.statusText || error.message}?</i> No problem. Torna alla{" "}
        <a href="/">Home</a>
      </p>
    </div>
  );
}
