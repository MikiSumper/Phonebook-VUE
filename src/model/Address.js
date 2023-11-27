import AddressItem from "./AddressItem";

class Address {
    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('address-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('address-data');

        if(json === null) {
            return [];
        }

        let jsonParsed = JSON.parse(json)

        if(jsonParsed.length === 0)
        return [];

        let addressItems = [];

        for (let i=0; i<jsonParsed.length; i++) {
            addressItems.push(AddressItem.fromJSON(jsonParsed[i]));
        }

        return addressItems;
    }
}

export default Address