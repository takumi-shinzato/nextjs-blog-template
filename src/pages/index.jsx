import Head from 'next/head'    
import styles from 'src/styles/Home.module.scss'
import { Header } from 'src/components/Header/Header'
import { Aside } from 'src/components/Aside/Aside'
import { Top } from 'src/components/Main/Top'
import { Footer } from 'src/components/Footer/Footer'
import { client } from "libs/client"

export const getServerSideProps = async() => {
    const categoryData = await client.get({endpoint: "category"});
    let categories = [];
    categoryData.contents.map((category) => {
        categories.push({
            id: category.id,
            title: category.title,
            isActive: false
        });
    });
    return {
        props: {
            categories: categories,
        }
    }
}

export default function Home({ categories }) {
    return (
        <>
            <Head>
                <title>{`Blog Template`}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className={styles.gridArea}>
                <Header />
                <Aside categories={categories} />
                <Top />
                <Footer />
            </div>
        </>
    )
}
