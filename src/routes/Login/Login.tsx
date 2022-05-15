import React from 'react'
import GoogleButton from 'react-google-button'

import { Container, Paper, Typography } from '@mui/material'

import styles from './Login.module.scss'

const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ py: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Авторизация
        </Typography>
        <GoogleButton className={styles.googleBtn} />
      </Paper>
    </Container>
  )
}

export default Login
