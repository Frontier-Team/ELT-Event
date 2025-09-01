import { Table } from "../components/Table";
import data from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";
import { Event } from "../types";

export const TalkAgendaPage = () => {
  const headers = ["Time", "Location", "Topic", "Presenter"];

  const fieldsToDisplay: (keyof Event)[] = [
    "time",
    "location",
    "topic",
    "speakers",
  ];

  return (
    <PageContainer>
      <Heading>Agenda</Heading>
      <CenteredParagraph>
        All talks on the day will be held in St Giles where as the expo will be
        held in Dundedin.
      </CenteredParagraph>

      <Table
        heading=""
        headers={headers}
        rows={data.talks}
        fieldsToDisplay={fieldsToDisplay}
      />
    </PageContainer>
  );
};
