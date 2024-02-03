import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const DesktopFive1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial gap-6 items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-200 border-solid flex gap-2.5 items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1079px] md:h-[1232px] sm:h-[2494px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start w-full">
                <div className="flex flex-col h-[613px] md:h-auto items-start justify-start max-w-[1680px] w-full">
                  <Text
                    className="max-w-[1680px] md:max-w-full md:text-5xl text-7xl text-black-900"
                    size="txtQuestrialRegular72"
                  >
                    Discover the Power of Psychology with Our Case Studies
                    Section
                  </Text>
                </div>
                <div className="bg-deep_purple-50 flex flex-col items-end justify-end p-[17px] w-full">
                  <div className="bg-deep_purple-A100 flex flex-col h-[78px] md:h-auto items-start justify-start mb-[23px] mt-[193px] sm:px-5 px-8 py-6 rounded-[39px] w-[161px]">
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
          <div className="flex flex-col items-start justify-start max-w-[1773px] w-full">
            <div className="bg-black-900 flex flex-col md:h-auto pb-[50px] pt-[100px] md:px-5 px-[163px] relative w-[1773px] md:w-full">
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
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Offering
                        </Text>
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Benefits
                        </Text>
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Testimonials
                        </Text>
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          News
                        </Text>
                      </div>
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
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Benefits
                        </Text>
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Examples
                        </Text>
                        <Text
                          className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                          size="txtQuestrialRegular20WhiteA7007f"
                        >
                          Scientists
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[89px] grid sm:grid-cols-1 grid-cols-2 w-[42%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[29px] items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                        size="txtQuestrialRegular24WhiteA700"
                      >
                        Platform
                      </Text>
                      <div className="flex flex-col items-start justify-start pb-[0.42px] pr-[4.64px] w-auto">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Offering
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Services & Products
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Key Facts
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Case Studies
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Testimonials
                          </Text>
                        </div>
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
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Mission & Vision
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Company Values
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Team
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Jobs
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xl tracking-[-0.40px] w-auto"
                            size="txtQuestrialRegular20WhiteA7007f"
                          >
                            Awards
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
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
      </div>
    </>
  );
};

export default DesktopFive1Page;
