import React from 'react'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: '3rem' }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>День</TableCell>
              <TableCell align="right">Сон</TableCell>
              <TableCell align="right">Питание</TableCell>
              <TableCell align="right">Тренировки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                09 мая 2022
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
              <TableCell align="right">
                <CloseIcon />
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                10 мая 2022
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
              <TableCell align="right">
                <CloseIcon />
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                11 мая 2022
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
              <TableCell align="right">
                <CloseIcon />
              </TableCell>
              <TableCell align="right">
                <CheckIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home
