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