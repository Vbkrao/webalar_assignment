import React from "react";

import { Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-black-900 flex flex-col md:h-auto pb-[50px] pt-[100px] md:px-10 sm:px-5 px-[163px] relative w-[1773px] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[355px] h-[285px] md:h-auto items-start justify-between mt-auto mx-auto w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-[50px] w-[50px]"
                src="images/img_arrowleft_deep_purple_a100.svg"
                alt="arrowleft_One"
              />
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                size="txtQuestrialRegular42WhiteA700"
              >
                Raft
              </Text>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-start pr-[1.31px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24WhiteA700"
                >
                  Home
                </Text>
                <div className="flex flex-col items-start justify-start pb-[0.42px] pr-[1.81px] w-auto">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Offering
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Benefits
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Testimonials
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        News
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24WhiteA700"
                >
                  Science
                </Text>
                <div className="flex flex-col items-start justify-start pb-[0.42px] pr-[1.88px] w-auto">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Benefits
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Examples
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Scientists
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-[29px] items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24WhiteA700"
                >
                  Platform
                </Text>
                <div className="flex flex-col items-start justify-start pb-[0.42px] pr-[4.64px] w-auto">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Offering
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Services & Products
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Key Facts
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Case Studies
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Testimonials
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24WhiteA700"
                >
                  About Us
                </Text>
                <div className="flex flex-col items-start justify-start pb-[0.42px] pr-[4.8px] w-auto">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Mission & Vision
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Company Values
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Team
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Jobs
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-white-A700_7f text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20WhiteA7007f"
                      >
                        Awards
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24WhiteA700"
                >
                  Resources
                </Text>
                <Text
                  className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                  size="txtQuestrialRegular20WhiteA7007f"
                >
                  Press Kit
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 h-[49px] md:h-auto items-center justify-between mt-[-17.42px] mx-auto w-full z-[1]">
            <Text
              className="text-base text-white-A700 tracking-[0.48px] w-auto"
              size="txtQuestrialRegular16WhiteA700"
            >
              © 2023 Psychology and Counseling. All Rights Reserved. With love
              by Elmous
            </Text>
            <Img className="h-5 w-[121px]" src="images/img_ul.svg" alt="ul" />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
