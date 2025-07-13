import { NavBarProps } from "./interface/navbar.interface"

export default function NavBar({ items, styles, children }: NavBarProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {items.map((item, index) => (
          <li key={index} className={styles.li}>
            <a href={item.href} className={styles.a}>{item.label}</a>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  )
}
