import React from 'react';
import Investors from "../../components/about/investors";
import Marketing from "../../components/about/marketing";
import Team from "../../components/about/team";
import {Box} from "@mui/material";

function Page() {
    return (
        <Box sx={{backgroundColor : '#f1f1f1'}}>
            <Marketing/>
            <Investors/>
            <Team/>
        </Box>
    );
}

export default Page;