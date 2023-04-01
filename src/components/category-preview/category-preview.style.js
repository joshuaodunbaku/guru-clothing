import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPrevContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLink = styled(Link, CategoryPrevContainer)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
// .category - preview - container {

//   .title {
//   }

//   .preview {
//   }
// }
