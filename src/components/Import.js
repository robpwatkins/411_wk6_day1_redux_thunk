import React from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core'

const Import = (props) => {

    return (
        <Container style={{textAlign: "center"}}>
            <Button
                onClick={props.fetchMakes}
                variant="contained"
                color="primary"
                style={{marginTop: "25px"}}
                >Click ME!
            </Button>
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
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import