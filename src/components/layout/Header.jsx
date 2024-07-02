import React from "react";
import SplitDualLayout from "./SplitDualLayout";
import SayHi from "../SayHi";
import HeroImage from "../HeroImage";

const Header = () => {
  return (
    <div
      id="hero"
      className="container py-16 flex items-center mx-auto  overflow-hidden capitalize"
    >
      <SplitDualLayout>
        <SayHi />

        <HeroImage />
      </SplitDualLayout>
    </div>
  );
};

export default Header;
