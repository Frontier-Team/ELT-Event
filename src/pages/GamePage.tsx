import React from 'react';
import { Game } from '../components/Game';
import { CenteredParagraph, Heading, PageContainer } from '../styles/sharedStyles';

export const GamePage: React.FC = () => {
  return (
    <PageContainer>
      <Heading>XX - Voting</Heading>
      <CenteredParagraph>XX - Tap the screen to move to a location. Tap again to speak to a person. The postbox to send your vote will become available when you have read every idea.  </CenteredParagraph>
      <Game />
    </PageContainer>
  );
};
