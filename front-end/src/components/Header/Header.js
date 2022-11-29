import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../LoginPopup";
import RegisterPopup from "../RegisterPopup";
import { Button, Stack, Typography } from "@mui/material";

function Header() {
    const navigate = useNavigate();
    // const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const onCONSULTATIONSTextClick = useCallback(() => {
        navigate("/for-not-logged-in-user-book-appointment");
    }, [navigate]);

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const LoginDialog = ({ open, setLoginOpen, setSignupOpen }) => {
        const switchSignup = (event) => {
            setLoginOpen(false);
            setSignupOpen(true);
        };

        return (
            <LoginPopup label={label} open={open} switching={switchSignup} />
        );
    };

    const SignupDialog = ({ open, setLoginOpen, setSignupOpen }) => {
        const switchLogin = (event) => {
            setSignupOpen(false);
            setLoginOpen(true);
        };

        return (
            <RegisterPopup label={label} open={open} switching={switchLogin} />
        );
    };

    const handleLogin = (event) => {
        setLoginOpen(true);
    };

    // const handleSignup = (event) => {
    //     setSignupOpen(true);
    // };

    return (
        <Stack
            position="fixed"
            top="0"
            left="0"
            boxShadow="0 8px 44px rgba(0, 0, 0, 0.15)"
            width="100vw"
            height="6rem"
            fontSize="18px"
            color="var(--color-gray-700)"
            fontFamily="var(--font-montserrat)"
            zIndex="1"
        >
            <Stack
                position="absolute"
                height="100%"
                width="100%"
                top="0"
                right="0"
                bottom="0"
                left="0"
                backgroundColor="var(--color-gray-400)"
            />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                paddingX="42px"
                paddingY="15px"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    gap="var(--gap-7xl)"
                >
                    <img
                        className="group-icon7"
                        alt=""
                        src="../assets/group-99496.svg"
                        width={"55px"}
                        height={"55px"}
                        style={{ position: "relative" }}
                    />
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap="30px"
                    >
                        <Stack alignItems="center" justifyContent="flex-start">
                            <Typography
                                component="div"
                                variant="div"
                                sx={{
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    position: "relative",
                                    textTransform: "uppercase",
                                }}
                            >
                                Home
                            </Typography>
                            <Stack
                                borderTop="4px solid var(--color-violet-200)"
                                boxSizing="border-box"
                                borderRadius="4px"
                                height="4px"
                                width="41px"
                                position="relative"
                            />
                        </Stack>
                        <Typography
                            component="div"
                            variant="div"
                            sx={{
                                position: "relative",
                                fontWeight: 500,
                                cursor: "pointer",
                                textTransform: "uppercase",
                            }}
                            onClick={onCONSULTATIONSTextClick}
                        >
                            Consultations
                        </Typography>
                        <Typography
                            component="div"
                            variant="div"
                            sx={{
                                textTransform: "uppercase",
                                position: "relative",
                                fontWeight: 500,
                                cursor: "pointer",
                            }}
                        >
                            About
                        </Typography>
                        <Typography
                            component="div"
                            variant="div"
                            sx={{
                                textTransform: "uppercase",
                                position: "relative",
                                fontWeight: 500,
                                cursor: "pointer",
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    border="0"
                    padding="0"
                    backgroundColor="transparent"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    gap="var(--gap-sm)"
                >
                    <Button
                        direction="row"
                        cursor="pointer"
                        border="0"
                        padding="var(--padding-9xs) var(--padding-sm)"
                        backgroundColor="var(--color-indigo)"
                        borderRadius="var(--br-6xs)"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        variant="contained"
                        onClick={handleLogin}
                    >
                        <Typography className="login-div1">LOGIN</Typography>
                    </Button>
                    <div style={{ margin: 0, padding: 0 }}>
                        <LoginDialog
                            open={loginOpen}
                            setLoginOpen={setLoginOpen}
                            setSignupOpen={setSignupOpen}
                        />
                        <SignupDialog
                            open={signupOpen}
                            setLoginOpen={setLoginOpen}
                            setSignupOpen={setSignupOpen}
                        />
                    </div>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Header;
