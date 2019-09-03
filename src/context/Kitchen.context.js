import React, { Component } from 'react'

export const KitchenContext = React.createContext();

export class KitchenProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList:JSON.parse(localStorage.getItem('lunch-make-products')) || [],
        }   
        this.onAddItem = this.onAddItem.bind(this);
        this.getItemsList = this.getItemsList.bind(this);
    }

    onAddItem(newItem) {
        let newData = this.state.itemList;
        newData.push(newItem);
        localStorage.setItem('lunch-make-products', JSON.stringify(newData));
        this.setState({
            itemList: newData
        })
    }

    getItemsList(){
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