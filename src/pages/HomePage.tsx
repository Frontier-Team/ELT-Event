import React from "react";
import styled from "@emotion/styled";
import HeroComponent from "../components/HeroComponent";
import { Paragraph } from "../styles/sharedStyles";

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <HeroComponent></HeroComponent>
      <Content>
        <Section>
          <Subtitle>
            Thank you for joining us in Edinburgh! The Waterfront platform are
            thrilled to have you here and extend a warm welcome to all of you.
          </Subtitle>
        </Section>
        <Section>
          <Subtitle>What you can expect of the day?</Subtitle>
          <Paragraph>
            First of all, the day is retro games themed, so although we want you
            to get a lot out of the day we also want you to have fun. You can
            even let our your competitive side with our three retro game
            machines - feel free to make the most of then during lunch and
            breaks!
          </Paragraph>
          <Paragraph>
            Arrival and registration will be in the Canongate room, but we'll
            kick of the agenda in St Giles with a welcome from Derek Shanks, our
            TPL in Waterfront. He'll then pass over the Nick Grant and Rose
            Ulldemolins who will be your hosts for the day - 80's attire and
            all! We have a whole host of presenters, details of which you can
            find in the 'Agenda' tab.
          </Paragraph>
          <Paragraph>
            Later in the afternoon we'll be hosting the first ever expo at an
            ELT event. You'll get a chance to hear from 8 different teams across
            Waterfront with interactive demo's for you to get involved in.
            Again, more details for these can be found on the 'Expo' tab.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Raddison Blu Wi-Fi</Subtitle>
          <Paragraph>
            Please connect to the Wi-Fi network using the credentials below.
            <br></br>
            <strong>Network Name: </strong>Q3 CIO ELT
            <br></br>
            <strong>Password: </strong>W@terfron7
          </Paragraph>
        </Section>
        <Footer>
          <FooterContent>
            <Paragraph>
              If you need to make any adjustments or have any specific requests,
              please contact us at:{" "}
              <a href="mailto:IPIEvents@lloydsbanking.com">
                IPIEvents@lloydsbanking.com
              </a>
            </Paragraph>
          </FooterContent>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;
  }

  p {
    line-height: 1.8;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 2rem;
  text-align: left;
  margin-top: 2rem;
`;

const Section = styled.div``;

const Subtitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const Footer = styled.div`
  display: flex;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  margin-top: 1rem;
`;

const FooterContent = styled.div`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
