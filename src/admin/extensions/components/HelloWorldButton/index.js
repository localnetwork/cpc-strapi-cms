import { Button } from "@strapi/design-system/Button";
import { Eye } from "@strapi/icons";
import React from "react";
const HelloWorldButton = ({ slug }) => {
  const handleClick = () => {
    if (!slug) {
      alert("No preview available for this entry.");
    } else {
      const previewUrl = `https://cordova-public-college.verce.app/preview?route=/${slug}`;
      // const previewUrl = `http://localhost:3000/preview?route=/${slug}`;
      window.open(previewUrl, "_blank");
    }
  };

  return (
    <Button onClick={handleClick} startIcon={<Eye />} fullWidth>
      Preview
    </Button>
  );
};

export default HelloWorldButton;
