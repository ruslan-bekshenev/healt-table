import React, { VFC } from 'react'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Checkbox, FormControlLabel, TableCell } from '@mui/material'

export interface IEditableCell {
  isEditable?: boolean
  checked?: boolean
}

const EditableCellCheckBox: VFC<IEditableCell> = ({ checked, isEditable }) => {
  if (isEditable) {
    return (
      <TableCell>
        <FormControlLabel control={<Checkbox checked={checked} />} label="Да/Нет" />
      </TableCell>
    )
  }

  return <TableCell>{checked ? <CheckIcon /> : <CloseIcon />}</TableCell>
}

export default EditableCellCheckBox
