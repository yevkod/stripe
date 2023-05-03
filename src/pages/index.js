import styles from '@/styles/Home.module.css'
import Main from '../components/Main/Main';
import Years from "@/components/Years/Years";
import FeaturedDevelopment from "@/components/FeaturedDevelopment/FeaturedDevelopment";
import Gray from "@/components/Gray/Gray";
import {Box} from "@mui/material";
import News from "@/components/News/News";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import person from '../../public/assets/user.png';


export default function Home() {

    return (
        <>
            <Main/>
            <Years/>
            <FeaturedDevelopment/>
            <Gray/>
            <News/>
            <Footer/>
        </>
    )
}
