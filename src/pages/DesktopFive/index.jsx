import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const DesktopFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-200 border-solid flex gap-2.5 items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
        <div className="h-[1079px] md:h-[1257px] sm:h-[2519px] mt-[25px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start w-full">
              <div className="flex flex-col h-[613px] md:h-auto items-start justify-start max-w-[1680px] w-full">
                <Text
                  className="max-w-[1680px] md:max-w-full md:text-5xl text-7xl text-black-900"
                  size="txtQuestrialRegular72"
                >
                  Discover the Power of Psychology with Our Case Studies Section
                </Text>
              </div>
              <div className="bg-deep_purple-50 flex flex-col items-center justify-end p-[47px] md:px-10 sm:px-5 w-full">
                <div className="bg-deep_purple-A100 flex flex-col h-[78px] md:h-auto items-start justify-start mt-[156px] sm:px-5 px-8 py-6 rounded-[39px] w-[161px]">
                  <Img
                    className="h-6 w-[88px]"
                    src="images/img_user_black_900.svg"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[616px] inset-[0] justify-start m-auto w-auto"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[519px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[415px] md:w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[519px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[415px] md:w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[519px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[415px] md:w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[519px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[415px] md:w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
          </List>
        </div>
        <Footer className="flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DesktopFivePage;
