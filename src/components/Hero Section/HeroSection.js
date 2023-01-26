import { Button, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

function HeroSection() {
    const onFrameButtonClick = useCallback(() => {
        const anchor = document.querySelector(
            "[data-scroll-to='popularProductsContainer']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, []);

    return (
        <Stack
            position="absolute"
            top="150px"
            left="64px"
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            gap="var(--gap-3xl)"
            fontSize="var(--font-size-18xl)"
        >
            <Stack
                alignItems="flex-start"
                justifyContent="flex-start"
                gap="var(--gap-4xl)"
            >
                <Stack
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    gap="var(--gap-md)"
                >
                    <Typography component="h4" variant="body" width="759px">
                        Empowering People to Improve Their Lives
                    </Typography>
                    <Typography
                        component="p"
                        variant="div"
                        fontSize="var(--font-size-6xs)"
                        lineHeight="30px"
                        width="656px"
                    >
                        Lorem Media is a full-service social media agency. We
                        offer businesses innovative solutions that deliver the
                        right type of audience to you in the most effective
                        strategies possible.
                    </Typography>
                </Stack>
                <Stack
                    cursor="pointer"
                    padding="var(--padding-8xs) var(--padding-2xs)"
                    backgroundColor="var(--color-indigo)"
                    borderRadius="var(--br-5xs)"
                    direction="row"
                    boxSizing="border-box"
                    alignItems="center"
                    justifyContent="center"
                    gap="var(--gap-5xs)"
                    onClick={onFrameButtonClick}
                >
                    <ColorButton>Browse More</ColorButton>
                    <img
                        className="arrow-right-1-icon9"
                        style={{
                            cursor: "pointer",
                            position: "relative",
                            width: "31.32px",
                            height: "31.32px",
                            flexShrink: 0,
                            overflow: "hidden",
                        }}
                        alt=""
                        src="../assets/arrowright-12.svg"
                    />
                </Stack>
            </Stack>
            <img
                className="doctorscuate-icon1"
                alt=""
                src="../assets/doctorscuate1.svg"
                style={{
                    position: "relative",
                    width: "509.87px",
                    height: "514.1px",
                    flexShrink: 0,
                }}
            />
        </Stack>
    );
}

export default HeroSection;

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[900]),
    backgroundColor: "transparent",
    fontSize: "var(--font-size-6xs)",
}));
