import React from "react";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const MacBookPro14OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-end mx-auto py-2.5 w-full">
        <div className="flex flex-col justify-start mt-[38px] w-full">
          <Header1 className="border-b border-gray-200 border-solid flex gap-2.5 h-[146px] md:h-auto items-center justify-center md:ml-[0] ml-[33px] md:px-5 px-[163px] py-[50px] w-full" />
          <div className="md:h-[562px] sm:h-[817px] h-[921px] md:ml-[0] ml-[305px] mt-[58px] md:px-5 relative w-3/4 md:w-full">
            <div className="absolute flex flex-col gap-10 h-[441px] md:h-auto items-start justify-start left-[0] max-w-[771px] top-[0] w-full">
              <Text
                className="max-w-[771px] md:max-w-full md:text-5xl text-7xl text-black-900"
                size="txtQuestrialRegular72"
              >
                The Individual Counseling & Couples Therapy Expert
              </Text>
              <Text
                className="leading-[180.00%] max-w-[579px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                size="txtQuestrialRegular20Black90072_1"
              >
                We leverage microgravity to create tomorrow’s cures with our
                in-house developed space labs and ground simulators.
              </Text>
              <Button
                className="cursor-pointer leading-[normal] min-w-[217px] text-center text-lg"
                shape="round"
                color="deep_purple_A100"
                size="md"
                variant="fill"
              >
                Book Appointment
              </Button>
            </div>
            <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[44%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[489px] items-start justify-start p-[19px] w-full"
                style={{ backgroundImage: "url('images/img_group4660.svg')" }}
              >
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-[21px] w-[94%] md:w-full">
                  <div className="bg-deep_purple-A200 h-[7px] mb-[120px] sm:mt-0 mt-[278px] rounded w-[2%]"></div>
                  <div className="bg-deep_purple-A200 h-3.5 mb-[92px] sm:mt-0 mt-[298px] rounded-[9px] w-[4%]"></div>
                  <div className="h-[406px] sm:ml-[0] ml-[7px] relative w-[94%] sm:w-full">
                    <Img
                      className="h-[406px] m-auto object-cover w-full"
                      src="images/img_vector2.png"
                      alt="vectorTwo"
                    />
                    <div className="absolute bg-deep_purple-A100 bottom-[23%] flex flex-col items-center justify-start p-[70px] md:px-10 sm:px-5 right-[32%] rounded-bl-[79px] rounded-br-[79px] rounded-tl-[79px] rounded-tr-[80px] w-auto">
                      <Img
                        className="h-5 w-[18px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <div className="absolute bg-deep_purple-A200 h-3.5 right-[18%] rounded-[9px] top-[3%] w-[4%]"></div>
                    <div className="absolute bg-deep_purple-A200 h-[7px] right-[14%] rounded top-[11%] w-[2%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-[22px] h-[69px] md:h-auto items-center justify-center right-[4%] top-[23%] w-[497px] sm:w-full">
              <div className="md:h-[67px] h-[69px] relative w-[232px]">
                <div className="absolute flex inset-y-[0] left-[0] my-auto w-[68%]">
                  <div className="flex my-auto w-[72%]">
                    <Img
                      className="h-[67px] my-auto rounded-[50%] w-[67px]"
                      src="images/img_ellipse706.png"
                      alt="ellipse706"
                    />
                    <Img
                      className="h-[67px] ml-[-22px] my-auto rounded-[50%] w-[67px] z-[1]"
                      src="images/img_ellipse706.png"
                      alt="ellipse707"
                    />
                  </div>
                  <Img
                    className="h-[67px] ml-[-22px] my-auto rounded-[50%] w-[67px] z-[1]"
                    src="images/img_ellipse706.png"
                    alt="ellipse708"
                  />
                </div>
                <Text
                  className="absolute bg-deep_purple-A100 border-2 border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center my-auto right-[13%] rounded-[33px] text-base text-black-900 text-center tracking-[0.48px] w-[67px]"
                  size="txtQuestrialRegular16Black900"
                >
                  +9k
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 h-[62px] md:h-auto items-start justify-start w-[243px]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24"
                >
                  Our Happy Customers
                </Text>
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_star7_2.svg"
                    alt="starSeven"
                  />
                  <Text
                    className="text-base text-black-900 tracking-[0.48px] w-auto"
                    size="txtQuestrialRegular16Black900"
                  >
                    4.9
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400_01 tracking-[0.48px] w-auto"
                    size="txtQuestrialRegular16Bluegray40001"
                  >
                    (1.2 Reviews)
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-[46px] items-end justify-start right-[0] w-[181px]">
              <div className="flex flex-col h-[142px] md:h-auto items-end justify-start w-[181px]">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                  size="txtQuestrialRegular64"
                >
                  147
                </Text>
                <Text
                  className="leading-[180.00%] text-black-900_72 text-right text-xl tracking-[-0.40px]"
                  size="txtQuestrialRegular20Black90072_1"
                >
                  <>
                    Space labs launched
                    <br />
                    by our team
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                  size="txtQuestrialRegular64"
                >
                  50
                </Text>
                <Text
                  className="leading-[180.00%] text-black-900_72 text-right text-xl tracking-[-0.40px]"
                  size="txtQuestrialRegular20Black90072_1"
                >
                  <>
                    Customers on 4<br />
                    continents
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                  size="txtQuestrialRegular64"
                >
                  138
                </Text>
                <Text
                  className="leading-[180.00%] text-black-900_72 text-right text-xl tracking-[-0.40px]"
                  size="txtQuestrialRegular20Black90072_1"
                >
                  <>
                    Space biology
                    <br />
                    publications
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1270px] mt-[45px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-7xl text-black-900"
              size="txtQuestrialRegular72"
            >
              We’re The Leading Advisory Centre For You
            </Text>
            <div className="bg-deep_purple-A100 flex flex-col items-start justify-start md:mt-0 mt-[57px] sm:px-5 px-8 py-6 rounded-[36px] w-auto">
              <Img
                className="h-6 w-[88px]"
                src="images/img_user_black_900.svg"
                alt="user_One"
              />
            </div>
          </div>
          <footer className="bg-black-900 flex h-[392px] md:h-auto items-center justify-center mt-[25px] pb-[50px] pt-[100px] md:px-5 px-[163px] w-full">
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
                        <a
                          href="javascript:"
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                        >
                          <Text size="txtQuestrialRegular24WhiteA700">
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                        >
                          <Text size="txtQuestrialRegular24WhiteA700">
                            Science
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                        >
                          <Text size="txtQuestrialRegular24WhiteA700">
                            Platform
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                        >
                          <Text size="txtQuestrialRegular24WhiteA700">
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.24px]"
                        >
                          <Text size="txtQuestrialRegular24WhiteA700">
                            Resources
                          </Text>
                        </a>
                      </li>
                    </ul>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] pb-[0.42px] pr-[1.81px] w-auto">
                        <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Offering
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Benefits
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Testimonials
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                News
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] pb-[0.42px] pr-[1.88px] w-auto">
                        <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Benefits
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Examples
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700_7f text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtQuestrialRegular20WhiteA7007f">
                                Scientists
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <ul className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[62px] md:mt-0 mt-5 w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Offering
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Services{" "}
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Key Facts
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Case Studies
                            </Text>
                          </a>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-2.5 items-start justify-start ml-14 md:ml-[0] w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Mission & Vision
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Company Values
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Team
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Jobs
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xl tracking-[-0.40px]"
                          >
                            <Text size="txtQuestrialRegular20WhiteA7007f">
                              Awards
                            </Text>
                          </a>
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
                      © 2023 Psychology and Counseling. All Rights Reserved.
                      With love by Elmous
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
        </div>
      </div>
    </>
  );
};

export default MacBookPro14OnePage;
