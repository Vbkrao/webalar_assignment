import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const DesktopSixPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-questrial items-start justify-end mx-auto pt-3 w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex md:flex-col gap-2.5 items-center justify-center md:px-5 px-[163px] py-[50px] w-full">
            <div className="border-b border-gray-200 border-solid h-[151px] w-full"></div>
            <List
              className="border border-dashed border-deep_purple-A200_01 flex flex-1 flex-col gap-5 items-center pt-5 px-5 rounded-[5px] w-full"
              orientation="vertical"
            >
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
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[680px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Img
                    className="h-10 w-[50px]"
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
                  <ul className="flex sm:flex-col flex-row gap-[50px] items-start justify-start w-auto sm:w-full">
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
                        className="text-black-900_72 text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black90072">
                          Science
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_72 text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black90072">
                          Platform
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_72 text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black90072">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-black-900_72 text-xl"
                      >
                        <Text size="txtQuestrialRegular20Black90072">News</Text>
                      </a>
                    </li>
                  </ul>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[141px] rounded-[20px] text-center text-lg"
                    color="deep_purple_A100"
                    size="xs"
                    variant="fill"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </List>
          </header>
        </div>
        <div className="flex flex-col gap-10 h-[899px] md:h-auto items-start justify-start max-w-[1166px] md:ml-[0] ml-[17px] mt-[65px] md:px-5 w-full">
          <div className="flex flex-col gap-[30px] h-[238px] md:h-auto items-start justify-start max-w-[1166px] w-full">
            <Text
              className="max-w-[1166px] md:max-w-full md:text-5xl text-7xl text-black-900"
              size="txtQuestrialRegular72"
            >
              Patient Are Happy For Proper Mental Cure Support
            </Text>
            <Text
              className="leading-[180.00%] max-w-[834px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
              size="txtQuestrialRegular20Black90072_1"
            >
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus
            </Text>
          </div>
          <div className="flex flex-col gap-[30px] h-[621px] md:h-auto items-start justify-start max-w-[949px] w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start max-w-[949px] w-full">
              <div className="gap-8 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[948px] min-h-[auto] w-full">
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
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
                    name="groupSeventy"
                    placeholder="aryademian@email"
                    className="p-0 placeholder:text-black-900_72 text-base text-left tracking-[0.48px] w-full"
                    wrapClassName="border border-black-900 border-solid mb-[undefinedpx] mt-auto mx-auto w-full z-[1]"
                  ></Input>
                </div>
                <div className="h-[103px] relative w-full">
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
                <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-center mb-[-22.61px] ml-[23px] px-2.5 py-[5px] w-auto z-[1]">
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
              className="cursor-pointer leading-[normal] min-w-[215px] text-center text-lg"
              shape="round"
              color="deep_purple_A100"
              size="md"
              variant="fill"
            >
              Send Consultation
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[23px] items-center mt-5 w-full">
          <div className="bg-deep_purple-A100 flex flex-col items-start justify-start md:px-5 px-8 py-6 rounded-[36px] w-auto">
            <Img
              className="h-6 w-[88px]"
              src="images/img_user_black_900.svg"
              alt="user"
            />
          </div>
          <Footer className="flex gap-2.5 h-[437px] md:h-auto items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopSixPage;
