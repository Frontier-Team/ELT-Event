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
          <Title>Welcome to the CIO IP&amp;I Q3 ELT Event</Title>
          <Subtitle>
            Thank you for joining us in Edinburgh! The Waterfront platform are
            thrilled to have you here and extend a warm welcome to all of you.
          </Subtitle>
        </Section>
        <Section>
          <Subtitle>What you can expect of the day?</Subtitle>
          <Paragraph>
            First of all, the day is 8-bit gamed themed, so although we want you
            to get a lot our of the day we also want you to have fun. There's XX
            games machines in the XX area - please do play them whenever you get
            a chance.
          </Paragraph>
          <Paragraph>
            We'll start in the day in XX room, which will be a welcome from
            Derek Shanks, our TPL in Waterfront. He'll then pass over the Nick
            Grant and Rose Ulldemolins who will be your hosts for the day - 80's
            atire and all! We have a whole host of presenters, details of which
            you can find in the 'Agenda' tab.
          </Paragraph>
          <Paragraph>
            Later in the afternoon we'll be hosting the first ever expo at an
            ELT event. You'll get a chance to hear from 8 different teams across
            waterfront with interactive demo's for you to get involved in.
            Again, more details for these can be found on the 'Expo' tab.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>Raddison Blu Wi-Fi</Subtitle>
          <Paragraph>
            Please connect to the Wi-Fi network using the credentials below.
            <br></br>
            <strong>Network Name: </strong>XX
            <br></br>
            <strong>Password: </strong>XX
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

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 5rem;
`;

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
