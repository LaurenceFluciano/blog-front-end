import "@/styles/tailwind/global.css"


type RootLayoutProps = {
  headerChildren?: React.ReactNode;
  mainChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
  style?: {
    header?: string,
    main?: string,
    footer?: string,
  };
} 

export default function RootLayout({ headerChildren, mainChildren, footerChildren, style }: RootLayoutProps) {
    return (
      <html>
        <body>
          <header className={style?.header}>
            {headerChildren}
          </header>
          <main className={style?.main}>
            {mainChildren}
          </main>
          <footer className={style?.footer}>
            {footerChildren}
          </footer>
        </body>
      </html>
    )
}