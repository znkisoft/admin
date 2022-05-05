import { LOCAL_STORAGE_VERSION } from "./constant";

export class LocalStorageService {
  private readonly STORE_KEY = "__store__";
  private data: { [key: string]: any } = {};

  setItem(key: string, value: object, isolateFromData = false): void {
    if (isolateFromData) {
      this.storeDataOnly(key, value);
    } else {
      this.data[key] = value;
      this.store();
    }
  }

  getItem(key: string, isolateFromData = false): object | undefined {
    if (isolateFromData) {
      const dataStr = localStorage.getItem(key);
      if (dataStr) {
        return JSON.parse(dataStr);
      } else {
        return undefined;
      }
    } else {
      return this.data[key];
    }
  }

  deleteItem(key: string): void {
    delete this.data[key];
    this.store();
  }

  private store() {
    const versionedData = {
      data: this.data,
      version: LOCAL_STORAGE_VERSION,
    };
    try {
      this.storeDataOnly(this.STORE_KEY, versionedData);
    } catch (e) {
      console.warn(e);
    }
  }

  private storeDataOnly(key: string, data: unknown): void {
    const dataStr = JSON.stringify(data);
    localStorage.setItem(key, dataStr);
  }

  private checkStorageVersion() {
    const dataStr = localStorage.getItem(this.STORE_KEY);
    let versionedData: { [key: string]: any } = {
      data: {},
    };
    if (dataStr) {
      versionedData = JSON.parse(dataStr);
      if (!versionedData || versionedData["version"] !== LOCAL_STORAGE_VERSION) {
        versionedData = {
          data: {},
        };
      }
    }
    this.data = versionedData["data"];
    this.store();
  }
}
