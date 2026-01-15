import React from "react";

const Card = ({ children }) => {
  return <div className="w-96 h-auto p-2 border rounded-lg">{children}</div>;
};

function CardHeader(children) {
  return <div>{children}</div>;
}

function CardBody(children) {
  return <div>{children}</div>;
}
function CardFooter(children) {
  return <div>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
