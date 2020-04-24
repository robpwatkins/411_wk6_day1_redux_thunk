import React from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Container, Menu, MenuItem, IconButton } from '@material-ui/core'
// import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

// const option = 'delete';

// const ITEM_HEIGHT = 5;

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

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
                                <IconButton
                                    aria-lable="delete"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <DeleteIcon color="secondary"/>
                                </IconButton>
                                {/* <Menu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            delete
                                        </MenuItem>
                                    </Menu> */}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import