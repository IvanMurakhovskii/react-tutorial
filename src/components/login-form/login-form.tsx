import { Button, makeStyles } from '@material-ui/core';
import React, { FC, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { logIn } from '@/utils';
import { useHistory } from 'react-router-dom';


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
    const history = useHistory();
    const [state, setState] = useState({ username: '' });

    const onSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        await logIn(state.username);
        history.push("/");
    }

    const onChange = (event: inputEvent) => {
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
                    onSubmit={onSubmit}>
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
                        onChange={onChange}
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