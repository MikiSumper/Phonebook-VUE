class AddressItem {
    constructor(content) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
    }

    static fromJSON (json) {
        let addressItem = new AddressItem();
        addressItem.id = json.id;
        addressItem.content = json.content;

        return addressItem;
    }
}

export default AddressItem 