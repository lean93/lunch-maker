import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
                   <TextField
                        id="descripction"
                        label="Descripcion"
                        type="text"
                        margin="normal"
                        style={{margin:10}}
                        variant="outlined"
                        helperText="Ingrese la descripcion del producto"
                    />
                    <TextField
                        id="selectPound"
                        select
                        label="Unidad"
                        onChange={this.handleChange}
                        value={this.state.unit}
                        margin="normal"
                        style={{margin:10}}
                        variant="outlined"
                        helperText="Seleccione la unidad de medida"
                    >
                        {units.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="quantity"
                        label="Cantidad"
                        type="number"
                        style={{margin:10}}
                        margin="normal"
                        variant="outlined"
                        helperText="Ingrese la cantidad disponible"
                    />
            </React.Fragment>
            );
    }
}

export default KitchenComponent;