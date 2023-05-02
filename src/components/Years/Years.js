import React from 'react';
import {Box, Typography} from "@mui/material";
import logo from '../../../public/assets/logo_news.png';
import Image from "next/image";
import s from './styles';

const Years = () => {
    return (
        <Box sx={s.box}>
            <Box sx={s.box__years}>
                <Box sx={s.box__min}>
                    <Typography sx={s.typo}>Over</Typography>
                    <Typography variant="h2" sx={s.typo__1}>20</Typography>
                    <Typography sx={s.typo__2}>Years</Typography>
                </Box>
                <Box sx={s.box__typo}>
                    <Typography sx={s.box__typo__1}>With over two decades industry experience,
                        StripeHomes is the ideal<br/> choice for homebuilding,
                        residential developments and build to rent<br/> accommodation.
                    </Typography>
                </Box>
            </Box>
            <Box sx={s.box__footer}>
                <Box sx={s.box__img}>
                    <Image sx={s.box__img__1} src={logo} alt="logo"/>
                </Box>
                <Box sx={s.box__text}>
                    <Typography sx={s.box__text__1}>Passionate about quality and bespoke property
                        developments for first time buyers,<br/> homeowners & students.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Years;
