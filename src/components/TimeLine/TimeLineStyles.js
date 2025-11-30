import styled from "styled-components";

export const TimelineWrapper = styled.div`
  position: relative;
  margin-top: clamp(24px, 5vw, 40px);
  padding: 0 clamp(12px, 4vw, 32px) clamp(20px, 5vw, 36px);
  overflow-x: auto;
  display: flex;
  gap: clamp(16px, 4vw, 32px);
  scroll-snap-type: x proximity;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: clamp(12px, 4vw, 32px);
    right: clamp(12px, 4vw, 32px);
    bottom: clamp(6px, 2vw, 14px);
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(148, 93, 214, 0.55) 0%,
      rgba(19, 173, 199, 0.6) 52%,
      rgba(244, 103, 55, 0.55) 100%
    );
    pointer-events: none;
  }
`;

export const TimelineCard = styled.article`
  position: relative;
  min-width: clamp(180px, 24vw, 260px);
  padding: clamp(18px, 3vw, 28px);
  background: rgba(15, 22, 36, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  box-shadow: 0 18px 36px rgba(11, 18, 31, 0.42);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vw, 14px);
  transition: transform 0.3s ease, border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    border-color: rgba(148, 93, 214, 0.45);
    box-shadow: 0 22px 42px rgba(148, 93, 214, 0.28);
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(-1 * clamp(6px, 2vw, 14px));
    width: clamp(12px, 2vw, 16px);
    height: clamp(12px, 2vw, 16px);
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(135deg, #13adc7 0%, #945dd6 58%, #f46737 100%);
    box-shadow: 0 0 0 6px rgba(148, 93, 214, 0.2);
  }
`;

export const TimelineYear = styled.h4`
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary1};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const TimelineText = styled.p`
  margin: 0;
  font-size: clamp(1.3rem, 1.7vw, 1.5rem);
  line-height: clamp(2rem, 2.8vw, 2.4rem);
  color: rgba(255, 255, 255, 0.78);
`;
