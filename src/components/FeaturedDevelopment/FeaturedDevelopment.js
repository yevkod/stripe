import React from 'react';
import s from './styles';
import {Box, Button, Typography} from "@mui/material";
import Image from "next/image";
import develop from '../../../public/assets/Featured_developments.png';
import bed from '../../../public/assets/bed.png';
import house from '../../../public/assets/house.png';
import bed_cs from '../../../public/assets/bed_cs.png';
import house_qv from '../../../public/assets/house_qv.png';
import star from '../../../public/assets/star.png';
import dollar from '../../../public/assets/dollar.png';
import crane from '../../../public/assets/crane.png';
import building from '../../../public/assets/building.png';


const FeaturedDevelopment = () => {
    return (
        <Box sx={s.box__featured} >
            <Box sx={s.box__block}>
                <Box sx={s.box__img}>
                    <Image sx={s.box__img__1} style={{width: "1100px", height: "120px", margin: "0 -10px"}}
                           src={develop} alt="develop"/>
                </Box>
                <Box sx={s.box__img__image}>
                    <Image sx={s.box__img__image__1} style={{width: "360px", height: "490px", margin: "-70px -150px"}} src={house} alt="house"/>
                </Box>

                <Box sx={s.box__text}>
                    <Typography variant="h4" sx={s.box__text__1}>
                        City Centre Apart-Hotel
                    </Typography>
                    <Typography sx={s.box__text__2}>
                        Coming soon. Luxury apart-hotel
                        perfectly located in Newcastle city
                        centre<br/> to work and play.
                    </Typography>
                    <Button sx={s.box__btn}><Typography sx={s.box__text__btn}>Register your interest</Typography></Button>
                </Box>
                <Box sx={s.box__typo}>
                    <Typography variant="h4" sx={s.box__typo__1}>25 St Paul’s</Typography>
                    <Typography sx={s.box__typo__2}>
                        A luxury & exclusive development with
                        four two bed apartments each with its own dedicated floor
                        located in Birmingham historic Georgian square
                        in the Jewellery Quarter.
                    </Typography>
                    <Button sx={s.box__btn}><Typography sx={s.box__text__btn}>Register your interest</Typography></Button>
                </Box>
                <Box sx={s.box__img__bed}>
                    <Image sx={s.img__bed} style={{width: "660px", height: "480px", display: "block"}} src={bed} alt="bed"/>
                </Box>
                <Box sx={s.box__cs}>
                    <Image src={bed_cs} style={{width: "650px", height: "480px", display: "block", margin: "10px -500px"}} alt="bed_cs"/>
                </Box>
                <Box sx={s.box__studios}>
                    <Typography variant="h4">Quayside View Studios</Typography>
                    <Typography sx={s.studios__text}>
                        A luxury student development of 118 studio
                        and one bed apartments, perfectly
                        located in the heart of Newcastle.
                    </Typography>
                    <Button sx={s.box__btn__2}><Typography sx={s.box__text__btn}>Find out more</Typography></Button>
                </Box>
                <Box sx={s.box__qv}>
                    <Image src={house_qv} style={{width: "360px", height: "490px", display: "block"}} alt="house_qv"/>
                </Box>
                <Box sx={s.box__cross}>
                    <Typography variant="h4">5 Cross Street</Typography>
                    <Typography sx={s.cross__text}>
                        A luxury boutique developement with 12 one
                        bed apartments and the lifestyle to match
                        in the heart of Newcastle.
                    </Typography>
                    <Button sx={s.box__btn__3}><Typography sx={s.box__text__btn}>Find out more</Typography></Button>
                </Box>

                <Box sx={s.box__develop}>
                    <Image src={develop} style={{width: "1100px", height: "120px", margin: "auto 80px", display: "block"}} alt="develop"/>
                </Box>
                <Box sx={s.box__stat}>
                    <Box sx={s.box__stat_crane}>
                        <Box sx={s.box__stat__img}>
                            <Image src={crane} alt="develop"/>
                        </Box>
                        <Typography variant="h4" sx={s.box__stat__title}>230</Typography>
                        <Typography sx={s.box__stat__text}>Units under construction</Typography>
                    </Box>
                    <Box sx={s.box__stat_build}>
                        <Box sx={s.box__build__img}>
                            <Image src={building} alt="develop"/>
                        </Box>
                        <Typography variant="h4" sx={s.box__build__title}>500+</Typography>
                        <Typography sx={s.box__build__text}>Units delivered</Typography>
                    </Box>
                    <Box sx={s.box__stat_star}>
                        <Box sx={s.box__star__img}>
                            <Image src={star} alt="develop"/>
                        </Box>
                        <Typography variant="h4" sx={s.box__star__title}>20+</Typography>
                        <Typography sx={s.box__star__text}>Years experience</Typography>
                    </Box>
                    <Box sx={s.box__stat_dollar}>
                        <Box sx={s.box__dollar__img}>
                            <Image src={dollar} alt="develop"/>
                        </Box>
                        <Typography variant="h4" sx={s.box__dollar__title}>£41m</Typography>
                        <Typography sx={s.box__dollar__text}>Gross development value</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FeaturedDevelopment;
