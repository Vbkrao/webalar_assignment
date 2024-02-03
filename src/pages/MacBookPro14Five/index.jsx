import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer11 from "components/Footer11";
import Header1 from "components/Header1";

const MacBookPro14FivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col items-center sm:px-5 px-[33px] w-full">
          <Header1 className="border-b border-gray-200 border-solid flex gap-2.5 h-[146px] md:h-auto items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
        </div>
        <div className="md:h-[763px] h-[975px] md:ml-[0] ml-[233px] mr-[348px] mt-[26px] md:px-5 relative w-[72%] md:w-full">
          <div className="absolute md:h-[737px] h-[975px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col gap-[30px] h-[250px] md:h-auto items-start justify-start left-[0] max-w-[981px] top-[0] w-full">
              <Text
                className="max-w-[981px] md:max-w-full md:text-5xl text-7xl text-black-900"
                size="txtQuestrialRegular72"
              >
                Patient Are Happy For Proper Mental Cure Support
              </Text>
              <Text
                className="leading-[180.00%] max-w-[783px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                size="txtQuestrialRegular20Black90072_1"
              >
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus
              </Text>
            </div>
            <div className="absolute bottom-[0] h-[737px] right-[0] w-[58%] md:w-full">
              <div className="bg-deep_purple-50 h-[737px] m-auto rounded-[407px] w-full"></div>
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[89%]">
                <Img
                  className="h-[730px] md:h-auto object-cover rounded-bl-[407px] rounded-br-[407px] w-full"
                  src="images/img_image124.png"
                  alt="image124"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[21%] flex flex-col gap-[15px] items-center justify-start left-[0] w-auto">
            <div className="gap-8 grid md:grid-cols-1 grid-cols-2 justify-start min-h-[auto] w-auto md:w-full">
              <div className="h-[103px] relative w-full">
                <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20Black900"
                  >
                    First Name
                  </Text>
                  <Text
                    className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20RedA700"
                  >
                    *
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-end mt-auto mx-auto p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-base text-black-900_72 tracking-[0.48px]"
                    size="txtQuestrialRegular16Black90072"
                  >
                    Arya
                  </Text>
                </div>
              </div>
              <div className="h-[103px] relative w-full">
                <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20Black900"
                  >
                    Last Name
                  </Text>
                  <Text
                    className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20RedA700"
                  >
                    *
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start mt-auto mx-auto p-[31px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-base text-black-900_72 tracking-[0.48px]"
                    size="txtQuestrialRegular16Black90072"
                  >
                    Demian
                  </Text>
                </div>
              </div>
              <div className="h-[103px] relative w-full">
                <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20Black900"
                  >
                    Email Address
                  </Text>
                  <Text
                    className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20RedA700"
                  >
                    *
                  </Text>
                </div>
                <Input
                  name="groupSeventyNine"
                  placeholder="aryademian@email"
                  className="p-0 placeholder:text-black-900_72 text-base text-left tracking-[0.48px] w-full"
                  wrapClassName="border border-black-900 border-solid mb-[undefinedpx] mt-auto mx-auto w-full z-[1]"
                ></Input>
              </div>
              <div className="h-[103px] relative w-full">
                <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20Black900"
                  >
                    Phone Number
                  </Text>
                  <Text
                    className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                    size="txtQuestrialRegular20RedA700"
                  >
                    *
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start mt-auto mx-auto p-[31px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-base text-black-900_72 tracking-[0.48px]"
                    size="txtQuestrialRegular16Black90072"
                  >
                    +12 343 498 3984
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[103px] relative w-full">
              <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                <Text
                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                  size="txtQuestrialRegular20Black900"
                >
                  Address
                </Text>
                <Text
                  className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                  size="txtQuestrialRegular20RedA700"
                >
                  *
                </Text>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-end mt-auto mx-auto p-[30px] sm:px-5 rounded-[12px] w-full">
                <Text
                  className="ml-0.5 md:ml-[0] mt-0.5 text-base text-black-900_72 tracking-[0.48px]"
                  size="txtQuestrialRegular16Black90072"
                >
                  Street Sutomo Alexander, 14. Norwegia
                </Text>
              </div>
            </div>
            <div className="h-[168px] relative w-full">
              <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
                <Text
                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                  size="txtQuestrialRegular20Black900"
                >
                  Consultation
                </Text>
                <Text
                  className="text-red-A700 text-xl tracking-[-0.40px] w-auto"
                  size="txtQuestrialRegular20RedA700"
                >
                  *
                </Text>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start mt-auto mx-auto p-8 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="mb-[63px] text-base text-black-900_72 tracking-[0.48px]"
                  size="txtQuestrialRegular16Black90072"
                >
                  Write here for your problem
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="absolute bottom-[9%] cursor-pointer leading-[normal] left-[0] min-w-[215px] text-center text-lg"
            shape="round"
            color="deep_purple_A100"
            size="md"
            variant="fill"
          >
            Send Consultation
          </Button>
        </div>
        <div className="flex flex-col items-end mt-20 md:px-10 sm:px-5 px-[448px] w-full">
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

export default MacBookPro14FivePage;
