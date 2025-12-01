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
      I’m a full-stack software engineer who thrives on challenge, creativity,
      and continuous improvement. What excites me most about engineering is the
      opportunity to solve real problems—building something meaningful from the
      ground up, learning new concepts along the way, and architecting solutions
      that make an impact. <br />
      My journey began at General Assembly NYC, where I graduated from the
      Software Engineering Immersive program in 2017. That experience reshaped
      the way I approach technology and opened the door to building real-world
      applications using modern languages, frameworks, and engineering best
      practices. <br />
      I launched my professional career at SHI International (2018–2021),
      supporting enterprise initiatives and developing software solutions that
      improved internal processes and enhanced customer-facing services. From
      there, I joined Dub (2021–2022), a financial copy-trading startup, where I
      worked as a full-stack engineer helping bring an innovative real-time
      investment platform to life. <br />
      Today, I’m a Full-Stack Software Engineer at Accenture (2022–Present),
      where I build scalable, high-performance applications for major enterprise
      clients. I’m deeply involved in system architecture, cloud-based
      development, collaborative engineering with cross-functional teams, and
      delivering production-ready solutions built for reliability, growth, and
      performance. <br />
      Outside of work, I’m passionate about exploring new technologies, tackling
      complex problems, and continuously sharpening my craft through hands-on
      projects. I believe that great engineering blends curiosity, discipline,
      and creativity—and I’m always excited to create the next thing that pushes
      the boundaries of what’s possible.
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
