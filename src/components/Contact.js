import React from "react";

function Contact() {
  const array = [
    {
      id: 1,
      name: "test1",
      date: "2020-01-05",
    },
    {
      id: 2,
      name: "test2",
      date: "2020-01-02",
    },
  ];

  const newA = array.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
  console.log(newA);
  return <div>Contact</div>;
}

export default Contact;
