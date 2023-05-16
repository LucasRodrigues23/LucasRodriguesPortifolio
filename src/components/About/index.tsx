import { Box, Flex } from '@/styles/Global'
import { Text } from "@/styles/Text";
import myPicture from "@/public/static/img/background/me.jpg";
import { AboutImg, AboutImgBox, AboutTextBox } from './style';

export const About = () => {
    return (
        <div>
            <Box>
                <Flex>
                    <AboutImgBox>
                        <AboutImg src={myPicture} alt="my picture" />
                    </AboutImgBox>
                    <AboutTextBox>
                        <Text as="p" type="body1" color="grey2">
                            Olá, meu nome é Lucas e tenho 34 anos. Sou uma pessoa calma, determinada e apaixonada por desafios. Com experiência em diferentes setores, incluindo eventos, comunicação e indústria, sempre busco novos desafios e oportunidades para crescer profissionalmente. Ao longo dos anos, desenvolvi habilidades valiosas em liderança, trabalho em equipe e comunicação, que me permitem entregar resultados de alta qualidade em qualquer projeto que eu participe. Estou ansioso para continuar explorando novas áreas e expandindo minhas habilidades em futuros projetos. Obrigado por visitar meu portfólio.
                        </Text>
                    </AboutTextBox>
                </Flex>

            </Box>
        </div>
    )
}
