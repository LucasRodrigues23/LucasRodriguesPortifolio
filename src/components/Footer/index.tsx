import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai"
import { Button } from "@/styles/Buttons";
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Valeu! {/* <HandEffect /> */}
            </Text>
            <Text type="body1" color="grey2">
              Siga-me nas redes sociais
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          <Button
            className="instagram"
            type="circle"
            as="a"
            target="_blank"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            <FaInstagram />
          </Button>
          <Button
            className="linkedin"
            type="circle"
            as="a"
            target="_blank"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
          <Button
            className="back"
            type="circle"
            as="a"
            href={`#header`}
          >
            <AiOutlineArrowUp />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
