import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // This router is just a simulation, if you want to add this system, you need
    // see this repsitory> https://github.com/LaurenceFluciano/auth-api-nestjs
    const backendResponse = await fetch("http://localhost:8000/auth/jwt/basic/login/", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "x-project-key": "blog"
      },
      body: JSON.stringify(req.body),
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json();
      return res.status(backendResponse.status).json(errorData);
    }

    const data = await backendResponse.json();

    const token = data.accessToken;

    res.setHeader("Set-Cookie", `accessToken=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; Secure`);

    return res.status(200).json({ message: "Login realizado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
}
