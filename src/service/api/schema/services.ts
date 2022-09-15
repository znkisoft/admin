/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Id, Userver } from "./models";
import { Pagination } from "./requests";
import { UserverResponse } from "./responses";

export const protobufPackage = "";

export interface UserverService {
  GerUservers(request: Pagination): Promise<UserverResponse>;
  GetUserverById(request: Id): Promise<Userver>;
  CreateUserver(request: Userver): Promise<Userver>;
  UpdateUserver(request: Userver): Promise<Userver>;
  DeleteUserver(request: Id): Promise<Userver>;
}

export class UserverServiceClientImpl implements UserverService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GerUservers = this.GerUservers.bind(this);
    this.GetUserverById = this.GetUserverById.bind(this);
    this.CreateUserver = this.CreateUserver.bind(this);
    this.UpdateUserver = this.UpdateUserver.bind(this);
    this.DeleteUserver = this.DeleteUserver.bind(this);
  }
  GerUservers(request: Pagination): Promise<UserverResponse> {
    const data = Pagination.encode(request).finish();
    const promise = this.rpc.request("UserverService", "GerUservers", data);
    return promise.then((data) => UserverResponse.decode(new _m0.Reader(data)));
  }

  GetUserverById(request: Id): Promise<Userver> {
    const data = Id.encode(request).finish();
    const promise = this.rpc.request("UserverService", "GetUserverById", data);
    return promise.then((data) => Userver.decode(new _m0.Reader(data)));
  }

  CreateUserver(request: Userver): Promise<Userver> {
    const data = Userver.encode(request).finish();
    const promise = this.rpc.request("UserverService", "CreateUserver", data);
    return promise.then((data) => Userver.decode(new _m0.Reader(data)));
  }

  UpdateUserver(request: Userver): Promise<Userver> {
    const data = Userver.encode(request).finish();
    const promise = this.rpc.request("UserverService", "UpdateUserver", data);
    return promise.then((data) => Userver.decode(new _m0.Reader(data)));
  }

  DeleteUserver(request: Id): Promise<Userver> {
    const data = Id.encode(request).finish();
    const promise = this.rpc.request("UserverService", "DeleteUserver", data);
    return promise.then((data) => Userver.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
