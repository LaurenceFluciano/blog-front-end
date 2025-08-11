'use client'
import RootLayout from "@/layouts";
import NavBar from "@/components/navbar";
import { mainStyle, navbarStyle } from "@/styles/adapters.style";
import { headerStyle } from "@/styles/adapters.style";
import Form from "@/layouts/form";
import InputLabelComponent from "@/components/input.label";
import Button from "@/components/button";
import { useState } from "react";
import { redirect } from 'next/navigation';


export default function Login() {
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState('');
    const [password, setPassword] = useState('')

    async function handleEmail(e: any) {
        setEmail(e.target.value)
    }

    async function handlePassword(e:any) {
        setPassword(e.target.value)
    }

    async function handleSubmit(e:any)
    {
        e.preventDefault()

        if(response === "singin")
        {
            redirect("/singin")
        }
        else if (response === "submit")
        {
            const form = {
                email,
                password,
            };

            const result = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
                credentials: "include", 
            });
            console.log(result)

            /*if (!result.ok) {
                const text = await result.text();
                console.error("Erro no fetch:", result.status, text);
                throw new Error("Erro na API");
            }


            const data = await result.json();

            console.log(data)*/
        } else
        {
            console.log("Ocorreu um erro!")
        }
    }
    
    
    return (
        <RootLayout
            headerChildren={
                <>
                    <h1 className={`font-semibold max-sm:text-xl text-2xl pt-4 pl-1 pb-4 pr-2`}>SimpleBlog</h1>
                    <NavBar 
                    items={[
                        {label: "Login", href:"/login", specificStyle: navbarStyle.a.primary_selected},
                        {label: "Cadastro", href:"/signin"}
                    ]}
                    styles={{
                        nav: navbarStyle.navbar.primary,
                        a: navbarStyle.a.primary,
                    }}>
                    </NavBar>
                </>
            }

            mainChildren={
                <div className="flex flex-row flex-nowrap w-5/6 justify-center">
                    <Form    
                        formStyle="w-5/6 mt-25"
                        method="POST"
                        onSubmit={handleSubmit}
                        containerStyle="w-full flex flex-col items-center" 
                        
                        
                        childrens={[
                            <h2 className="mb-10 text-4xl font-bold">Login</h2>,
                            <InputLabelComponent 
                                labelText="Email: " 
                                value={email}
                                onChange={handleEmail}
                                name="email" 
                                placeHolder="Email"
                                variant={{
                                    label:"primary",
                                    input:"primary"
                                }}
                                />,
                            <InputLabelComponent 
                                labelText="Password: " 
                                name="password" 
                                value={password}
                                onChange={handlePassword}
                                placeHolder="Password"
                                variant={{
                                    label:"primary",
                                    input:"primary"
                                }} 
                                />,
                            <div className="flex flex-row justify-end mt-20">
                                <Button
                                    children="Cadastrar-se"
                                    value={"singin"}
                                    onClick={(e:any)=>setResponse(e.target.value)}
                                    variant="secondary"
                                />
                                <Button
                                    children="Entrar"
                                    value={"submit"}
                                    onClick={(e:any)=>setResponse(e.target.value)}
                                    otherStyle="ml-3 mr-25"
                                />
                            </div>
                        ]}
                    />
                    <div className="w-1/2 flex flex-col justify-center">
                        <h3 className="font-semibold max-sm:text-xl text-2xl">Bem-vindo ao</h3>
                        <h2 className="font-bold max-sm:text-3xl text-5xl">SimpleBlog</h2>
                    </div>
                </div>
            }

            style = {{
                header: headerStyle.primary,
                main: mainStyle.primary
            }}
        />
    );
}
