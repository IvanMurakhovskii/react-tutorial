import React, { FC } from 'react';
import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { logOut } from '@/utils/LogInUtil'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        },
        label: {
            textTransform: 'capitalize',
        },
        logout: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        account: {
            display: 'flex',
            marginRight: '5px'
        }
    }),
);

interface HeaderProps {
    username: string,
    isAuth: boolean
}

const Header: FC<HeaderProps> = (props) => {

    const classes = useStyles();
    const router = useRouter();

    const onClickLogOutHandle = () => {
        logOut();
        router.replace('/login');
    }

    const onClickLoginHandle = () => {
        router.replace('/login');
    }

    const loguotElement = (
        <div className={classes.logout}>
            <div className={classes.account}>
                <AccountCircleIcon fontSize="large" />
                <Typography variant="h6" >
                    {props.username}
                </Typography>
            </div>

            <Button
                variant="contained"
                size="small"
                color="secondary"
                className={classes.label}
                id="logout"
                onClick={onClickLogOutHandle}>
                Logout
        </Button>
        </div>
    );

    const logInElement = (
        <Button variant="contained"
            size="small"
            color="secondary"
            className={classes.label}
            onClick={onClickLoginHandle}>
            LogIn
        </Button>
    );

    return (
        <AppBar position="sticky" >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Todo App
                </Typography>
                {props.isAuth ? loguotElement : logInElement}
            </Toolbar>
        </AppBar>
    );
}

export default Header;