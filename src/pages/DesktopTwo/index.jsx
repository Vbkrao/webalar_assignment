import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-end mx-auto pt-[5px] w-full">
        <header className="border-b border-gray-200 border-solid flex items-center justify-center md:px-5 px-[163px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[680px] items-center justify-between w-auto md:w-full">
            <div className="header-row ">
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Img
                  className="common-pointer h-[50px] w-[50px]"
                  src="images/img_arrowleft_deep_purple_a100.svg"
                  alt="arrowleft"
                  onClick={() => navigate(-1)}
                />
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 w-auto"
                  size="txtQuestrialRegular42"
                >
                  Raft
                </Text>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 sm:hidden items-center justify-start w-auto">
              <ul className="flex sm:flex-col flex-row gap-[50px] sm:hidden items-start justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-2.5 items-center justify-start">
                      <div className="bg-deep_purple-A100 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtQuestrialRegular20"
                      >
                        Home
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:text-black-900 text-black-900_72 text-xl"
                  >
                    <Text size="txtQuestrialRegular20Black90072">Science</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:text-black-900 text-black-900_72 text-xl"
                  >
                    <Text size="txtQuestrialRegular20Black90072">Platform</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:text-black-900 text-black-900_72 text-xl"
                  >
                    <Text size="txtQuestrialRegular20Black90072">About Us</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:text-black-900 text-black-900_72 text-xl"
                  >
                    <Text size="txtQuestrialRegular20Black90072">News</Text>
                  </a>
                </li>
              </ul>
              <Button
                className="cursor-pointer leading-[normal] min-w-[141px] rounded-[25px] text-center text-lg"
                color="deep_purple_A100"
                size="sm"
                variant="fill"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </header>
        <div className="sm:h-[2022px] h-[2822px] md:h-[2988px] md:px-5 relative w-full">
          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-start justify-start m-auto max-w-[1749px] w-full">
            <div className="sm:h-[2022px] h-[2403px] md:h-[2988px] p-[30px] sm:px-5 relative w-[1645px] md:w-full">
              <div className="flex m-auto w-full">
                <div className="black_900_00_deep_purple_A100_02_border7 border border-solid flex flex-col gap-[50px] items-start justify-start my-auto p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
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
                <div className="flex flex-col gap-10 items-start justify-center ml-[-481px] mr-auto my-auto sm:pr-5 pr-[21px] py-[21px] shadow-bs w-[99%] z-[1]">
                  <Text
                    className="mt-[472px] md:text-5xl text-7xl text-black-900 w-full"
                    size="txtQuestrialRegular72"
                  >
                    Discover the Power of Psychology and Counseling with Our
                    Expert Team
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] h-[877px] md:h-auto items-center justify-start mb-[443px] w-auto md:w-full">
                    <div className="bg-deep_purple-50 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[71px] rounded-[24px] w-1/2 md:w-full">
                      <Img
                        className="h-[877px] md:h-auto object-cover w-full"
                        src="images/img_image122.png"
                        alt="image122"
                      />
                    </div>
                    <div className="flex flex-col gap-[50px] items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto md:w-full">
                        <div className="border-b border-black-900_33 border-solid flex flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                          <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                            <Text
                              className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                              size="txtQuestrialRegular20Black900"
                            >
                              1
                            </Text>
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                Jessica Johnson
                              </Text>
                              <Text
                                className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                size="txtQuestrialRegular16Black90072"
                              >
                                (Family Therapy)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-black-900_33 border-solid flex flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start w-full">
                            <Text
                              className="text-deep_purple-A100 text-xl tracking-[-0.40px] w-auto"
                              size="txtQuestrialRegular20DeeppurpleA100"
                            >
                              2
                            </Text>
                            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                                <Text
                                  className="text-4xl sm:text-[32px] md:text-[34px] text-deep_purple-A100 tracking-[0.36px] w-auto"
                                  size="txtQuestrialRegular36DeeppurpleA100"
                                >
                                  Ethan Ramirez
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Family Therapy)
                                </Text>
                              </div>
                              <Text
                                className="leading-[124.50%] max-w-[579px] md:max-w-full text-base text-black-900_72 tracking-[0.48px]"
                                size="txtQuestrialRegular16Black90072"
                              >
                                Itaque earum rerum hic tenetur a sapiente
                                delectus, ut aut reiciendis voluptatibus maiores
                                alias consequatur aut perferendis doloribus
                                asperiores repellat
                              </Text>
                            </div>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                            <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                3
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                  size="txtQuestrialRegular20Black900"
                                >
                                  Olivia Lee
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Depression Problem)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                            <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                4
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                  size="txtQuestrialRegular20Black900"
                                >
                                  Ryan Patel
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Family Therapy)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                            <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                5
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                  size="txtQuestrialRegular20Black900"
                                >
                                  Maya Davis
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Depression Problem)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                            <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                6
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                  size="txtQuestrialRegular20Black900"
                                >
                                  Tyler Nguyen
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Family Therapy)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] py-[30px] w-full">
                            <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                size="txtQuestrialRegular20Black900"
                              >
                                7
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900 text-xl tracking-[-0.40px] w-auto"
                                  size="txtQuestrialRegular20Black900"
                                >
                                  Jordan Green
                                </Text>
                                <Text
                                  className="text-base text-black-900_72 tracking-[0.48px] w-auto"
                                  size="txtQuestrialRegular16Black90072"
                                >
                                  (Depression Problem)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[159px] text-center text-lg"
                        shape="round"
                        color="deep_purple_A100"
                        size="md"
                        variant="fill"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute black_900_00_deep_purple_A100_02_border8 border border-solid flex flex-col gap-[50px] inset-x-[0] items-start justify-start mx-auto p-[30px] sm:px-5 rounded-[12px] top-[0] w-[511px] sm:w-full">
                <Img
                  className="h-[90px] md:h-auto object-cover w-[90px]"
                  src="images/img_maskgroup_90x90.png"
                  alt="maskgroup_One"
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
              <div className="absolute black_900_00_deep_purple_A100_02_border9 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 right-[3%] rounded-[12px] top-[0] w-[511px] sm:w-full">
                <Img
                  className="h-[90px] md:h-auto object-cover w-[90px]"
                  src="images/img_maskgroup_1.png"
                  alt="maskgroup_Two"
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
            </div>
          </div>
          <Footer className="absolute bottom-[22%] flex gap-2.5 inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
