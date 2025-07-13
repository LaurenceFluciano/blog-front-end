import RootLayout from "@/layouts";
import NavBar from "@/components/navbar";
import { textStyle } from "@/styles/adapters.style";
import { navbarStyle } from "@/styles/adapters.style";
import { headerStyle } from "@/styles/adapters.style";

export default function Home() {
  return (
    <RootLayout
        headerChildren={
            <>
                <h1 className={`${textStyle["big"]} ${textStyle["header-space-title"]}`}>SimpleBlog</h1>
                <NavBar 
                items={[
                    {label: "Login", href:"#", specificStyle: navbarStyle.a.primary_selected},
                    {label: "Cadastro"}
                ]}
                styles={{
                    nav: navbarStyle.navbar.primary,
                    a: navbarStyle.a.primary,
                }}>

                </NavBar>
            </>
        }
        style = {{
            header: headerStyle.primary
        }}
    />
  );
}
