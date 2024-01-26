import classes from 'src/components/Main/Main.module.scss'
import Link from 'next/link'

export function ArticleList({ articles, categories, pageTitle }) {
    return (
        <main className={classes.main}>
            <h1>{pageTitle}</h1>
            {articles.length !== 0 ? (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link href={`article/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            ): (
                <p>申し訳ありません。検索結果がありません。<br />文言を変えてみるか、カテゴリから記事をお探しください。</p>
            )}
        </main>
    )
}