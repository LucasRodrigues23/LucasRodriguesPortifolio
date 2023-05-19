import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";
import backgroundImg from "@/public/static/img/background/new-bg.svg";

export const Footer = styled("footer", {
  backgroundColor: "$grey1",
  padding: "7rem 0",
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});
