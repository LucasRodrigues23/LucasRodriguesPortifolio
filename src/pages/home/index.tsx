// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutArea,
} from "./style";
import { About } from "@/components/About";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/LucasRodrigues23Portifoliov2`;

  return (
    <main id="home">
      <Header id='header'>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"96px"}
                height={"96px"}
              />
              <Text as="h2" type="heading2" color="grey4">
                Ola, eu sou{" "}
                <Text as="span" type="heading2" color="brand1">
                  {userData.nameUser}
                </Text>{" "}
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Desenvolvedor{" "}
              <Text as="span" type="heading1" color="brand1">
                FullStack
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              Este espaço foi feito para você me conhecer melhor,
              navegue e descubra as tecnologias que utilizo e os projetos que desenvolvi
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Código deste projeto
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutArea id="about">
        <Container>
          <Text as="h2" type="heading2" color="grey4">
            Sobre mim
          </Text>
          <About />
        </Container>
      </AboutArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns projetos que desenvolvi
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
