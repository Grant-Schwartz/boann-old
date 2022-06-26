import { Session } from 'inspector'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthStateChange, useClient } from 'react-supabase'

const initialState = { session: null, user: null }
export const AuthContext = createContext(initialState)

export function AuthProvider({ children }: any) {
  const client = useClient()
  const [state, setState] = useState<any>(initialState)

  useEffect(() => {
    const session = client.auth.session()
    setState({ session, user: session?.user ?? null })
  }, [])

  useAuthStateChange((event, session) => {
    console.log(`Supbase auth event: ${event}`, session)
    setState({ session, user: session?.user ?? null })
  })

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw Error('useAuth must be used within AuthProvider')
  return context
}

export interface UserResponse {
  error: boolean;
  message: string;
}

export const isEmail = (email:string) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
      return false
    }
    return true
}