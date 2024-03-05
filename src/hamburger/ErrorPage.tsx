import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (<div>
      <h1>Error Page {error.status} {error.statusText}</h1>
      <p>{error.data}</p>
      <Link to="/" >Volver a Home</Link>
    </div>);
  } else return (
    <div>
      ErrorPage
    </div>
  );


};
