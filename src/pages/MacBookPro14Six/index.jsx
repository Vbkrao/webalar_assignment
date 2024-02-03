import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer11 from "components/Footer11";

const MacBookPro14SixPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial justify-end mx-auto pt-10 w-full">
        <div className="flex flex-col items-center px-[15px] w-full">
          <header className="border-b border-gray-200 border-solid flex md:flex-col gap-2.5 h-[146px] md:h-auto items-center justify-center md:px-5 px-[163px] py-[50px] shadow-bs w-full">
            <div className="bg-blue_gray-100 h-[52px] w-[4%]"></div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[680px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
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
        </div>
        <div className="flex flex-col items-end mt-[33px] md:px-10 sm:px-5 px-[233px] w-full">
          <Text
            className="md:text-5xl text-7xl text-black-900 w-[94%] sm:w-full"
            size="txtQuestrialRegular72"
          >
            Our Clients and Their Positive Experiences with Our Psychology
            Consultation Services
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[142px] items-center mt-[72px] w-full">
          <div className="bg-deep_purple-50 flex flex-col items-start justify-start max-w-[1343px] mx-auto md:px-5 px-[119px] py-[150px] rounded-[27px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="md:h-[480px] h-[507px] relative w-[507px] sm:w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start left-[0] rounded-[229px] top-[0] w-[91%]"
                  style={{ backgroundImage: "url('images/img_figure.png')" }}
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
              <div className="h-[501px] md:h-[509px] relative w-[46%] md:w-full">
                <div className="absolute flex flex-col gap-10 md:h-auto h-max inset-[0] justify-start m-auto w-[498px] sm:w-full">
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
                        anxiety and self-doubt for years, I was hesitant to try
                        therapy again. But from the very first session, my
                        consultant made me feel heard and understood. She worked
                        with me to identify the root causes of my anxiety and
                        gave me concrete tools to manage it.
                      </>
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 h-[35px] md:h-auto items-start justify-start sm:px-5 px-8 py-6 rounded-[17px] w-[83px]">
                    <Img
                      className="h-2"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Img
                      className="h-2"
                      src="images/img_arrowleft_black_900.svg"
                      alt="arrowleft_One"
                    />
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
          <Footer11 className="bg-black-900 flex gap-[100px] h-[402px] md:h-auto items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[163px] w-full" />
        </div>
      </div>
    </>
  );
};

export default MacBookPro14SixPage;
