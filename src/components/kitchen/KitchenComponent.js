import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NewProduct from './NewProduct';
import ProductList from './ProductList';

class KitchenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: undefined,
            open: true
        }
        this.onSitchList = this.onSitchList.bind(this);
    }

    onSitchList(){
        this.setState({
            open: !this.state.open
        })
    }
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
                        <NewProduct />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={this.state.open}>
                    <ExpansionPanelSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        onClick={this.onSitchList}
                        id="panel2a-header">
                        Stock Actual
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ProductList/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        );
    }
}

export default KitchenComponent;