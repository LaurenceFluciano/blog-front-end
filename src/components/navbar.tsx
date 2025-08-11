type NavItem = {
  label: string;
  href?: string;  
  specificStyle?: string;
}

export type NavBarProps = {
  items: NavItem[];
  styles?: {
    a?: string;
    nav?: string;
  };
  children?: React.ReactNode;
}

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
