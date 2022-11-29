import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

function RegisterPopup({ open, label, switching }) {
    const [gender, setGender] = useState("");

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <Stack aria-labelledby="simple-dialog-title" open={open}>
            <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                    Register as Patient
                </Typography>
                <DialogContent sx={{ alignItems: "flex-start" }}>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            "& > :not(style)": { m: 1 },
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            variant="outlined"
                            type="text"
                            margin="dense"
                            sx={{ width: "30rem" }}
                        />
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
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "10px",
                        }}
                    >
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{
                                "& > :not(style)": {
                                    marginRight: 1,
                                    marginY: 1,
                                },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                maxWidth: "30rem",
                            }}
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone Number"
                                variant="outlined"
                                type="tel"
                                margin="dense"
                                sx={{ maxWidth: "30rem" }}
                            />
                            <Box sx={{ width: "13.75rem" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">
                                            Female
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            variant="outlined"
                            type="text"
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
                            display: "flex",
                            gap: "10px",
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
                        <TextField
                            required
                            id="outlined-required"
                            label="Confirm Password"
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
                        SIGN UP
                    </Button>
                    <Stack
                        direction="row"
                        gap="5px"
                        sx={{ marginBottom: "20px" }}
                    >
                        <Typography component="div" variant="div">
                            Already a User?
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
                            Login Now
                        </Typography>
                    </Stack>
                </DialogActions>
            </Dialog>
        </Stack>
    );
}

export default RegisterPopup;
