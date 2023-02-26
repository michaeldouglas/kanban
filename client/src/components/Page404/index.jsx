import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: normal;
  color: #666;
  margin-bottom: 4rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #333;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;


const Page404 = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Ops! Parece que esta página não existe.</Subtitle>
      <Button href="/">Voltar para a página inicial</Button>
    </Wrapper>
  )
}

export default Page404
