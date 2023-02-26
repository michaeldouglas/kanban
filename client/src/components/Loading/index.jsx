import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00a8ff;
  animation: ${pulsate} 1s ease-in-out infinite;
`;

const Text = styled.span`
  font-size: 24px;
  color: #00a8ff;
  margin-left: 16px;
`;

const Loading = ({ text }) => {
  return (
    <Wrapper>
      <LoadingSpinner />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Loading;
