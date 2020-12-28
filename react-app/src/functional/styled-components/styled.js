import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ButtonDefault = styled.button`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  margin: 10px auto;
  margin-top: 15px;
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonReset = styled(ButtonDefault)`
  background-image: linear-gradient(#ffffff, #d5d5d5);
  border: 1px solid #d5d5d5;

  &:hover {
    background-image: linear-gradient(#ffffff, #d5d5d5);
    &[disabled] {
      background-image: linear-gradient(#ffffff, #d5d5d5);
    }
  }
  color: #555;
`;

export const ButtonSubmit = styled(ButtonDefault)`
  background-image: linear-gradient(#4f93ce, #285f8f);
  border: 1px solid #285f8f;
  &:hover {
    background-image: linear-gradient(#4f93ce, #285f8f);
    &[disabled] {
      background-image: linear-gradient(#4f93ce, #285f8f);
    }
  }
  color: white;
`;

export const ShowValues = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export default styled.div`
  font-family: sans-serif;
  .radio {
    text-align: left;
  }
  & > div {
    text-align: center;
  }

  .form {
    max-width: 800px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 150px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
  }
`;

const rotate = keyframes`
from {
  transform: rotateX(0deg);
}
to {
  transform: rotateX(360deg);
}
`;

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
