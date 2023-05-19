import { styled } from "@/styles/stitches.config"

export const AboutFlex = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
})

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
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    objectFit: "cover",
});