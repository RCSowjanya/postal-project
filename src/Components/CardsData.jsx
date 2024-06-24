import React from "react";
import pkgtrack from "../Images/package-tracking.png";
import pkgprotect from "../Images/package-protection.png";
import international from "../Images/international-shopping.png";
import van from "../Images/delivery-van.png";
const CardsData = [
  {
    img: international,
    heading: "International package",
    description:
      "Premium international shipping service that offers fast and reliable delivery",
  },
  {
    img: pkgprotect,
    heading: "Package Protection",
    description:
      "India Post offers package protection through its insurance service.",
  },
  {
    img: pkgtrack,
    heading: "Package Tracking",
    description:
      "Track your package by consignment number, on the go or at your desk.",
  },
  {
    img: van,
    heading: "Home Delivery",
    description:
      "Home delivery for a variety of items, including mail, parcels, and speed post",
  },
];

export default CardsData;
