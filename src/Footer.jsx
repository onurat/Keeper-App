import React from "react";

const currenDate = new Date();
const CURRENTYEAR = currenDate.getFullYear();

function Footer() {
  return <p>Copyright {CURRENTYEAR}</p>;
}

export default Footer;
