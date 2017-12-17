import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div>
    <h1>
      404 Error - <Link to="/">Go Home</Link>
    </h1>
  </div>
);

export default ErrorPage;
