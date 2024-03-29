import Head from 'next/head'    
import styles from 'src/styles/Home.module.scss'
import { Header } from 'src/components/Header/Header'
import { Aside } from 'src/components/Aside/Aside'
import { Footer } from 'src/components/Footer/Footer'
import { ArticleList } from 'src/components/Main/ArticleList'
import { client } from "libs/client"

export const getServerSideProps = async(context) => {
    const q = context.query.q;
    const keywords = q.replaceAll("　", " ").split(" ");
    let query = "";
    for (let i = 0; i < keywords.length; i++) {
        query += "(body[contains]" + keywords[i] + ")";
        if (i !== keywords.length - 1) {
            query += "[and]";
        }
    }
    const data = await client.get({ endpoint: "article", queries: {filters: query} });

    // let keyword = q.replaceAll("　", ",").replaceAll(" ", ",");
    // const data = await client.get({ endpoint: "article", q: keyword });

    const categoryData = await client.get({ endpoint: "category"});
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
            articles: data.contents,
            categories: categories,
            q: q
        }
    }
}

export default function Home({ articles, categories, q }) {
    return (
        <>
            <Head>
                <title>{`Blog Template`}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="robots" content="noindex" />
            </Head>
            <div className={styles.gridArea}>
                <Header />
                <Aside categories={categories} />
                <ArticleList articles={articles} categories={categories} pageTitle={`「${q}」の検索結果`} />
                <Footer />
            </div>
        </>
    )
}
