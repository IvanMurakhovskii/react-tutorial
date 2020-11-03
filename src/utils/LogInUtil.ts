import { NextPageContext } from "next";
import Router from "next/router";
import Cookies from "universal-cookie";

export const logIn = async (userName: string) => {
    const cookies = new Cookies();
    cookies.set("username", userName);
}

export const logOut = async () => {
    document.cookie = `username=`;
}

export const isUserLoggedIn = (cookie?: string): boolean => {
    const cookies = new Cookies(cookie);
    return Boolean(cookies.get('username'));
}

export function isUserAuth(username?: string) {
    return Boolean(username);
}

export const getUsername = async (cookie?: string): Promise<string> => {
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