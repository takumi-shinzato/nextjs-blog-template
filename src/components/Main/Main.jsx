import classes from 'src/components/Main/Main.module.scss'
import Link from 'next/link'

export function Main({ article }) {
    const reference = article.reference;
    return (
        <main className={classes.main}>
            {/* パンくずリスト */}
            <ul className={classes.breadcrumb}>
                <li><Link href={`/`}>トップ</Link></li>
                <li><Link href={`/${article.category.id}`}>{article.category.title}</Link></li>
            </ul>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: `${article.body}`}}></div>
        </main>
    )
}