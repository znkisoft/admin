/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { SysTimeInfo, UptimeInfo, Userver } from "./models";

export const protobufPackage = "";

export interface ServerStatusResponse {
  status: ServerStatusResponse_Status;
  lastUpdated: Date | undefined;
}

export enum ServerStatusResponse_Status {
  SERVER_STATUS_UNKNOWN = 0,
  UP = 1,
  DOWN = 2,
  UNRECOGNIZED = -1,
}

export function serverStatusResponse_StatusFromJSON(object: any): ServerStatusResponse_Status {
  switch (object) {
    case 0:
    case "SERVER_STATUS_UNKNOWN":
      return ServerStatusResponse_Status.SERVER_STATUS_UNKNOWN;
    case 1:
    case "UP":
      return ServerStatusResponse_Status.UP;
    case 2:
    case "DOWN":
      return ServerStatusResponse_Status.DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServerStatusResponse_Status.UNRECOGNIZED;
  }
}

export function serverStatusResponse_StatusToJSON(object: ServerStatusResponse_Status): string {
  switch (object) {
    case ServerStatusResponse_Status.SERVER_STATUS_UNKNOWN:
      return "SERVER_STATUS_UNKNOWN";
    case ServerStatusResponse_Status.UP:
      return "UP";
    case ServerStatusResponse_Status.DOWN:
      return "DOWN";
    case ServerStatusResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PluginResponse {
  uptimeInfo: UptimeInfo | undefined;
  sysTimeInfo: SysTimeInfo | undefined;
}

export interface PluginListResponse {
  plugins: string[];
}

export interface UserverResponse {
  uservers: Userver[];
}

function createBaseServerStatusResponse(): ServerStatusResponse {
  return { status: 0, lastUpdated: undefined };
}

export const ServerStatusResponse = {
  encode(message: ServerStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.lastUpdated !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdated), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.lastUpdated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerStatusResponse {
    return {
      status: isSet(object.status) ? serverStatusResponse_StatusFromJSON(object.status) : 0,
      lastUpdated: isSet(object.lastUpdated) ? fromJsonTimestamp(object.lastUpdated) : undefined,
    };
  },

  toJSON(message: ServerStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = serverStatusResponse_StatusToJSON(message.status));
    message.lastUpdated !== undefined && (obj.lastUpdated = message.lastUpdated.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerStatusResponse>, I>>(object: I): ServerStatusResponse {
    const message = createBaseServerStatusResponse();
    message.status = object.status ?? 0;
    message.lastUpdated = object.lastUpdated ?? undefined;
    return message;
  },
};

function createBasePluginResponse(): PluginResponse {
  return { uptimeInfo: undefined, sysTimeInfo: undefined };
}

export const PluginResponse = {
  encode(message: PluginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uptimeInfo !== undefined) {
      UptimeInfo.encode(message.uptimeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.sysTimeInfo !== undefined) {
      SysTimeInfo.encode(message.sysTimeInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptimeInfo = UptimeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.sysTimeInfo = SysTimeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginResponse {
    return {
      uptimeInfo: isSet(object.uptimeInfo) ? UptimeInfo.fromJSON(object.uptimeInfo) : undefined,
      sysTimeInfo: isSet(object.sysTimeInfo) ? SysTimeInfo.fromJSON(object.sysTimeInfo) : undefined,
    };
  },

  toJSON(message: PluginResponse): unknown {
    const obj: any = {};
    message.uptimeInfo !== undefined &&
      (obj.uptimeInfo = message.uptimeInfo ? UptimeInfo.toJSON(message.uptimeInfo) : undefined);
    message.sysTimeInfo !== undefined &&
      (obj.sysTimeInfo = message.sysTimeInfo ? SysTimeInfo.toJSON(message.sysTimeInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PluginResponse>, I>>(object: I): PluginResponse {
    const message = createBasePluginResponse();
    message.uptimeInfo = (object.uptimeInfo !== undefined && object.uptimeInfo !== null)
      ? UptimeInfo.fromPartial(object.uptimeInfo)
      : undefined;
    message.sysTimeInfo = (object.sysTimeInfo !== undefined && object.sysTimeInfo !== null)
      ? SysTimeInfo.fromPartial(object.sysTimeInfo)
      : undefined;
    return message;
  },
};

function createBasePluginListResponse(): PluginListResponse {
  return { plugins: [] };
}

export const PluginListResponse = {
  encode(message: PluginListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plugins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginListResponse {
    return { plugins: Array.isArray(object?.plugins) ? object.plugins.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PluginListResponse): unknown {
    const obj: any = {};
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) => e);
    } else {
      obj.plugins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PluginListResponse>, I>>(object: I): PluginListResponse {
    const message = createBasePluginListResponse();
    message.plugins = object.plugins?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserverResponse(): UserverResponse {
  return { uservers: [] };
}

export const UserverResponse = {
  encode(message: UserverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uservers) {
      Userver.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uservers.push(Userver.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserverResponse {
    return { uservers: Array.isArray(object?.uservers) ? object.uservers.map((e: any) => Userver.fromJSON(e)) : [] };
  },

  toJSON(message: UserverResponse): unknown {
    const obj: any = {};
    if (message.uservers) {
      obj.uservers = message.uservers.map((e) => e ? Userver.toJSON(e) : undefined);
    } else {
      obj.uservers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserverResponse>, I>>(object: I): UserverResponse {
    const message = createBaseUserverResponse();
    message.uservers = object.uservers?.map((e) => Userver.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
