import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

function LoginPopup({ open, label, switching }) {
    return (
        // <Stack
        //     aria-labelledby="simple-dialog-title"
        //     open={open}
        //     sx={{
        //         background: "var(--color-white)",
        //         fontFamily: "var(--font-poppins)",
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //         position: "relative",
        //         borderRadius: "20px",
        //     }}
        // >
        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "20px",
                fontFamily: "var(--font-poppins)",
                gap: "2rem",
            }}
        >
            <Typography
                id="simple-dialog-title"
                component="div"
                variant="div"
                sx={{
                    fontSize: "var(--font-size-5xl)",
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 600,
                    paddingX: "30px",
                    paddingTop: "25px",
                    alignSelf: "center",
                }}
            >
                Login as Patient
            </Typography>
            <DialogContent sx={{ alignItems: "flex-start" }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        "& > :not(style)": { m: 1 },
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        type="email"
                        margin="dense"
                        sx={{ width: "30rem" }}
                    />
                </Box>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        "& > :not(style)": { m: 1 },
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="dense"
                        sx={{ width: "30rem" }}
                    />
                </Box>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Checkbox {...label} />
                    <Typography component="div" variant="div">
                        I agree to all the{" "}
                        <Typography
                            component="span"
                            variant="div"
                            sx={{
                                textDecoration: "underline",
                                color: "var(--color-violet-100)",
                                cursor: "pointer",
                            }}
                        >
                            Terms and Conditions
                        </Typography>
                    </Typography>
                </Stack>
            </DialogContent>
            <DialogActions
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "15px",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        letterSpacing: "0.1em",
                        borderRadius: "8px",
                        width: "10rem",
                        padding: "var(--padding-9xs)",
                        fontSize: "18px",
                        fontWeight: "700",
                        backgroundColor: "var(--color-indigo)",
                    }}
                >
                    LOGIN
                </Button>
                <Stack direction="row" gap="5px" sx={{ marginBottom: "20px" }}>
                    <Typography component="div" variant="div">
                        New User?
                    </Typography>
                    <Typography
                        component="div"
                        variant="div"
                        sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                        onClick={switching}
                    >
                        Register Now
                    </Typography>
                </Stack>
            </DialogActions>
        </Dialog>
        // </Stack>
    );
}

export default LoginPopup;
