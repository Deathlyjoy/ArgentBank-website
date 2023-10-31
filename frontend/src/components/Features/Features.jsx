import React from "react";

const Features = ({ img, title, desc }) => {
  return (
    <article className="features__card">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <h2 className="features-title">{title}</h2>
      <p className="features-subtitle">{desc}</p>
    </article>
  );
};

export default Features;
