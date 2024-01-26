import classes from 'src/components/Main/Main.module.scss'
import Link from 'next/link'

export function Top() {
    return (
        <main className={classes.main}>
            {/* パンくずリスト */}
            {/* <ul className={classes.breadcrumb}>
                <li><Link href={`/`}>トップ</Link></li>
                <li><Link href={`/${article.category.id}`}>{article.category.title}</Link></li>
            </ul> */}
            <h1>キーワードで検索</h1>
            <form method="get" action="/search">
                <input type="text" placeholder="キーワード検索" name="q" />
                <input type="submit" value={""} />
            </form>
        </main>
    )
}