import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DesktopOneDesktopOne from "components/DesktopOneDesktopOne";
import Header1 from "components/Header1";

const MacBookPro14SixOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-end mx-auto pt-[17px] w-full">
        <div className="flex flex-col justify-start overflow-auto w-full">
          <Header1 className="bg-white-A700 border border-black-900 border-solid flex gap-2.5 h-[146px] md:h-auto items-center justify-center md:ml-[0] ml-[31px] mr-[47px] md:px-5 px-[163px] py-[50px] shadow-bs w-full" />
          <div className="sm:h-[587px] md:h-[762px] h-[820px] md:ml-[0] ml-[130px] mt-[98px] md:px-5 relative w-[83%] md:w-full">
            <div className="absolute sm:h-[489px] md:h-[664px] h-[820px] inset-y-[0] left-[0] my-auto w-[96%] md:w-full">
              <div className="absolute flex flex-col gap-10 h-[441px] md:h-auto items-start justify-start left-[0] max-w-[771px] top-[0] w-full">
                <div className="h-[222px] relative w-full">
                  <div className="bg-white-A700 h-[222px] m-auto w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-7xl text-black-900 text-shadow-ts w-full"
                    size="txtQuestrialRegular72"
                  >
                    The Individual Counseling & Couples Therapy Expert
                  </Text>
                </div>
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
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[0] w-[59%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[489px] items-start justify-start p-[17px] w-[64%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4660.svg')" }}
                >
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-[23px] w-[94%] md:w-full">
                    <div className="bg-deep_purple-A200 h-[7px] mb-[120px] sm:mt-0 mt-[278px] rounded w-2"></div>
                    <div className="bg-deep_purple-A200 h-3.5 mb-[92px] sm:mt-0 mt-[298px] rounded-lg w-[4%]"></div>
                    <div className="h-[406px] ml-1.5 sm:ml-[0] relative w-[94%] sm:w-full">
                      <Img
                        className="h-[406px] m-auto object-cover w-full"
                        src="images/img_vector2.png"
                        alt="vectorTwo"
                      />
                      <div className="absolute bg-deep_purple-A100 bottom-[23%] flex flex-col items-center justify-start p-[70px] md:px-10 sm:px-5 right-[29%] rounded-bl-[79px] rounded-br-[79px] rounded-tl-[79px] rounded-tr-[80px] w-auto">
                        <Img
                          className="h-5 w-[18px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <div className="absolute bg-deep_purple-A200 h-3.5 right-[18%] rounded-lg top-[3%] w-[4%]"></div>
                      <div className="absolute bg-deep_purple-A200 h-[7px] right-[14%] rounded top-[11%] w-2"></div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[138px] h-[346px] md:mt-0 mt-[137px] relative w-1/5 md:w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[181px]">
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
                  <div className="absolute flex flex-col h-[298px] md:h-auto inset-x-[0] items-end justify-start mx-auto top-[0] w-[181px]">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-end justify-start my-auto right-[5%] w-[181px]">
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
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[20%] w-[30%]">
              <div className="flex sm:flex-col flex-row gap-[22px] h-[88px] md:h-auto items-center justify-start w-[497px] sm:w-full">
                <div className="md:h-[67px] h-[86px] relative w-[232px]">
                  <div className="absolute flex left-[0] top-[0] w-[68%]">
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
                    className="absolute bg-deep_purple-A100 border-2 border-solid border-white-A700 flex h-[67px] items-center justify-center right-[13%] rounded-[33px] text-base text-black-900 text-center top-[0] tracking-[0.48px] w-[67px]"
                    size="txtQuestrialRegular16Black900"
                  >
                    +9k
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 h-[86px] md:h-auto items-start justify-start w-[243px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                    size="txtQuestrialRegular24"
                  >
                    Our Happy Customers
                  </Text>
                  <div className="flex flex-row gap-1 items-start justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_star7_1.svg"
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
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[206px] mt-[145px] md:text-5xl text-7xl text-black-900"
            size="txtQuestrialRegular72"
          >
            We’re The Leading Advisory Centre For You
          </Text>
          <div className="flex md:flex-col flex-row gap-[30px] h-[365px] md:h-auto items-start justify-start max-w-[2923px] md:ml-[0] ml-[215px] mt-[216px] md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[46%] md:w-full"
              orientation="horizontal"
            >
              <div className="black_900_00_deep_purple_A100_02_border10 border border-solid flex flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[421px] sm:w-full">
                <Img
                  className="h-[90px] md:h-auto object-cover w-[90px]"
                  src="images/img_maskgroup.png"
                  alt="maskgroup"
                />
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-shadow-ts tracking-[0.36px] w-auto"
                    size="txtQuestrialRegular36"
                  >
                    Quality Theraphy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[361px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis
                  </Text>
                </div>
              </div>
              <div className="black_900_00_deep_purple_A100_02_border11 border border-solid flex flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[419px] sm:w-full">
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
                    className="leading-[180.00%] max-w-[359px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled
                  </Text>
                </div>
              </div>
              <div className="black_900_00_deep_purple_A100_02_border12 border border-solid flex flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[422px] sm:w-full">
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
                    className="leading-[180.00%] max-w-[362px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    These cases are perfectly simple and easy to distinguish
                  </Text>
                </div>
              </div>
            </List>
            <DesktopOneDesktopOne className="md:flex-1 sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[54%] md:w-full" />
          </div>
          <div className="flex flex-col justify-start max-w-[1533px] mt-[43px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-7xl text-black-900"
              size="txtQuestrialRegular72"
            >
              Discover the Power of Psychology and Counseling with Our Expert
              Team
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-2.5 md:ml-[0] mt-[55px] w-[82%] md:w-full">
              <div className="bg-deep_purple-50 flex flex-col items-center justify-start mb-5 md:px-10 sm:px-5 px-[46px] rounded-[24px] w-[39%] md:w-full">
                <Img
                  className="h-[520px] md:h-auto object-cover w-full"
                  src="images/img_image122.png"
                  alt="image122"
                />
              </div>
              <div className="flex flex-col items-start justify-start md:mt-0 mt-6 w-[53%] md:w-full">
                <div className="flex flex-row gap-[60px] h-9 md:h-auto items-start justify-start w-[348px]">
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
                <div className="flex flex-col mt-1.5 relative w-full">
                  <div className="border-b border-black-900_33 border-solid flex flex-col items-start justify-end max-w-[650px] mx-auto py-[30px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] h-[109px] md:h-auto items-start justify-start w-[499px] sm:w-full">
                      <Text
                        className="text-deep_purple-A100 text-xl tracking-[-0.40px] w-auto"
                        size="txtQuestrialRegular20DeeppurpleA100"
                      >
                        2
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
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
                          className="leading-[124.50%] max-w-[428px] md:max-w-full text-base text-black-900_72 tracking-[0.48px]"
                          size="txtQuestrialRegular16Black90072"
                        >
                          Itaque earum rerum hic tenetur a sapiente delectus, ut
                          aut reiciendis voluptatibus maiores alias consequatur
                          aut perferendis doloribus asperiores repellat
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-black-900_33 border-solid flex flex-col items-start justify-start max-w-[650px] mt-[-16px] mx-auto py-[30px] w-full z-[1]">
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
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] my-0 py-[30px] w-full">
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
                  <div className="border-b border-black-900_33 border-solid flex flex-1 flex-col items-start justify-start max-w-[650px] my-0 py-[30px] w-full">
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
                </List>
                <Button
                  className="cursor-pointer h-11 leading-[normal] mt-2.5 rounded-[22px] text-center text-lg w-[118px]"
                  color="deep_purple_A100"
                  size="xs"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <Text
              className="ml-2.5 md:ml-[0] mt-[69px] md:text-5xl text-7xl text-black-900 w-[67%] sm:w-full"
              size="txtQuestrialRegular72"
            >
              We’re The Leading Advisory Centre For You
            </Text>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[365px] justify-start max-w-[1533px] mt-[87px] w-full"
              orientation="horizontal"
            >
              <div className="black_900_00_deep_purple_A100_02_border16 border border-solid flex sm:flex-1 flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[421px] sm:w-full">
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
                    className="leading-[180.00%] max-w-[361px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis
                  </Text>
                </div>
              </div>
              <div className="black_900_00_deep_purple_A100_02_border17 border border-solid flex sm:flex-1 flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[419px] sm:w-full">
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
                    className="leading-[180.00%] max-w-[359px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled
                  </Text>
                </div>
              </div>
              <div className="black_900_00_deep_purple_A100_02_border18 border border-solid flex sm:flex-1 flex-col gap-[50px] h-[365px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[422px] sm:w-full">
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
                    className="leading-[180.00%] max-w-[362px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
                    size="txtQuestrialRegular20Black90072_1"
                  >
                    These cases are perfectly simple and easy to distinguish
                  </Text>
                </div>
              </div>
            </List>
            <Text
              className="ml-2.5 md:ml-[0] mt-[54px] md:text-5xl text-7xl text-black-900 w-[57%] sm:w-full"
              size="txtQuestrialRegular72"
            >
              Causes of Various Anxieties that Hinder You from Living Your Best
              Life
            </Text>
            <div className="flex flex-col md:gap-10 gap-[99px] justify-start md:ml-[0] ml-[27px] mt-[99px] w-[89%] md:w-full">
              <div className="h-[612px] md:ml-[0] ml-[253px] relative w-[53%] md:w-full">
                <div className="absolute h-[612px] inset-y-[0] my-auto right-[0] w-[89%] md:w-full">
                  <div className="h-[612px] m-auto w-full">
                    <div className="border border-deep_purple-A100 border-solid h-[612px] m-auto rounded-[318px] w-full"></div>
                    <div className="absolute h-[332px] inset-[0] justify-center m-auto w-[55%]">
                      <div className="bg-deep_purple-50 h-[332px] m-auto rounded-[173px] w-full"></div>
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[277px] md:h-auto object-cover rounded-bl-[173px] rounded-br-[173px] w-full"
                          src="images/img_image123_277x346.png"
                          alt="image123"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[19%] flex flex-col md:gap-10 gap-[234px] justify-start right-[3%] w-[37%]">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[68px] w-[71%] md:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto">
                        <div className="bg-deep_purple-A200 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl tracking-[0.24px] w-auto"
                          size="txtQuestrialRegular24"
                        >
                          Inner Conflict
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto">
                        <div className="bg-deep_purple-A200 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl tracking-[0.24px] w-auto"
                          size="txtQuestrialRegular24"
                        >
                          Burnout
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[16%] w-1/5">
                  <div className="h-14 md:h-[25px] p-2.5 relative w-[137px]">
                    <Text
                      className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 text-right sm:text-xl top-1/4 tracking-[0.24px] w-max"
                      size="txtQuestrialRegular24"
                    >
                      Addictions
                    </Text>
                    <div className="absolute bg-deep_purple-A200 bottom-[18%] h-2 right-[18%] rounded-[50%] w-2"></div>
                  </div>
                </div>
                <div className="absolute bottom-[37%] flex flex-col items-center justify-start left-[0] w-[21%]">
                  <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto">
                    <div className="bg-deep_purple-A200 h-2 rounded-[50%] w-2"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl tracking-[0.24px] w-auto"
                      size="txtQuestrialRegular24"
                    >
                      Depression
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[12%] flex flex-col items-center justify-start left-[9%] w-[36%]">
                  <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto">
                    <div className="bg-deep_purple-A200 h-2 rounded-[50%] w-2"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl tracking-[0.24px] w-auto"
                      size="txtQuestrialRegular24"
                    >
                      Conflict Management
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[4%] top-[0] w-2/5">
                  <div className="flex md:h-[38px] h-[57px] justify-end p-2.5 relative w-[284px]">
                    <Text
                      className="mt-auto mx-auto text-4xl sm:text-[32px] md:text-[34px] text-deep_purple-A200 text-right tracking-[0.36px] w-auto"
                      size="txtQuestrialRegular36DeeppurpleA200"
                    >
                      Bipolar Disorder
                    </Text>
                    <div className="absolute bg-deep_purple-A200 bottom-[18%] h-2 left-[18%] rounded-[50%] w-2"></div>
                  </div>
                </div>
              </div>
              <Text
                className="md:text-5xl text-7xl text-black-900 w-full"
                size="txtQuestrialRegular72"
              >
                Our Clients and Their Positive Experiences with Our Psychology
                Consultation Services
              </Text>
            </div>
            <div className="bg-deep_purple-50 flex flex-col h-[811px] md:h-auto items-start justify-start max-w-[1360px] ml-6 md:ml-[0] mr-[149px] mt-[76px] md:px-10 sm:px-5 px-[119px] py-[150px] rounded-[27px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <div className="h-[507px] relative w-[507px] sm:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rounded-[242px] w-[96%]"
                    style={{ backgroundImage: "url('images/img_figure.png')" }}
                  >
                    <Img
                      className="h-[507px] md:h-auto object-cover rounded-[242px] w-full"
                      src="images/img_oschmannjpg_507x484.png"
                      alt="oschmannjpg"
                    />
                  </div>
                  <div className="absolute bottom-[0] flex flex-col h-[74px] items-center justify-start right-[0] rounded-[50%] w-[74px]">
                    <Img
                      className="h-[73px] md:h-auto object-cover w-[73px]"
                      src="images/img_stefanoschmanpng.png"
                      alt="stefanoschmanpn"
                    />
                  </div>
                </div>
                <div className="md:h-[434px] h-[501px] relative w-[46%] md:w-full">
                  <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto w-[498px] sm:w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.36px] w-auto"
                          size="txtQuestrialRegular36"
                        >
                          Samantha Carter
                        </Text>
                        <Text
                          className="text-base text-black-900_99 tracking-[0.48px] w-[292px]"
                          size="txtQuestrialRegular16"
                        >
                          Former Merck CEO and investor at Yuri
                        </Text>
                      </div>
                      <Text
                        className="leading-[149.00%] max-w-[498px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px]"
                        size="txtQuestrialRegular24"
                      >
                        <>
                          I can&#39;t recommend the psychology consultation
                          services enough. As someone who has struggled with
                          anxiety and self-doubt for years, I was hesitant to
                          try therapy again. But from the very first session, my
                          consultant made me feel heard and understood. She
                          worked with me to identify the root causes of my
                          anxiety and gave me concrete tools to manage it.
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="absolute bg-black-900_33 bottom-[10%] h-px left-[0] w-[95%]" />
                  <Text
                    className="absolute bottom-[0] left-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900_72 tracking-[0.36px]"
                    size="txtQuestrialRegular36Black90072"
                  >
                    01
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[50px] mt-[121px] md:text-5xl text-7xl text-black-900 w-[61%] sm:w-full"
              size="txtQuestrialRegular72"
            >
              Discover the Power of Psychology with Our Case Studies Section
            </Text>
            <div className="sm:h-[530px] h-[563px] md:h-[667px] ml-2 md:ml-[0] mt-[139px] relative w-[93%] md:w-full">
              <div className="absolute bg-deep_purple-50 bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[0] p-[79px] md:px-10 sm:px-5 w-[94%]">
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[59px] md:mt-0 mt-[107px] pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[59px] md:mt-0 mt-[107px] pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
                <div className="flex flex-col gap-2.5 items-start justify-start mb-14 md:ml-[0] ml-[33px] md:mt-0 mt-[110px] pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] w-auto">
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
              <Img
                className="absolute h-[343px] object-cover right-[11%] rounded-[12px] top-[0] w-[17%]"
                src="images/img_image.png"
                alt="image_Two"
              />
              <Img
                className="absolute h-[343px] object-cover right-[34%] rounded-[12px] top-[0] w-[17%]"
                src="images/img_image.png"
                alt="image_Three"
              />
              <div className="absolute bottom-[24%] flex flex-col gap-2.5 items-start justify-end pb-[0.42px] md:pr-10 sm:pr-5 pr-[165.53px] right-[0] w-auto">
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
              <Img
                className="absolute h-[343px] left-[2%] object-cover rounded-[12px] top-[0] w-[17%]"
                src="images/img_image.png"
                alt="image_Four"
              />
              <Img
                className="absolute h-[343px] left-1/4 object-cover rounded-[12px] top-[0] w-[17%]"
                src="images/img_image.png"
                alt="image_Five"
              />
            </div>
            <div className="md:h-[920px] h-[975px] md:ml-[0] ml-[58px] mt-[183px] relative w-[94%] md:w-full">
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
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus
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
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
                      name="groupFortyNine"
                      placeholder="aryademian@email"
                      className="p-0 placeholder:text-black-900_72 text-base text-left tracking-[0.48px] w-full"
                      wrapClassName="border border-black-900 border-solid mb-[undefinedpx] mt-auto mx-auto w-full z-[1]"
                    ></Input>
                  </div>
                  <div className="h-[103px] relative w-full">
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
          </div>
          <footer className="flex items-center justify-center mt-[117px] md:px-5 w-full">
            <div className="bg-black-900 flex flex-col md:h-auto pb-[50px] pt-[100px] md:px-10 sm:px-5 px-[163px] relative w-[2014px] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[355px] h-[285px] md:h-auto items-start justify-between m-auto w-full">
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
                              Services & Products
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default MacBookPro14SixOnePage;
