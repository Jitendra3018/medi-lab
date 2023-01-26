import { Stack } from "@mui/material";

import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero Section/HeroSection";
import PopularProducts from "../../components/Popular Products/PopularProducts";
import Doctors from "../../components/Doctors/Doctors";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    return (
        <>
            <Stack
                position="relative"
                sx={{ backgroundColor: "var(--color-gray-100)" }}
                width="100%"
                height="3247px"
                overflow="hidden"
                textAlign="left"
                fontSize="var(--font-size-7xl)"
                color="var(--black)"
                fontFamily="var(--font-poppins)"
            >
                <Header />
                <HeroSection />
                <PopularProducts />
                <Doctors />
                <Footer />
            </Stack>
        </>
    );
}

export default HomePage;
