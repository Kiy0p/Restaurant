import { useCallback, useEffect, useState } from "react";

export enum Size {
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
}

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  console.log(width);

  if (width < 640) {
    return Size.XSmall;
  } else if (width < 900) {
    return Size.Small;
  } else if (width < 1524) {
    return Size.Medium;
  } else if (width < 1920) {
    return Size.Large;
  } else {
    return Size.XLarge;
  }
};

export const useWindow = (): Size => {
  const [windowDimensions, setWindowDimensions] = useState<Size>(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowDimensions;
};
