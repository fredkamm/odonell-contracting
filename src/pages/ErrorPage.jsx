import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="background">
      <div className="cover">
        <div className="text">
          <h1 className="errorNumber">404</h1>
          <p className="errorText">
            Oops! Sorry, it doesn't look like that page exists.
          </p>
          <p>
            <a href="/">Let's go back home</a>
          </p>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" alt="" />
    </div>
  );
}
