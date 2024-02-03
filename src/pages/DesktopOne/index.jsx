import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import DesktopOneDesktopOne from "components/DesktopOneDesktopOne";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-questrial h-[1915px] mx-auto pt-[27px] relative w-full">
        <div className="absolute flex flex-col left-[1%] md:px-5 top-[1%] w-[91%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[143px] justify-start mx-auto w-full">
            <header className="flex md:flex-col gap-2.5 h-[97px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[163px] py-[50px] w-full">
              <div className="border-b border-gray-200 border-solid h-[97px] w-[87%]"></div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1532px] w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="common-pointer h-11 w-[50px]"
                    src="images/img_arrowleft.svg"
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
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
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
                        className="bg-clip-text bg-gradient  hover:text-black-900 text-transparent text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black9001e">
                          Science
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="hover:text-black-900 text-blue_gray-400 text-xl"
                      >
                        <Text size="txtQuestrialRegular20Bluegray400">
                          Platform
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="bg-clip-text bg-gradient  hover:text-black-900 text-transparent text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black9001e">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="bg-clip-text bg-gradient  hover:text-black-900 text-transparent text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black9001e">News</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="bg-deep_purple-A100 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[22px] w-auto">
                    <div className="flex flex-col items-start justify-start pb-[0.88px] pl-0.5 pr-[1.17px] w-auto">
                      <a
                        href="javascript:"
                        className="text-black-900 text-center text-lg w-auto"
                      >
                        <Text size="txtQuestrialRegular18">Contact Us</Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[199px] w-[81%] md:w-full">
              <div className="flex flex-col gap-[57px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[251px] items-start justify-start w-[92%] md:w-full">
                  <Text
                    className="mb-[59px] md:text-5xl text-7xl text-black-900"
                    size="txtQuestrialRegular72"
                  >
                    We’re The Leading Advisory Centre For You
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[22px] h-[67px] md:h-auto items-center justify-start md:mt-0 mt-[101px] w-[467px] sm:w-full">
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
                          className="h-[67px] ml-[-22.01px] my-auto rounded-[50%] w-[67px] z-[1]"
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
                          src="images/img_star7.svg"
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
                <div className="md:h-[578px] h-[681px] md:ml-[0] ml-[13px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col gap-10 h-[507px] md:h-auto items-start justify-start max-w-[1044px] right-[0] w-full">
                    <div className="md:h-[148px] h-[419px] relative w-full">
                      <div className="absolute border border-black-900 border-solid flex flex-col md:h-auto h-full inset-y-[0] items-start justify-end left-[0] max-w-[696px] my-auto w-full">
                        <Text
                          className="leading-[180.00%] max-w-[579px] md:max-w-full text-black-900_33 text-xl tracking-[-0.40px]"
                          size="txtQuestrialRegular20Black90033"
                        >
                          We leverage microgravity to create tomorrow’s cures
                          with our in-house developed space labs and ground
                          simulators.
                        </Text>
                      </div>
                      <Text
                        className="absolute inset-x-[0] mx-auto md:text-5xl text-7xl text-black-900 top-[0] w-full"
                        size="txtQuestrialRegular72"
                      >
                        The Individual Counseling & Couples Therapy Expert
                      </Text>
                    </div>
                    <div className="bg-deep_purple-A100 flex flex-col items-start justify-start sm:px-5 px-8 py-6 rounded-[33px] w-auto">
                      <div className="flex flex-col items-start justify-start pb-[0.88px] pl-0.5 pr-[1.17px] w-auto">
                        <Text
                          className="text-black-900 text-center text-lg w-auto"
                          size="txtQuestrialRegular18"
                        >
                          Book Appointment
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[46px] h-[596px] md:h-auto items-end justify-start right-[22%] top-[0] w-[181px]">
                    <div className="flex flex-col items-end justify-start w-full">
                      <Text
                        className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                        size="txtQuestrialRegular64"
                      >
                        147
                      </Text>
                      <Text
                        className="leading-[180.00%] text-black-900_33 text-right text-xl tracking-[-0.40px]"
                        size="txtQuestrialRegular20Black90033"
                      >
                        <>
                          Space labs launched
                          <br />
                          by our team
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[46px] items-center justify-start w-[67%] md:w-full">
                      <div className="flex flex-col items-end justify-start w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                          size="txtQuestrialRegular64"
                        >
                          50
                        </Text>
                        <Text
                          className="leading-[180.00%] text-black-900_33 text-right text-xl tracking-[-0.40px]"
                          size="txtQuestrialRegular20Black90033"
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
                          className="leading-[180.00%] text-black-900_33 text-right text-xl tracking-[-0.40px]"
                          size="txtQuestrialRegular20Black90033"
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
                  <div className="absolute bottom-1/4 flex flex-col gap-5 h-[93px] md:h-auto items-start justify-start left-[0] w-[385px] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px] w-auto"
                      size="txtQuestrialRegular24"
                    >
                      Our Partnership
                    </Text>
                    <div className="border-black-900_36 border-solid border-t flex flex-row items-start justify-between pt-[19px] w-full">
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_mitpng.png"
                        alt="mitpng"
                      />
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_uclapng.png"
                        alt="uclapng"
                      />
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_nuspng.png"
                        alt="nuspng"
                      />
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_esapng.png"
                        alt="esapng"
                      />
                      <Img
                        className="h-[18px] md:h-auto object-cover"
                        src="images/img_charitepng.png"
                        alt="charitepng"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-auto mr-[213px] mt-[-351.84px] w-[57%] z-[1]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[908px] items-start justify-center p-[27px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group4660.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-[49px] w-[95%] md:w-full">
                <div className="bg-deep_purple-A200 h-[13px] mb-[223px] md:mt-0 mt-[518px] rounded-md w-3"></div>
                <div className="bg-deep_purple-A200 h-[27px] mb-[172px] md:mt-0 mt-[555px] rounded-[13px] w-[4%]"></div>
                <div className="h-[755px] ml-2.5 md:ml-[0] relative w-[94%] md:w-full">
                  <Img
                    className="h-[755px] m-auto object-cover w-full"
                    src="images/img_vector2.png"
                    alt="vectorTwo"
                  />
                  <div className="absolute bg-deep_purple-A100 flex flex-col h-max inset-[0] items-center justify-start m-auto p-[70px] md:px-10 sm:px-5 rounded-bl-[79px] rounded-br-[79px] rounded-tl-[79px] rounded-tr-[80px] w-auto">
                    <Img
                      className="h-5 w-[18px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="absolute bg-deep_purple-A200 h-[27px] right-[18%] rounded-[13px] top-[4%] w-[4%]"></div>
                  <div className="absolute bg-deep_purple-A200 h-[13px] right-[14%] rounded-md top-[11%] w-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-deep_purple-A100 bottom-[29%] flex flex-col items-center justify-start md:px-5 px-8 py-6 right-[6%] rounded-[36px] w-auto">
          <Img
            className="h-6 w-[88px]"
            src="images/img_user_black_900.svg"
            alt="user_One"
          />
        </div>
        <footer className="absolute bottom-[0] flex h-[437px] md:h-auto inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="h-[437px] md:h-[992px] relative w-full">
            <div className="h-[437px] m-auto shadow-bs w-[98%]"></div>
            <div className="absolute bg-black-900 flex flex-col md:h-auto inset-[0] m-auto pb-[50px] pt-[100px] md:px-10 sm:px-5 px-[163px] w-[1778px] md:w-full">
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
          </div>
        </footer>
        <DesktopOneDesktopOne className="absolute bottom-1/4 sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:px-5 right-[3%] w-[89%]" />
      </div>
    </>
  );
};

export default DesktopOnePage;
