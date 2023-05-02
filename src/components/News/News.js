import React from 'react';
import central from '../../../public/assets/central.png';
import flag from '../../../public/assets/flag.png';
import tower from '../../../public/assets/tower.png';
import river from '../../../public/assets/river.png';
import people from '../../../public/assets/people.png';
import arrow from '../../../public/assets/arrow_right.png';
import news from '../../../public/assets/News_Events.png';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import s from './styles';

const News = () => {
    return (
        <Box sx={s.container}>
            <Box sx={s.image}>
                <Image src={news} style={{width: "750px", height: "100px", margin: "65px 180px"}} alt="news"/>
            </Box>
            <Box sx={s.box}>
                <Box sx={s.box__typo}>
                    <Box sx={s.container__typo}>
                        <Typography variant="h6" sx={s.title}>News & Events</Typography>
                        <Typography sx={s.text}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit vivamus magna justo,
                            lacinia eget consectetur sed convallis
                            at tellus vivamus magna justo.
                        </Typography>
                        <Typography sx={s.box__text}>
                            View all posts
                        </Typography>
                        <Box sx={s.box__img}>
                            <Image src={arrow} alt="arrow"/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={s.img__1}>
                    <Image style={{width: "100%", height: "100%"}} src={river} alt="flag"/>
                </Box>
                <Box sx={s.img__2}>
                    <Image style={{width: "100%", height: "100%"}} src={people} alt="river"/>
                </Box>
                <Box sx={s.img__3}>
                    <Image style={{width: "100%", height: "100%"}} src={flag} alt="people"/>
                </Box>
                <Box sx={s.img__4}>
                    <Image style={{width: "100%", height: "100%"}} src={tower} alt="tower"/>
                </Box>
                <Box sx={s.img__5}>
                    <Image style={{width: "100%", height: "100%"}} src={central} alt="central"/>
                </Box>
            </Box>
        </Box>
    );
};

export default News;
