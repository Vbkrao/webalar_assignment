import React from "react";

import { Button, Img, List, Text } from "components";
import DesktopThreeColumnellipse712 from "components/DesktopThreeColumnellipse712";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-questrial h-[2195px] justify-end mx-auto relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col gap-[27px] justify-start w-full">
            <Header className="border-b border-gray-200 border-solid flex gap-2.5 items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
            <div className="flex flex-col gap-2.5 items-start justify-start ml-7 md:ml-[0] md:px-5 w-[90%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="black_900_00_deep_purple_A100_02_border22 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_maskgroup.png"
                    alt="maskgroup"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.36px] w-auto"
                      size="txtQuestrialRegular36"
                    >
                      Quality Theraphy
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                      size="txtQuestrialRegular20Black90072_1"
                    >
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis
                    </Text>
                  </div>
                </div>
                <div className="black_900_00_deep_purple_A100_02_border23 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_maskgroup_90x90.png"
                    alt="maskgroup"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.36px] w-auto"
                      size="txtQuestrialRegular36"
                    >
                      Couple Therapy
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                      size="txtQuestrialRegular20Black90072_1"
                    >
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled
                    </Text>
                  </div>
                </div>
                <div className="black_900_00_deep_purple_A100_02_border24 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_maskgroup_1.png"
                    alt="maskgroup"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.36px] w-auto"
                      size="txtQuestrialRegular36"
                    >
                      Group Theraphy
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                      size="txtQuestrialRegular20Black90072_1"
                    >
                      These cases are perfectly simple and easy to distinguish
                    </Text>
                  </div>
                </div>
              </List>
              <Text
                className="md:text-5xl text-7xl text-black-900 w-[53%] sm:w-full"
                size="txtQuestrialRegular72"
              >
                Causes of Various Anxieties that Hinder You from Living Your
                Best Life
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bg-deep_purple-A100 bottom-[21%] flex flex-col items-center justify-start md:px-5 px-8 py-6 right-[6%] rounded-[36px] w-auto">
          <Img
            className="h-6 w-[88px]"
            src="images/img_user_black_900.svg"
            alt="user"
          />
        </div>
        <Footer1 className="flex gap-2.5 items-center justify-center mt-auto mx-auto md:px-5 w-full" />
        <DesktopThreeColumnellipse712 className="absolute bottom-[0] flex flex-col gap-2.5 h-[2933px] md:h-auto inset-x-[0] items-center justify-end max-w-[1773px] mx-auto md:px-10 sm:px-5 px-[85px] py-[34px] w-full" />
      </div>
    </>
  );
};

export default DesktopThreePage;
