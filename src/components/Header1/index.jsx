import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
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
                <div className="flex flex-row gap-2.5 items-center justify-start">
                  <div className="bg-deep_purple-A100 h-1.5 rounded-[50%] w-1.5"></div>
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtQuestrialRegular20"
                  >
                    Home
                  </Text>
                </div>
              </li>
              <li>
                <Text
                  className="hover:text-black-900 text-black-900_72 text-xl"
                  size="txtQuestrialRegular20Black90072"
                >
                  Science
                </Text>
              </li>
              <li>
                <Text
                  className="hover:text-black-900 text-black-900_72 text-xl"
                  size="txtQuestrialRegular20Black90072"
                >
                  Platform
                </Text>
              </li>
              <li>
                <Text
                  className="hover:text-black-900 text-black-900_72 text-xl"
                  size="txtQuestrialRegular20Black90072"
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="hover:text-black-900 text-black-900_72 text-xl"
                  size="txtQuestrialRegular20Black90072"
                >
                  News
                </Text>
              </li>
            </ul>
            <Button
              className="cursor-pointer font-questrial leading-[normal] min-w-[141px] rounded-[25px] text-center text-lg"
              color="deep_purple_A100"
              size="sm"
              variant="fill"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
