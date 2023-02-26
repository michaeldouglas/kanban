import styled from "styled-components";

const ErrorMessageWrapper = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #721c24;
  border-radius: 4px;
  padding: 0.2rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

const ErrorMessage = ({ children }) => (
  <ErrorMessageWrapper>
    {children}
  </ErrorMessageWrapper>
);

export default ErrorMessage;
