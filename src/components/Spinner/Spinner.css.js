import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Spinner = styled.div`
  border: 5px solid #eee;
  border-top: 5px inset #333;
  border-radius: 50%;
  padding: 20px;
  width: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
