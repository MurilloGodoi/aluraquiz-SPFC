import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer'
import Link from '../src/components/Link';
import { motion } from 'framer-motion';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>SPFC QUIZ</title>
        <link rel="shortcut icon" type="image/png" href="https://i.pinimg.com/originals/e3/eb/5f/e3eb5f568f58a7ec1c87320b34f2f27b.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="SPFC Quiz" key="title" />
        <meta property="og:image" content="https://wallpaperaccess.com/full/1949839.jpg" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget as={motion.section}
        transition={{ duration: 2}}
        variants={{
          show: {opacity:1},
          hidden: {opacity:0}
        }}
        initial="hidden"
        animate="show"
        >
          <Widget.Header>
            <h1>Quiz do São Paulo FC</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log("Fazendo uma submissão por meio do formulario");
            }

            }>
              <Input
                name="Nome do Usuário"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>JOGAR</Button>
            </form>

          </Widget.Content>
        </Widget>

        <Widget as={motion.section}
        variants={{
          show: {opacity:1},
          hidden: {opacity:0}
        }}
        transition={{ duration: 5}}
        initial="hidden"
        animate="show">
          
        </Widget>
        <Footer as={motion.section}
        variants={{
          show: {opacity:1},
          hidden: {opacity:0}
        }}
        transition={{ duration: 3}}
        initial="hidden"
        animate="show"/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/MurilloGodoi" />
    </QuizBackground>
  );
}


