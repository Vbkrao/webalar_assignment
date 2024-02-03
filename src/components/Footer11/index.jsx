import React from "react";

import { Img, Text } from "components";

const Footer11 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-[78%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-row gap-2.5 h-[57px] md:h-auto items-center justify-start w-[146px]">
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
            <div className="flex md:flex-1 flex-col gap-[7px] justify-start md:mt-0 mt-[15px] w-[85%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[214px] w-[68%] md:w-full">
                <ul className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full common-column-list">
                  <li>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                      size="txtQuestrialRegular24WhiteA700"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                      size="txtQuestrialRegular24WhiteA700"
                    >
                      Science
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                      size="txtQuestrialRegular24WhiteA700"
                    >
                      Platform
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                      size="txtQuestrialRegular24WhiteA700"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                      size="txtQuestrialRegular24WhiteA700"
                    >
                      Resources
                    </Text>
                  </li>
                </ul>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] pb-[0.42px] pr-[1.81px] w-auto">
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
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] pb-[0.42px] pr-[1.88px] w-auto">
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
                  <ul className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[62px] md:mt-0 mt-5 w-auto md:w-full common-column-list">
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
                        Services{" "}
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
                  </ul>
                  <ul className="flex flex-col gap-2.5 items-start justify-start ml-14 md:ml-[0] w-auto md:w-full common-column-list">
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
                  <Text
                    className="md:ml-[0] ml-[17px] md:mt-0 mt-[3px] text-white-A700_7f text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20WhiteA7007f"
                  >
                    Press Kit
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-base text-white-A700 tracking-[0.48px]"
                  size="txtQuestrialRegular16WhiteA700"
                >
                  © 2023 Psychology and Counseling. All Rights Reserved. With
                  love by Elmous
                </Text>
                <Img
                  className="h-5 w-[121px]"
                  src="images/img_ul.svg"
                  alt="ul"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer11.defaultProps = {};

export default Footer11;
