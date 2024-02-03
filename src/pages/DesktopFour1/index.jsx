import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const DesktopFour1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-200 border-solid flex gap-2.5 items-center justify-center md:px-5 px-[163px] py-[50px] w-full" />
        <div className="sm:h-[1039px] md:h-[1219px] h-[1244px] max-w-[1766px] mx-auto md:px-5 relative w-full">
          <div className="sm:h-[1039px] md:h-[1219px] h-[1244px] m-auto w-full">
            <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[1766px] shadow-bs w-full">
              <Text
                className="max-w-[1719px] md:max-w-full md:text-5xl text-7xl text-black-900"
                size="txtQuestrialRegular72"
              >
                Our Clients and Their Positive Experiences with Our Psychology
                Consultation Services
              </Text>
            </div>
            <div className="absolute bg-deep_purple-50 bottom-[0] flex flex-col h-[1004px] md:h-auto inset-x-[0] items-end justify-start max-w-[1753px] mx-auto pb-[150px] pt-[133px] md:px-10 sm:px-5 px-[119px] rounded-[27px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] h-[756px] md:h-auto items-center justify-start max-w-[1608px] w-full">
                  <div className="md:h-[480px] h-[507px] relative w-[507px] sm:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start left-[0] rounded-[229px] top-[0] w-[91%]"
                      style={{
                        backgroundImage: "url('images/img_figure.png')",
                      }}
                    >
                      <Img
                        className="h-[480px] md:h-auto object-cover rounded-[229px] w-full"
                        src="images/img_oschmannjpg.png"
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
                  <div className="flex flex-1 flex-col gap-10 h-[756px] md:h-auto items-start justify-start max-w-[967px] w-full">
                    <div className="flex flex-col gap-10 h-[475px] md:h-auto items-start justify-start max-w-[967px] w-full">
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
                        className="leading-[149.00%] max-w-[967px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px]"
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
                    <Line className="bg-black-900_33 h-px w-full" />
                    <div className="flex flex-col items-center justify-between w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_72 tracking-[0.36px] w-auto"
                        size="txtQuestrialRegular36Black90072"
                      >
                        01
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-deep_purple-A100 bottom-[4%] flex flex-col h-[72px] md:h-auto items-center justify-start sm:px-5 px-8 py-6 right-[0] rounded-[36px] w-[152px]">
            <Img
              className="h-6 w-[88px]"
              src="images/img_user_black_900.svg"
              alt="user"
            />
          </div>
        </div>
        <footer className="flex items-center justify-center mt-0.5 md:px-5 w-full">
          <div className="bg-black-900 flex flex-col md:h-auto pb-[50px] pt-[100px] md:px-10 sm:px-5 px-[163px] relative w-[1773px] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[355px] h-[285px] md:h-auto items-start justify-between mt-auto mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-auto">
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
              <Img className="h-5 w-[121px]" src="images/img_ul.svg" alt="ul" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopFour1Page;
