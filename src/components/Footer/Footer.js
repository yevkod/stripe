import React from 'react';
import s from './styles';
import letter from '../../../public/assets/letter.png';
import {Box, Typography} from "@mui/material";
import edit from '../../../public/assets/edit.png';
import Image from "next/image";
import logo from '../../../public/assets/Logo-white.png';
import insta_1 from '../../../public/assets/insta_1.png';
import twitter_1 from '../../../public/assets/twitter_1.png';
import facebook_1 from '../../../public/assets/facebook_1.png';
import {styled} from "@mui/system";


const Footer = () => {
    return (
        <Box sx={s.container}>
            <Box sx={s.box}>
                <Box sx={s.box__img}>
                    <Image src={letter} alt="letter"/>
                </Box>
                <Typography variant="h5" sx={s.title}>Newsletter subscribe</Typography>
                <Typography sx={s.text}>Subscribe to our newsletter, we promise not to spam!</Typography>
                <Box sx={s.box__placeholder}>
                    <Box sx={s.box__placeholder__main}>
                        <Typography sx={s.box__placeholder__text}>Your email address</Typography>
                        <Box sx={s.box__placeholder__image}>
                            <Image src={edit}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={s.box__footer}>
                <Box sx={s.box__img__1}>
                    <Image s src={logo}/>
                </Box>
                <Box sx={s.box__typo}>
                    <Typography variant="h6" sx={s.contacts}>Contacts</Typography>
                    <Typography sx={s.floor}>First Floor, Forth Banks,<br/>Newcastle, NE1 3PA United
                        Kingdom</Typography>
                    <Typography sx={s.info}>info@stripehomes.co.uk</Typography>
                    <Typography sx={s.newcastle}>Newcastle: 0191 249 9292 <br/>Birmingham: 0121 716 2556</Typography>
                </Box>
                <Box sx={s.box__links}>
                    <Typography variant="h6" sx={s.box__links__1}>Links</Typography>
                    <Typography sx={s.box__about}>About us</Typography>
                    <Typography sx={s.location}>Our locations</Typography>
                    <Typography sx={s.statement}>Statement</Typography>
                    <Typography sx={s.reviews}>Reviews</Typography>
                    <Typography sx={s.news}>News</Typography>
                </Box>
                <Box sx={s.social__box}>
                    <Typography variant="h6" sx={s.social}>Social</Typography>
                    <Box sx={s.socials__images}>
                        <Box sx={s.facebook}>
                            <Image src={facebook_1}/>
                        </Box>
                        <Box sx={s.twitter}>
                            <Image src={twitter_1}/>
                        </Box>
                        <Box sx={s.insta}>
                            <Image src={insta_1}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={s.box__policy}>
                <Box sx={s.box__policy__1}>
                    <Typography sx={s.policy__text}>© 2022 Stripe Homes | Privacy Policy | Terms &
                        Conditions</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
