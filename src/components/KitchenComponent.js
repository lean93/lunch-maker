import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


const units = [{value:1, label:"Unidad"}, {value:2, label:"Gramos (gr)"}, {value:3, label:"Kilos (kg)"},{value:4, label:"Litros (lts)"} ]

class KitchenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit:undefined
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            unit: event.target.value
        })
    };
    
    render() {
        
        return (
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"> 
                        Cargar Nuevo Producto
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                        <Grid item >
                            <TextField
                                id="descripction"
                                label="Descripcion"
                                type="text"
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
                                variant="outlined"
                                helperText="Ingrese la cantidad disponible"
                            />
                            </Grid>

                            <Grid item>
                            <Button variant="contained" color="primary" size="large"  style={{marginTop:20}}>
                                Cargar
                            </Button>
                            </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
            </React.Fragment>
            );
    }
}

export default KitchenComponent;