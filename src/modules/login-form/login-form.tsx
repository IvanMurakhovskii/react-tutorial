import { Button, makeStyles } from '@material-ui/core';
import React, { FC, useCallback, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { logIn } from '@/utils';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

type inputEvent = React.ChangeEvent<HTMLInputElement>;

const LoginForm: FC<{}> = () => {
    const classes = useStyles();
    const router = useRouter();
    const [state, setState] = useState({ username: '' });

    const handleSubmit = useCallback((_event) => {
        _event.preventDefault();

        logIn(state.username);
        router.replace("/");
    }, [state.username]);

    const handleChange = (event: inputEvent) => {
        setState({ username: event.target.value });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
            </Typography>
                <form className={classes.form} noValidate
                    onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={state.username}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );

}

export default LoginForm;