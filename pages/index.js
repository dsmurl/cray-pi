import styled from "styled-components";
import { useDataContext } from "../components/data-sheet/data-provider";
import DataSheet from "../components/data-sheet/data-sheet";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
  return (
    <div>
      <Title>Simple Spreadsheet Page</Title>
      <DataSheet />
    </div>
  );
}
