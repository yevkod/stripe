import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import burger from '../../../public/assets/Burger.png';
import Image from "next/image";
import {useUser} from "@auth0/nextjs-auth0/client";
import {Box, Typography} from "@mui/material";
import person from "../../../public/assets/user.png";
import s from "@/components/Main/styles";
import Link from "next/link";


const MenuPage = () => {
    const {user} = useUser();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Image src={burger}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {!!user ? (
                    <Box>
                        <Box>
                            <MenuItem>
                                <Box sx={s.menu__img}>
                                    <Image src={person} alt={user.name} height={20} width={20}
                                           style={{display: "block", margin: "0 5px"}}/>
                                </Box>
                                <Box sx={s.auth__text}>{user.email}</Box>
                            </MenuItem>
                        </Box>
                        <Link sx={s.btn__auth} href="/api/auth/logout"><MenuItem sx={s.menu__but}><Typography style={{display: "block", width: "50px", height: "20px", margin: "5px auto"}}>Logout</Typography></MenuItem></Link>
                    </Box>
                ) : (
                    <Link href="/api/auth/login"><MenuItem sx={s.menu__but__1}><Typography style={{display: "block", width: "50px", height: "20px", margin: "5px auto"}}>Login</Typography></MenuItem></Link>
                )}
            </Menu>
        </div>
    );
}

export default MenuPage;
