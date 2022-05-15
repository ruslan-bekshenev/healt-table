import React, { VFC } from 'react'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Checkbox, FormControlLabel, TableCell } from '@mui/material'

export interface IEditableCell {
  isEditable?: boolean
  checked?: boolean
}

const EditableCellCheckBox: VFC<IEditableCell> = ({ checked, isEditable }) => {
  if (isEditable) {
    return (
      <TableCell>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FormControlLabel control={<Checkbox checked={checked} />} label="Да/Нет" />
        </Box>
      </TableCell>
    )
  }

  return (
    <TableCell>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {checked ? <CheckIcon /> : <CloseIcon />}
      </Box>
    </TableCell>
  )
}

export default EditableCellCheckBox
