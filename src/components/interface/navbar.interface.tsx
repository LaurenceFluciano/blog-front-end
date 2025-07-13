type NavItem = {
  label: string;
  href?: string;  
}

export type NavBarProps = {
  items: NavItem[];
  styles: {
    ul: string;
    li: string;
    a: string;
    nav: string;
  };
  children?: React.ReactNode;
}