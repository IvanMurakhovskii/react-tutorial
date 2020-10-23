export const logIn = async (userName: string) => {
    localStorage.setItem('username', userName);
}

export const logOut = async () => {
    localStorage.removeItem("username");
}

export const isUserLoggedIn = (): boolean => {
    const uesrname = localStorage.getItem('username');
    return Boolean(uesrname);
}

export const getUsername = async (): Promise<string> => {
    const username = localStorage.getItem('username');
    return username !== null? username: '';
}