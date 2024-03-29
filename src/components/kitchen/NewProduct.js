import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { KitchenContext } from '../../context/Kitchen.context';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const units = [{ value: 1, label: "Unidad" }, { value: 2, label: "Gramos (gr)" }, { value: 3, label: "Kilos (kg)" }, { value: 4, label: "Litros (lts)" }]

class NewProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: undefined,
            description: undefined,
            open:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event) {
        this.setState({
            unit: event.target.value
        })
    };

    onChangeText(event, attr){
        this.setState({
            [attr]: event.target.value
        })
    }

    onSubmit(){
        const context = this.props.context;
        context.onAddItem(this.state);
        this.setState({
            unit: '',
            description: '',
            unitValue: '',
            open: true
        })
    }
    handleClose(){
        this.setState({
            open:false
        })
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item >
                    <TextField
                        id="descripction"
                        label="Descripcion"
                        type="text"
                        onChange={(e)=>this.onChangeText(e,'description')}
                        value={this.state.description}
                        margin="normal"
                        variant="outlined"
                        helperText="Ingrese la descripcion del producto"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="selectPound"
                        select
                        label="Unidad"
                        onChange={this.handleChange}
                        value={this.state.unit}
                        margin="normal"
                        variant="outlined"
                        helperText="Seleccione la unidad de medida"
                    >
                        {units.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item>
                    <TextField
                        id="quantity"
                        label="Cantidad"
                        type="number"
                        margin="normal"
                        onChange={(e)=>this.onChangeText(e,'unitValue')}
                        value={this.state.unitValue}
                        variant="outlined"
                        helperText="Ingrese la cantidad disponible"
                    />
                </Grid>

                <Grid item>
                    <Button variant="contained" color="primary" size="large" style={{ marginTop: 20 }} 
                            disabled={!this.state.description || !this.state.unit || !this.state.unitValue}
                        onClick={this.onSubmit}>
                        Cargar
                    </Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        aria-describedby="client-snackbar"
                        className="success"
                        onClose={this.handleClose}
                        message={    
                                <span id="client-snackbar">
                                    <CheckCircleOutlineIcon/>
                                    Item Cargado Correctamente !!!
                                </span>}
                        />
                </Grid>
            </Grid>
        );
    }
}

export default () =>(
    <KitchenContext.Consumer>
        {context => { return <NewProduct context={context}/>}}
    </KitchenContext.Consumer>
);