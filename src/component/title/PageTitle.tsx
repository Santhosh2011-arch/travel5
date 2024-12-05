import React from 'react';

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="text-left mb-8">
      <h2 className="text-lg title-h2">{title}</h2>
      <h3 className="text-2xl font-bold title-h3">{subTitle}</h3>
    </div>
  );
};

export default PageTitle;