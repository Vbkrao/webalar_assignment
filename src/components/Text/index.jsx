import React from "react";

const sizeClasses = {
  txtQuestrialRegular24: "font-normal font-questrial",
  txtQuestrialRegular20RedA700: "font-normal font-questrial",
  txtQuestrialRegular42: "font-normal font-questrial",
  txtQuestrialRegular20: "font-normal font-questrial",
  txtQuestrialRegular64: "font-normal font-questrial",
  txtQuestrialRegular16Black900: "font-normal font-questrial",
  txtQuestrialRegular36Black90072: "font-normal font-questrial",
  txtQuestrialRegular20Black9001e: "font-normal font-questrial",
  txtQuestrialRegular24WhiteA700: "font-normal font-questrial",
  txtQuestrialRegular20Black90072: "font-normal font-questrial",
  txtQuestrialRegular36DeeppurpleA200: "font-normal font-questrial",
  txtQuestrialRegular16Bluegray40001: "font-normal font-questrial",
  txtQuestrialRegular36DeeppurpleA100: "font-normal font-questrial",
  txtQuestrialRegular36: "font-normal font-questrial",
  txtQuestrialRegular42WhiteA700: "font-normal font-questrial",
  txtQuestrialRegular16WhiteA700: "font-normal font-questrial",
  txtQuestrialRegular20Black90033: "font-normal font-questrial",
  txtQuestrialRegular18: "font-normal font-questrial",
  txtQuestrialRegular16: "font-normal font-questrial",
  txtQuestrialRegular20Black900: "font-normal font-questrial",
  txtQuestrialRegular20Black90072_1: "font-normal font-questrial",
  txtQuestrialRegular72: "font-normal font-questrial",
  txtQuestrialRegular20WhiteA7007f: "font-normal font-questrial",
  txtQuestrialRegular16Black90072: "font-normal font-questrial",
  txtQuestrialRegular20Bluegray400: "font-normal font-questrial",
  txtQuestrialRegular20DeeppurpleA100: "font-normal font-questrial",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
