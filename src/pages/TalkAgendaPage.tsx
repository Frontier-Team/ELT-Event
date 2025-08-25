import { Table } from "../components/Table";
import data from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";
import { Event } from "../types";

export const TalkAgendaPage = () => {
  const headers = ["Topic", "Time", "Presenter"];

  const fieldsToDisplay: (keyof Event)[] = ["topic", "time", "speakers"];

  return (
    <PageContainer>
      <Heading>Agenda</Heading>
      <CenteredParagraph>
        All talks on the day will be held in the XX room where as the expo will
        be across XX and XX area
      </CenteredParagraph>

      <Table
        heading="XX"
        headers={headers}
        rows={data.talks}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={["topic"]}
      />
    </PageContainer>
  );
};
