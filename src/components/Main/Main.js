import React from 'react';
import {Box, Button, Typography,} from "@mui/material";
import s from './styles';
import logo from '../../../public/assets/Logo-white.png';
import Image from "next/image";
import burger from '../../../public/assets/Burger.png';
import insta from '../../../public/assets/insta.png';
import twitter from '../../../public/assets/twitter.png';
import facebook from '../../../public/assets/facebook.png';
import mouse from '../../../public/assets/mouse.png';
import o1 from '../../../public/assets/01.png';
import o2 from '../../../public/assets/02.png';
import o3 from '../../../public/assets/03.png';
import o4 from '../../../public/assets/04.png';


const Main = () => {
    return (
        <Box sx={s.container}>
            <Box sx={s.home}>
                <Box sx={s.box_img}>
                    <Image sx={s.img} src={logo}/>
                </Box>
                <Box sx={s.box_typo}>
                    <Typography sx={s.text}>
                        Bespoke property developer<br/>
                        specialising in digital
                    </Typography>
                </Box>
                <Box sx={s.right__box}>
                    <Box sx={s.box__social}>
                        <Box sx={s.burger}>
                            <Image src={burger} alt="burger_menu"/>
                        </Box>
                        <Box sx={s.social}>
                            <Box sx={s.facebook}>
                                <Image  src={facebook}
                                       alt="facebook"/>
                            </Box>
                            <Box sx={s.twitter}>
                                <Image  src={twitter}
                                       alt="twitter"/>
                            </Box>
                            <Box sx={s.insta}>
                                <Image  src={insta}
                                       alt="insta"/>
                            </Box>
                        </Box>
                        <Box sx={s.mouse}>
                            <Image src={mouse} alt="mouse"/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={s.footer__home}>
                    <Box sx={s.footer__home__1}>
                        <Image sx={s.text__01} src={o1} alt="o1"/>
                        <Typography sx={s.text__bio}>Homes</Typography>
                        <Typography sx={s.text__para__01}>Pellentesque in ipsum orci porta</Typography>
                        <Button sx={s.btn}>Know more</Button>
                    </Box>
                    <Box sx={s.footer__home__2}>
                        <Image sx={s.text__02} src={o2} alt="o2"/>
                        <Typography sx={s.text__para__02}>Commercial</Typography>
                    </Box>
                    <Box sx={s.footer__home__3}>
                        <Image sx={s.text__03} src={o3} alt="o3"/>
                        <Typography sx={s.text__para__03}>Students</Typography>
                    </Box>
                    <Box sx={s.footer__home__4}>
                        <Image sx={s.text__04} src={o4} alt="o4"/>
                        <Typography sx={s.text__para__03}>Digital</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
