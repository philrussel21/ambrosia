import React from 'react';
import { removeOriginFromPath } from '../../helpers/url_helpers';

export default function Category({ location }) {
  let category = location.pathname;
  const originPath = "/categories";
  category = removeOriginFromPath(originPath, category);


  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          {category}
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>
    </div>
  );
}
