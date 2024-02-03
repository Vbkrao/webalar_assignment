import React from "react";

import { Button, Img, Text } from "components";
import Footer11 from "components/Footer11";
import Header1 from "components/Header1";

const MacBookPro14SevenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col items-center sm:px-5 px-[33px] w-full">
          <Header1 className="border-b border-gray-200 border-solid flex gap-2.5 h-[146px] md:h-auto items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[258px] mr-[828px] mt-[21px] md:text-5xl text-7xl text-black-900 w-[47%] sm:w-full"
          size="txtQuestrialRegular72"
        >
          Discover the Power of Psychology with Our Case Studies Section
        </Text>
        <div className="sm:h-[530px] h-[563px] md:h-[717px] md:ml-[0] ml-[266px] mr-[375px] mt-[139px] md:px-5 relative w-[69%] md:w-full">
          <div className="absolute bg-deep_purple-50 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-end mx-auto sm:pl-5 pl-[29px] py-[29px] w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start mb-[109px] md:mt-0 mt-[157px] pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                size="txtQuestrialRegular24"
              >
                Schizophrenia
              </Text>
              <Text
                className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                size="txtQuestrialRegular16Black90072"
              >
                3 Case studies
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start mb-[109px] md:mt-0 mt-[157px] pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                size="txtQuestrialRegular24"
              >
                Depressions
              </Text>
              <Text
                className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                size="txtQuestrialRegular16Black90072"
              >
                4 Case studies
              </Text>
            </div>
            <div className="flex mb-[106px] md:ml-[0] ml-[33px] md:mt-0 mt-40 relative w-[52%] md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-end my-auto pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24"
                >
                  Personal Meeting
                </Text>
                <Text
                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                  size="txtQuestrialRegular16Black90072"
                >
                  5 Case studies
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-end ml-[-13.53px] my-auto pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto z-[1]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24"
                >
                  Anxiety Disorder
                </Text>
                <Text
                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                  size="txtQuestrialRegular16Black90072"
                >
                  6 Case studies
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[343px] left-[2%] object-cover rounded-[12px] top-[0] w-[18%]"
            src="images/img_image.png"
            alt="image"
          />
          <Img
            className="absolute h-[343px] object-cover right-[8%] rounded-[12px] top-[0] w-[18%]"
            src="images/img_image.png"
            alt="image_One"
          />
          <Img
            className="absolute h-[343px] object-cover right-[33%] rounded-[12px] top-[0] w-[18%]"
            src="images/img_image.png"
            alt="image_Two"
          />
          <Img
            className="absolute h-[343px] left-[26%] object-cover rounded-[12px] top-[0] w-[18%]"
            src="images/img_image.png"
            alt="image_Three"
          />
        </div>
        <div className="flex flex-col items-end mt-[135px] md:px-10 sm:px-5 px-[448px] w-full">
          <div className="bg-deep_purple-A100 flex flex-col items-start justify-start md:px-5 px-8 py-6 rounded-[36px] w-auto">
            <Img
              className="h-6 w-[88px]"
              src="images/img_user_black_900.svg"
              alt="user"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[25px] w-full">
          <Footer11 className="bg-black-900 flex gap-[100px] h-[402px] md:h-auto items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[163px] w-full" />
        </div>
      </div>
    </>
  );
};

export default MacBookPro14SevenPage;
