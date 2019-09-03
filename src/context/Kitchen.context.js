import React, { Component } from 'react'

export const KitchenContext = React.createContext();

export class KitchenProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList:[]
        }   
        this.onAddItem = this.onAddItem.bind(this);
        this.getItemsList = this.getItemsList.bind(this);
    }

    onAddItem(newItem) {
        console.log(newItem);
        let newData = this.state.itemList;
        newData.push(newItem);
        this.setState({
            itemList: newData
        })
    }

    getItemsList(){
        console.log(this.state.itemList);
        return this.state.itemList || [];
    }

    render() {
        return (
            <KitchenContext.Provider value={{
                onAddItem: this.onAddItem,
                getItemsList: this.getItemsList,
            }}>
                {this.props.children}
            </KitchenContext.Provider>
        );
    }
}