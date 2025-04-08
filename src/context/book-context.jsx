import { createContext, useContext, useState } from "react"
 
const initialState = {
  version: "web",
  setVersion: () => null,
}
 
const VersionProviderContext = createContext(initialState)
 
export function VersionProvider({
  children,
  defaultVersion = "web",
  storageKey = "book-version",
  ...props
}) {
  const [version, setVersion] = useState(
    () => localStorage.getItem(storageKey) || defaultVersion
  )
 
  const value = {
    version,
    setVersion: (version) => {
      localStorage.setItem(storageKey, version)
      setVersion(version)
    },
  }
 
  return (
    <VersionProviderContext.Provider {...props} value={value}>
      {children}
    </VersionProviderContext.Provider>
  )
}
 
export const useVersion = () => {
  const context = useContext(VersionProviderContext)
 
  if (context === undefined)
    throw new Error("useVersion must be used within a versionProvider")
 
  return context
}