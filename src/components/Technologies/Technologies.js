import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiAmazonaws, SiFigma, SiJest, SiNodedotjs } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  HighlightRow,
  HighlightBadge,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've had the pleasure and opportunity to work with a variety of
      technologies, ranging from the Back-End, Front-End, and even Design
      aspects.
    </SectionText>
    <HighlightRow>
      <HighlightBadge>Performance: Lighthouse 90+ targets</HighlightBadge>
      <HighlightBadge>Accessibility: WCAG AA patterns baked in</HighlightBadge>
      <HighlightBadge>Observability: logs, metrics, traces</HighlightBadge>
      <HighlightBadge>Delivery: CI/CD + feature flags</HighlightBadge>
    </HighlightRow>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React & Next.js (ISR/SSG) with TypeScript <br />
            Styled Components, Tailwind, accessibility & perf audits
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNodedotjs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End & APIs</ListTitle>
          <ListParagraph>
            Node.js/Express & serverless handlers <br />
            C#/.NET microservices when needed <br />
            REST + GraphQL with Postgres, MongoDB, Prisma/ORMs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAmazonaws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            AWS (Lambda, S3, CloudFront), GCP basics & Docker <br />
            Containers with Compose/Kubernetes when scale requires it <br />
            CI/CD with GitHub Actions, Netlify/Vercel, feature flags
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Realtime & Auth</ListTitle>
          <ListParagraph>
            Firebase & Supabase (Auth, Firestore/Postgres) <br />
            OAuth/OIDC, JWT sessions, WebSockets & queues
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJest size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Jest, React Testing Library, Cypress E2E <br />
            Contract tests plus story-driven visual regression
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UX & Systems</ListTitle>
          <ListParagraph>
            Figma, Storybook & tokens for design ops <br />
            Reusable component libraries & micro-interactions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
