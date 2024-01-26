import classes from 'src/components/Main/Main.module.scss'
import Link from 'next/link'

export function Top() {
    return (
        <main className={classes.main}>
            <h1>キーワードで検索</h1>
            <form method="get" action="/search">
                <input type="text" placeholder="キーワード検索" name="q" />
                <input type="submit" value={""} />
            </form>
        </main>
    )
}