import React from "react";

import { Button, Img, Text } from "components";
import Footer1 from "components/Footer1";

const DesktopOne1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial gap-[9px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="border-b border-gray-200 border-solid flex h-[143px] md:h-auto items-center justify-center pl-[100px] pr-[163px] md:px-5 py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[680px] items-center justify-between w-auto md:w-full">
              <div className="header-row ">
                <div className="flex flex-row gap-2.5 items-center justify-start">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_arrowleft_deep_purple_a100.svg"
                    alt="arrowleft"
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
                      <Text size="txtQuestrialRegular20Black90072">
                        Science
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:text-black-900 text-black-900_72 text-xl"
                    >
                      <Text size="txtQuestrialRegular20Black90072">
                        Platform
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:text-black-900 text-black-900_72 text-xl"
                    >
                      <Text size="txtQuestrialRegular20Black90072">
                        About Us
                      </Text>
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
          <div className="h-[1326px] md:h-[1461px] sm:h-[960px] max-w-[1710px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[18%] w-[53%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[962px] items-start justify-center p-[26px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group4660.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-[54px] w-[95%] md:w-full">
                  <div className="bg-deep_purple-A200 h-3.5 mb-[236px] md:mt-0 mt-[549px] rounded-[7px] w-[2%]"></div>
                  <div className="bg-deep_purple-A200 h-[29px] mb-[182px] md:mt-0 mt-[588px] rounded-[14px] w-[4%]"></div>
                  <div className="h-[800px] md:ml-[0] ml-[9px] relative w-[94%] md:w-full">
                    <Img
                      className="h-[800px] m-auto object-cover w-full"
                      src="images/img_vector2.png"
                      alt="vectorTwo"
                    />
                    <div className="absolute bg-deep_purple-A100 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 rounded-bl-[79px] rounded-br-[79px] rounded-tl-[79px] rounded-tr-[80px] top-[38%] w-auto">
                      <Img
                        className="h-5 w-[18px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <div className="absolute bg-deep_purple-A200 h-[29px] right-[18%] rounded-[14px] top-[4%] w-[4%]"></div>
                    <div className="absolute bg-deep_purple-A200 h-3.5 right-[14%] rounded-[7px] top-[11%] w-[2%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-10 h-[597px] md:h-auto items-start justify-start left-[1%] max-w-[1169px] top-[0] w-full">
              <Text
                className="max-w-[1044px] md:max-w-full md:text-5xl text-7xl text-black-900"
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
            <div className="absolute flex sm:flex-col flex-row gap-[22px] h-[93px] md:h-auto items-center justify-center right-[0] top-[11%] w-[515px] sm:w-full">
              <div className="flex relative w-[202px]">
                <div className="flex my-auto w-[78%]">
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
                  className="bg-deep_purple-A100 border-2 border-solid border-white-A700 flex h-[67px] items-center justify-center ml-[-22px] my-auto rounded-[33px] text-base text-black-900 text-center tracking-[0.48px] w-[67px] z-[1]"
                  size="txtQuestrialRegular16Black900"
                >
                  +9k
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                  size="txtQuestrialRegular24"
                >
                  Our Happy Customers
                </Text>
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_star7_16x16.svg"
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
            <div className="absolute bottom-[8%] flex flex-col md:gap-10 gap-[95px] justify-start right-[1%] w-[12%]">
              <div className="flex flex-col gap-[46px] h-[727px] md:h-auto items-end justify-start w-[199px]">
                <div className="flex flex-col items-end justify-start w-full">
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
              <div className="bg-deep_purple-A100 flex flex-col items-start justify-start md:ml-[0] ml-[11px] mr-9 sm:px-5 px-8 py-6 rounded-[36px] w-auto">
                <Img
                  className="h-6 w-[88px]"
                  src="images/img_user_black_900.svg"
                  alt="user_One"
                />
              </div>
            </div>
            <div className="absolute bottom-[26%] flex flex-col gap-5 h-[137px] md:h-auto items-start justify-start left-[0] w-[425px] sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                size="txtQuestrialRegular24"
              >
                Our Partnership
              </Text>
              <div className="border-black-900_36 border-solid border-t flex sm:flex-col flex-row sm:gap-5 items-start justify-start pt-[19px] w-[91%] md:w-full">
                <Img
                  className="h-[23px] md:h-auto object-cover w-[17%] sm:w-full"
                  src="images/img_mitpng.png"
                  alt="mitpng"
                />
                <Img
                  className="h-[23px] md:h-auto ml-3.5 sm:ml-[0] object-cover w-[17%] sm:w-full"
                  src="images/img_uclapng.png"
                  alt="uclapng"
                />
                <Img
                  className="h-[23px] md:h-auto ml-3.5 sm:ml-[0] object-cover w-[17%] sm:w-full"
                  src="images/img_nuspng.png"
                  alt="nuspng"
                />
                <Img
                  className="h-[23px] md:h-auto ml-3.5 sm:ml-[0] object-cover w-[17%] sm:w-full"
                  src="images/img_esapng.png"
                  alt="esapng"
                />
                <Img
                  className="h-[23px] md:h-auto ml-3.5 sm:ml-[0] object-cover w-[17%] sm:w-full"
                  src="images/img_charitepng.png"
                  alt="charitepng"
                />
              </div>
            </div>
            <Text
              className="absolute bottom-[0] left-[1%] md:text-5xl text-7xl text-black-900 w-[46%] sm:w-full"
              size="txtQuestrialRegular72"
            >
              We’re The Leading Advisory Centre For You
            </Text>
          </div>
        </div>
        <Footer1 className="flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DesktopOne1Page;
