import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import Header from '../../components/layout/Header'

const Main = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Header />
      <Outlet />
    </Box>
  )
}

export default Main
