import React, { useState } from 'react'

import BlockIcon from '@mui/icons-material/Block'
import DoneIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit'
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import EditableCellCheckBox from '../../components/EditableCell'

const ROWS = [
  {
    id: 1,
    date: '11.05.2022',
    dream: true,
    nutrition: true,
    workout: true,
    isEditable: false,
  },
  {
    id: 2,
    date: '12.05.2022',
    dream: true,
    nutrition: true,
    workout: true,
    isEditable: false,
  },
  {
    id: 3,
    date: '13.05.2022',
    dream: true,
    nutrition: true,
    workout: true,
    isEditable: false,
  },
  {
    id: 4,
    date: '14.05.2022',
    dream: true,
    nutrition: true,
    workout: true,
    isEditable: false,
  },
]

const Home = () => {
  const [rows, setRows] = useState(ROWS)
  // @ts-ignore
  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditable: !row.isEditable }
        }
        return row
      })
    })
  }
  // @ts-ignore
  const onChange = (e, row) => {
    const value = e.target.value
    const name = e.target.name
    const { id } = row
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value }
      }
      return row
    })
    setRows(newRows)
  }

  const onRevert = (id: any) => {
    // setRows(newRows);
    onToggleEditMode(id)
  }

  return (
    <Container maxWidth="md" sx={{ py: '3rem' }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="48px"></TableCell>
              <TableCell>День</TableCell>
              <TableCell align="center">Сон</TableCell>
              <TableCell align="center">Питание</TableCell>
              <TableCell align="center">Тренировки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row.id}>
                <TableCell>
                  {row.isEditable ? (
                    <>
                      <IconButton aria-label="done" onClick={() => onToggleEditMode(row.id)}>
                        <DoneIcon />
                      </IconButton>
                      <IconButton aria-label="revert" onClick={() => onRevert(row.id)}>
                        <BlockIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton aria-label="delete" onClick={() => onToggleEditMode(row.id)}>
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <EditableCellCheckBox isEditable={row.isEditable} checked={row.dream} />
                <EditableCellCheckBox isEditable={row.isEditable} checked={row.nutrition} />
                <EditableCellCheckBox isEditable={row.isEditable} checked={row.workout} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home
