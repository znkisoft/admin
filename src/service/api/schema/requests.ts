/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PluginType, pluginTypeFromJSON, pluginTypeToJSON } from "./models";

export const protobufPackage = "";

export interface Pagination {
  skip: number;
  limit: number;
}

export interface ServerStatusRequest {
  serverId: string;
}

export interface PluginRequest {
  type: PluginType;
}

function createBasePagination(): Pagination {
  return { skip: 0, limit: 0 };
}

export const Pagination = {
  encode(message: Pagination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(8).int32(message.skip);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.int32();
          break;
        case 2:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      skip: isSet(object.skip) ? Number(object.skip) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = Math.round(message.skip));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(object: I): Pagination {
    const message = createBasePagination();
    message.skip = object.skip ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseServerStatusRequest(): ServerStatusRequest {
  return { serverId: "" };
}

export const ServerStatusRequest = {
  encode(message: ServerStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverId !== "") {
      writer.uint32(10).string(message.serverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerStatusRequest {
    return { serverId: isSet(object.serverId) ? String(object.serverId) : "" };
  },

  toJSON(message: ServerStatusRequest): unknown {
    const obj: any = {};
    message.serverId !== undefined && (obj.serverId = message.serverId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerStatusRequest>, I>>(object: I): ServerStatusRequest {
    const message = createBaseServerStatusRequest();
    message.serverId = object.serverId ?? "";
    return message;
  },
};

function createBasePluginRequest(): PluginRequest {
  return { type: 0 };
}

export const PluginRequest = {
  encode(message: PluginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginRequest {
    return { type: isSet(object.type) ? pluginTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: PluginRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = pluginTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PluginRequest>, I>>(object: I): PluginRequest {
    const message = createBasePluginRequest();
    message.type = object.type ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
