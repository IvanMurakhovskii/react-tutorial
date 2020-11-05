import { NextPageContext } from "next";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const logIn = async (userName: string) => {
    cookies.set("username", userName);
}

export const logOut = async () => {
    cookies.remove("username");
}

export const isUserLoggedIn = (cookie?: string): boolean => {
    const cookies = new Cookies(cookie);
    return Boolean(cookies.get('username'));
}

export function isUserAuth(username?: string) {
    return Boolean(username);
}

export const getUsername = (cookie?: string): string => {
    const cookies = new Cookies(cookie);
    const username = cookies.get('username');
    return username !== null ? username : '';
}

export function redirectIfNotAuth(ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie;
    if (!isUserLoggedIn(cookie)) {
      ctx.res?.writeHead(302, { Location: '/login' }).end();
    }
}