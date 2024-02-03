import React from "react";

import { Img, Text } from "components";

const DesktopThreeColumnellipse712 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[2899px] md:h-[2919px] relative w-full">
          <div className="absolute h-[2919px] inset-[0] justify-center m-auto w-full">
            <div className="h-[2919px] m-auto w-full">
              <Img
                className="absolute h-[2919px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_ellipse712_2919x1773.png"
                alt="ellipse712"
              />
              <div className="absolute h-[1584px] inset-[0] justify-center m-auto w-[82%] md:w-full">
                <div className="absolute bg-deep_purple-50 h-[1584px] inset-[0] justify-center m-auto rounded-[792px] w-full"></div>
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <Img
                    className="h-[1324px] md:h-auto object-cover rounded-bl-[792px] rounded-br-[792px] w-full"
                    src="images/img_image123_1324x1444.png"
                    alt="image123"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[7%] flex flex-col gap-[26px] justify-start right-[0] w-[6%]">
              <div className="bg-deep_purple-A200 h-12 mr-[53px] rounded-[10px] w-[45%]"></div>
              <div className="h-14 md:ml-[0] ml-[94px] w-[5%]"></div>
            </div>
            <div className="absolute flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[47px] pt-[47px] right-[0] top-[7%] w-[6%]">
              <div className="bg-deep_purple-A200 h-12 mt-[17px] rounded-[10px] w-[98%]"></div>
            </div>
            <Text
              className="absolute bottom-[20%] leading-[113.00%] left-[9%] md:text-5xl text-[64px] text-black-900 w-[42%] sm:w-full"
              size="txtQuestrialRegular64"
            >
              {props?.disordertext}
            </Text>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-[35px] justify-end left-[2%] w-[24%]">
            <div className="bg-deep_purple-A200 h-12 md:ml-[0] ml-[366px] rounded-[10px] w-[11%]"></div>
            <div className="flex flex-col items-start justify-start mr-[155px] p-2.5 w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl tracking-[0.24px] w-auto"
                size="txtQuestrialRegular24"
              >
                {props?.managementtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopThreeColumnellipse712.defaultProps = {
  disordertext: "Bipolar Disorder",
  managementtext: "Conflict Management",
};

export default DesktopThreeColumnellipse712;
