import React from 'react';
import s from './styles';
import {Box, Typography} from "@mui/material";
import rainbow from '../../../public/assets/rainbow.png';
import Image from "next/image";
import man1 from '../../../public/assets/man1.png';

const Gray = () => {
    return (
        <Box sx={s.container} >
            <Box sx={s.box__prev}>
                <Typography sx={s.box__prev__text}>Prev</Typography>
            </Box>
            <Box sx={s.box}>
                <Box sx={s.box__img__1}>
                    <Image src={rainbow} alt="rainbow"/>
                    <Image style={{marginLeft: "15px"}} src={rainbow} alt="rainbow"/>
                </Box>
                <Box sx={s.box__text}>
                    <Typography sx={s.text__1}>
                        Sed porttitor lectus nibh curabitur aliquet quam id dui posuere
                        blandit quisque velit nisi, pretium cinia in, elementum id enim.
                        Nulla quis lorem libero malesuada feugiat sed porttitor lectus nibh.
                    </Typography>
                </Box>
                <Box sx={s.box__author}>
                    <Box sx={s.box__img__2}>
                        <Image src={man1} alt="man1"/>
                    </Box>
                    <Box sx={s.box__author__text}>
                        <Typography sx={s.title}>Dennis L. Brick</Typography>
                        <Typography sx={s.text}>Attorney</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={s.box__next}>
                <Typography sx={s.box__prev__text}>Next</Typography>
            </Box>
        </Box>
    );
};

export default Gray;
