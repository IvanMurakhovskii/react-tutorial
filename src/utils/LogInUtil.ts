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

const getUsername = async (): Promise<string | null> => {
    return localStorage.getItem('username');
}