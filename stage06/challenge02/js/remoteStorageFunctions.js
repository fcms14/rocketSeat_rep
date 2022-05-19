import { StorageFunctions } from "./storageFunctions.js";

export class RemoteStorageFunctions extends StorageFunctions {

    constructor(address, port) {
        super();
        this.address = address;
        this.port = port;
    }

    // method overriding
    async load() {
        this.favs = await fetch('./php/mysqlSelect.php', {})
            .then((response) => response.text())
            .then((text) => JSON.parse(text));
        return this.favs
    }

    // method overriding
    async add(value) {
        fetch(`./php/mysqlInsert.php`, {
            method: 'POST',
            body: JSON.stringify(value)
        });
        super.add(value);
        return await this.load();
    }

    //method overriding
    remove(value) {
        fetch(`./php/mysqlDelete.php?login=${(value)}`, {
            method: 'POST',
            body: JSON.stringify(value)
        })        
        super.remove(value);
        return this.favs;
    }
}

// .then((response) => response.text())
// .then((text) => {
//     console.log(text);
// });