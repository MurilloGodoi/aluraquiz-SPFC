import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 340px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
   
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <title>SPFC QUIZ</title>
            <h1>Quiz do São Paulo FC</h1>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta property="og:title" content="SPFC Quiz" key="title" />
            <meta property="og:image" content="https://wallpaperaccess.com/full/1949839.jpg"/>
          </Widget.Header>
          <Widget.Content>
            <p>Entre no Quiz!</p>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Entre no Quiz!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/MurilloGodoi" />
    </QuizBackground>
  );
}