import React from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Container, IconButton } from '@material-ui/core'
// import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

const Import = (props) => {

    return (
        <Container style={{padding: "25px 45px 45px 45px"}}>
            <Button
                onClick={props.fetchMakes}
                variant="contained"
                color="primary"
                style={{marginTop: "25px"}}
                >Import!
            </Button>
            <h2>Count: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => props.deleteMakes(index)}>
                                        <DeleteIcon color="secondary"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import