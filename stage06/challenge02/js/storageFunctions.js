export class StorageFunctions {
    constructor() {
        this.favs = [];
    }
    load() {
        return this.favs;
    }
    exists(value) {
        return !this.favs.find(l => value === l.login.toLowerCase());
    }
    add(value) {
        this.favs = [value, ...this.favs];
        return this.favs
    }
    remove(value) {
        this.favs = this.favs.filter(l => value !== l.login);
        return this.favs
    }
}