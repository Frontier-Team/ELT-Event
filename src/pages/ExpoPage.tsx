import { Table } from "../components/Table";
import data from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";
import { Expo } from "../types";

export const ExpoPage = () => {
  const headers = ["Name", "Description"];

  const fieldsToDisplay: (keyof Expo)[] = ["name", "description"];

  return (
    <PageContainer>
      <Heading>Expo</Heading>
      <CenteredParagraph>XX</CenteredParagraph>

      <Table
        headers={headers}
        rows={data.expos}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={["description"]}
      />
    </PageContainer>
  );
};
