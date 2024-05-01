import React from "react";
import SplitDualLayout from "./SplitDualLayout";
import SayHi from "../SayHi";
import HeroImage from "../HeroImage";

const Header = () => {
  return (
    <div className="container min-h-screen flex items-center mx-auto py-16 overflow-hidden capitalize">
      <SplitDualLayout>
        <SayHi />

        <HeroImage />
      </SplitDualLayout>
    </div>
  );
};

export default Header;
