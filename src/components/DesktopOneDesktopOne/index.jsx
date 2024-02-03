import React from "react";

import { Img, List, Text } from "components";

const DesktopOneDesktopOne = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="black_900_00_deep_purple_A100_02_border border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
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
              {props?.textqualitytherapy}
            </Text>
            <Text
              className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
              size="txtQuestrialRegular20Black90072_1"
            >
              {props?.texttimezone}
            </Text>
          </div>
        </div>
        <div className="black_900_00_deep_purple_A100_02_border2 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
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
              {props?.textcoupletherapy}
            </Text>
            <Text
              className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
              size="txtQuestrialRegular20Black90072_1"
            >
              {props?.textontheotherhand}
            </Text>
          </div>
        </div>
        <div className="black_900_00_deep_purple_A100_02_border3 border border-solid flex flex-col gap-[50px] items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-[511px] sm:w-full">
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
              {props?.textgrouptherapy}
            </Text>
            <Text
              className="leading-[180.00%] max-w-[451px] md:max-w-full text-black-900_72 text-xl tracking-[-0.40px]"
              size="txtQuestrialRegular20Black90072_1"
            >
              {props?.textthesecasesare}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

DesktopOneDesktopOne.defaultProps = {
  textqualitytherapy: "Quality Theraphy",
  texttimezone:
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis",
  textcoupletherapy: "Couple Therapy",
  textontheotherhand:
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
  textgrouptherapy: "Group Theraphy",
  textthesecasesare: "These cases are perfectly simple and easy to distinguish",
};

export default DesktopOneDesktopOne;
