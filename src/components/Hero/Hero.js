import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Full-Stack Developer adept at building scalable solutions to challenging
        technical problems utilizing a user-centered approach.
      </SectionText>
      <Button onClick={() => (window.location = "http://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
