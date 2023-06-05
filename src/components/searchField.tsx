import { Input, Box } from '@mui/material'
import * as React from 'react'

interface ISearchField{
    value: string
    onChange: React.ChangeEvent
}


const searchField: React.FC<ISearchField> = ({value, onChange}) => {

    return(
        <Box>
            <Input></Input>
        </Box>
    )
}

export default searchField