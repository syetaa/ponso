'use client'
import SignIn from "@/components/auth/signin";

import { SessionProvider } from "next-auth/react"



const AuthPage = () => {

    return(
        <div>
            <SessionProvider>
                 <SignIn/>
            </SessionProvider>
          
        </div>
    )
}

export default AuthPage;