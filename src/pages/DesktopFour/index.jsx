import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial sm:gap-10 md:gap-10 gap-[440px] items-end justify-end mx-auto pt-[11px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="sm:h-[1351px] h-[1385px] md:h-[1501px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[70px] h-[1244px] md:h-auto inset-x-[0] items-center justify-start max-w-[1766px] mx-auto w-full">
              <Text
                className="max-w-[1719px] md:max-w-full md:text-5xl text-7xl text-black-900"
                size="txtQuestrialRegular72"
              >
                Our Clients and Their Positive Experiences with Our Psychology
                Consultation Services
              </Text>
              <div className="bg-deep_purple-50 flex flex-col h-[1004px] md:h-auto items-start justify-start max-w-[1753px] pb-[150px] pt-[133px] md:px-10 sm:px-5 px-[119px] rounded-[27px] w-full">
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
                            try therapy again. But from the very first session,
                            my consultant made me feel heard and understood. She
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
                  <div className="bg-deep_purple-A100 flex flex-col items-start justify-start sm:px-5 px-8 py-6 rounded-[36px] w-auto">
                    <Img
                      className="h-6 w-[88px]"
                      src="images/img_user_black_900.svg"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-b border-gray-200 border-solid flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[163px] py-[50px] top-[0] w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[680px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="bg-deep_purple-A100 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtQuestrialRegular20"
                      >
                        Home
                      </Text>
                    </div>
                    <Text
                      className="text-black-900_72 text-xl w-auto"
                      size="txtQuestrialRegular20Black90072"
                    >
                      Science
                    </Text>
                    <Text
                      className="text-black-900_72 text-xl w-auto"
                      size="txtQuestrialRegular20Black90072"
                    >
                      Platform
                    </Text>
                    <Text
                      className="text-black-900_72 text-xl w-auto"
                      size="txtQuestrialRegular20Black90072"
                    >
                      About Us
                    </Text>
                    <Text
                      className="text-black-900_72 text-xl w-auto"
                      size="txtQuestrialRegular20Black90072"
                    >
                      News
                    </Text>
                  </div>
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 w-[422px] sm:w-full">
          <div className="bg-black-900 flex flex-col h-[437px] md:h-auto items-start justify-start pb-[50px] pt-[100px] md:px-10 sm:px-5 px-[163px] w-[422px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
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
            </div>
            <div className="flex flex-col items-center justify-between w-full">
              <Text
                className="text-base text-white-A700 tracking-[0.48px] w-auto"
                size="txtQuestrialRegular16WhiteA700"
              >
                © 2023 Psychology and Counseling. All Rights Reserved. With
                love by Elmous
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
