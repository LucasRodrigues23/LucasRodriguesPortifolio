import { styled } from "@/styles/stitches.config"


export const AboutImgBox = styled("div", {
    width: "40%",
    marginTop: "$3",
    "@mobile": {
        display: "none",
    },
});
export const AboutTextBox = styled("div", {
    width: "40%",
    "@mobile": {
        width: "100%",
    },
});


export const AboutImg = styled("img", {
    maxWidth: "100%",
    maxHeight: "500px",
});