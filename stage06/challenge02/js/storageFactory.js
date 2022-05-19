import { local } from "./local.js";
import { StorageFunctions } from "./storageFunctions.js";
import { LocalStorageFunctions } from "./localStorageFunctions.js";
import { RemoteStorageFunctions } from "./remoteStorageFunctions.js";

export class StorageFactory {
    static createStorage(storage) {
        if(storage == "mySql"){
            return new RemoteStorageFunctions(local[storage].address, local[storage].port);
        }
        else if (storage == "localStorage") {
            return new LocalStorageFunctions(local[storage].address);
        }
        else {
            return new StorageFunctions();
        }
    }
}