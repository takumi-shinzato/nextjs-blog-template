import classes from 'src/components/Header/Header.module.scss'

export function Header({ keyword }) {
  return (
    <header className={classes.header}>
      <div className={classes.headerLogoContainer}>
        <a className={classes.headerTitle} href="/">Blog Templete</a>
      </div>
      <form method="get" action="/search">
        <input type="text" placeholder="キーワード検索" name="q" />
        <input type="submit" value={""} />
      </form>
    </header>
  )
}