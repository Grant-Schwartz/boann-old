import { FC, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useSignOut } from "react-supabase"


export const SignOut: FC = () => {
    const [ {error}, signOut] = useSignOut()
    // eslint-disable-next-line
    useEffect(() => {
        signOut()
        console.log(`Error: ${error}`)
    }, []);
    return <Navigate to="/signin" replace/>
}