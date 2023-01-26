import { Grid, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import MedicineDetailsPopup from "../MedicineDetailsPopup";
import PortalPopup from "../PortalPopup";
import "./PopularProducts.css";

function PopularProducts() {
    const [isMedicineDetailsPopupOpen, setMedicineDetailsPopupOpen] =
        useState(false);

    const openMedicineDetailsPopup = useCallback(() => {
        setMedicineDetailsPopupOpen(true);
    }, []);

    const closeMedicineDetailsPopup = useCallback(() => {
        setMedicineDetailsPopupOpen(false);
    }, []);

    return (
        <Stack>
            <Stack className="popular-products-div2">
                <Typography
                    component={"h3"}
                    variant={"h4"}
                    className="popular-products-div3"
                    sx={{ fontWeight: "600" }}
                >
                    Popular Products
                </Typography>
                <Stack className="frame-div211">
                    <Grid className="frame-div212">
                        <div className="group-div134">
                            <div className="rectangle-div91" />
                            <img
                                className="image-1-icon2"
                                alt=""
                                src="../assets/image-11@2x.png"
                            />
                            <div className="frame-div213">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Advil Ibuprofin
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        tablets 200mg
                                    </div>
                                </div>
                                <div className="frame-div215">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">100</div>
                                </div>
                            </div>
                            <div
                                className="group-div135"
                                onClick={openMedicineDetailsPopup}
                            >
                                <div className="rectangle-div92" />
                                <img
                                    className="arrow-right-1-icon10"
                                    alt=""
                                    src="../assets/arrowright-110.svg"
                                />
                            </div>
                        </div>
                        <div className="group-div136">
                            <div className="rectangle-div93" />
                            <div className="frame-div216">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Crocin 650,
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        Paracetamol...
                                    </div>
                                </div>
                                <div className="frame-div218">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">90</div>
                                </div>
                            </div>
                            <div className="group-div137">
                                <div className="rectangle-div94" />
                                <img
                                    className="arrow-right-1-icon11"
                                    alt=""
                                    src="../assets/arrowright-111.svg"
                                />
                            </div>
                            <img
                                className="image-3-icon1"
                                alt=""
                                src="../assets/image-3@2x.png"
                            />
                        </div>
                        <div className="group-div138">
                            <div className="rectangle-div95" />
                            <div className="frame-div219">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Tylenol,
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        Acetaminophen
                                    </div>
                                </div>
                                <div className="frame-div221">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">120</div>
                                </div>
                            </div>
                            <div className="group-div139">
                                <div className="rectangle-div96" />
                                <img
                                    className="arrow-right-1-icon12"
                                    alt=""
                                    src="../assets/arrowright-15.svg"
                                />
                            </div>
                            <img
                                className="image-4-icon1"
                                alt=""
                                src="../assets/image-4@2x.png"
                            />
                        </div>
                        <div className="group-div138">
                            <div className="rectangle-div95" />
                            <img
                                className="image-5-icon1"
                                alt=""
                                src="../assets/image-5@2x.png"
                            />
                            <div className="frame-div219">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Calpol Infant
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        Suspension
                                    </div>
                                </div>
                                <div className="frame-div221">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">200</div>
                                </div>
                            </div>
                            <div className="group-div139">
                                <div className="rectangle-div96" />
                                <img
                                    className="arrow-right-1-icon12"
                                    alt=""
                                    src="../assets/arrowright-113.svg"
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid className="frame-div225">
                        <div className="group-div142">
                            <div className="rectangle-div99" />
                            <div className="frame-div226">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Ratiopharm
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        Paracetamol
                                    </div>
                                </div>
                                <div className="frame-div215">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">120</div>
                                </div>
                            </div>
                            <div className="group-div143">
                                <div className="rectangle-div92" />
                                <img
                                    className="arrow-right-1-icon10"
                                    alt=""
                                    src="../assets/arrowright-17.svg"
                                />
                            </div>
                            <img
                                className="image-6-icon1"
                                alt=""
                                src="../assets/image-6@2x.png"
                            />
                        </div>
                        <div className="group-div144">
                            <div className="rectangle-div101" />
                            <div className="frame-div229">
                                <div className="frame-div214">
                                    <div className="advil-ibuprofin-div1">
                                        Citrem Plus
                                    </div>
                                    <div className="advil-ibuprofin-div1">
                                        Levocitrezine
                                    </div>
                                </div>
                                <div className="frame-div218">
                                    <div className="medilab-div6">₹</div>
                                    <div className="medilab-div6">100</div>
                                </div>
                            </div>
                            <div className="group-div145">
                                <div className="rectangle-div94" />
                                <img
                                    className="arrow-right-1-icon11"
                                    alt=""
                                    src="../assets/arrowright-115.svg"
                                />
                            </div>
                            <img
                                className="image-7-icon1"
                                alt=""
                                src="../assets/image-7@2x.png"
                            />
                        </div>
                    </Grid>
                </Stack>
                <div
                    className="anchor-popular-products1"
                    data-scroll-to="popularProductsContainer"
                />
            </Stack>
            {isMedicineDetailsPopupOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeMedicineDetailsPopup}
                >
                    <MedicineDetailsPopup onClose={closeMedicineDetailsPopup} />
                </PortalPopup>
            )}
        </Stack>
    );
}

export default PopularProducts;
