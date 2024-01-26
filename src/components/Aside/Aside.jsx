import classes from 'src/components/Aside/Aside.module.scss'
import Link from 'next/link'

export function Aside({ categories }) {
    return (
        <aside className={classes.aside}>
            <div className={classes.category}>
                {/* <div className={classes.categoryTitle}>カテゴリ一覧</div> */}
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} className={category.isActive ? classes.active: ""}>
                            <Link href={`/${category.id}`}>{category.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}