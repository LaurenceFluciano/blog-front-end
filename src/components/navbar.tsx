import { NavBarProps } from "./interface/navbar.interface"

export default function NavBar({ items, styles, children }: NavBarProps) {
  return (
    <nav className={styles?.nav}>
      {items.map((item, index) => (
          <a key={index} href={item.href} className={`${styles?.a ?? ""} ${item.specificStyle ?? ""}`}>{item.label}</a>
      ))}
      {children}
    </nav>
  )
}
