import React from 'react'

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

import EditableCellCheckBox from '../../components/EditableCell'

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: '3rem' }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>День</TableCell>
              <TableCell align="right">Сон</TableCell>
              <TableCell align="right">Питание</TableCell>
              <TableCell align="right">Тренировки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell></TableCell>
              <TableCell component="th" scope="row">
                09 мая 2022
              </TableCell>
              <EditableCellCheckBox />
              <EditableCellCheckBox />
              <EditableCellCheckBox />
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell></TableCell>
              <TableCell component="th" scope="row">
                09 мая 2022
              </TableCell>
              <EditableCellCheckBox />
              <EditableCellCheckBox />
              <EditableCellCheckBox />
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell></TableCell>
              <TableCell component="th" scope="row">
                09 мая 2022
              </TableCell>
              <EditableCellCheckBox />
              <EditableCellCheckBox />
              <EditableCellCheckBox />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home
