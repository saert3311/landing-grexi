export const useUser = () => {
    const userData = useState('userData', () => '')
    const authenticated = useState('authenticated', () => false)
    const setUser = (user) => {
        userData.value = user
        login()
    }
    const clearUser = () => {userData.value = ''}
    const login = () => authenticated.value = true
    const logout = () => authenticated.value = false
    return {
        userData,
        setUser,
        clearUser,
        authenticated,
        login,
        logout
    }
}