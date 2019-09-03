import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { KitchenContext } from '../../context/Kitchen.context';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: undefined
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            unit: event.target.value
        })
    };

    render() {
        const context = this.props.context;
        return (
            <Grid container spacing={3}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell> Description</TableCell>
                        <TableCell align="right">Cantidad Disponible</TableCell>
                        <TableCell align="right"> Vencimiento</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {context.getItemsList().map(row => (
                        <TableRow key={row.description}>
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">{row.unitValue}</TableCell>
                            <TableCell align="right">Algun Dia</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Grid>
        );
    }
}


export default () =>(
    <KitchenContext.Consumer>
        {context => { return <ProductList context={context}/>}}
    </KitchenContext.Consumer>
);