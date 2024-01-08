import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <h1>Oh no, This route doesn&#039;t exist!</h1>
      <Link to="/">Go back to The Homepage</Link>
    </main>
  );
};

export default ErrorPage;
