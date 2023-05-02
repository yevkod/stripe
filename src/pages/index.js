import styles from '@/styles/Home.module.css'
import Main from '../components/Main/Main';
import Years from "@/components/Years/Years";
import FeaturedDevelopment from "@/components/FeaturedDevelopment/FeaturedDevelopment";
import Gray from "@/components/Gray/Gray";
import News from "@/components/News/News";
import Footer from "@/components/Footer/Footer";


export default function Home() {
    return (
        <>
            <Main/>
            <Years />
            <FeaturedDevelopment />
            <Gray />
            <News />
            <Footer />
        </>
    )
}
