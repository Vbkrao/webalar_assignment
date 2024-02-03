import React from "react";

import { Img, Text } from "components";

const DesktopSevenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-end mx-auto w-full">
        <div className="h-[2068px] md:h-auto md:px-5 px-[85px] py-[34px] relative w-[1440px] md:w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <div className="h-[2034px] relative w-full">
              <Img
                className="absolute h-[2034px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_ellipse712.png"
                alt="ellipse712"
              />
              <div className="absolute h-[1366px] inset-x-[0] mx-auto top-[0] w-[98%] md:w-full">
                <Img
                  className="h-[1366px] m-auto object-cover w-full"
                  src="images/img_ellipse711.png"
                  alt="ellipse711"
                />
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[212px] top-[0] w-full">
                  <Img
                    className="h-[1024px] md:h-auto object-cover rounded-bl-[792px] rounded-br-[792px] w-full"
                    src="images/img_image123.png"
                    alt="image123"
                  />
                </div>
              </div>
              <Text
                className="absolute left-[0] md:text-5xl text-[64px] text-black-900 top-[0]"
                size="txtQuestrialRegular64"
              >
                Bipolar Disorder
              </Text>
            </div>
          </div>
          <Text
            className="absolute bottom-[2%] left-[4%] max-w-[723px] md:max-w-full md:text-5xl text-7xl text-black-900"
            size="txtQuestrialRegular72"
          >
            Causes of Various Anxieties that Hinder You from Living Your Best
            Life
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
