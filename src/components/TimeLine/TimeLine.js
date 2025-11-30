import React from "react";

import {
  TimelineCard,
  TimelineText,
  TimelineYear,
  TimelineWrapper,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I love a challenge, so problem solving and learning while building a
      project really peaks my interest as a software developer. Enrolling, and
      graduating from General Assembly NYC in 2017 has greatly improved my
      skills as a Full-Stack Developer. I was able to create real world
      applications using different programming languages.
    </SectionText>
    <TimelineWrapper>
      {TimeLineData.map((item) => (
        <TimelineCard key={item.year}>
          <TimelineYear>{item.year}</TimelineYear>
          <TimelineText>{item.text}</TimelineText>
        </TimelineCard>
      ))}
    </TimelineWrapper>
    <SectionDivider />
  </Section>
);

export default Timeline;
