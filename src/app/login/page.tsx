import RootLayout from "@/layouts"
import Button from "@/components/button"
import { textStyle } from "@/styles/adapters.style"

export default function Home()
{
    return (
        <RootLayout>
            
            <Button>Hello</Button>
            <Button variant="secondary">Hello</Button>
        </RootLayout>
    )
}