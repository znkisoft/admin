/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export enum PluginType {
  PLUGIN_TYPE_UNKNOWN = 0,
  UPTIME = 1,
  MEMORY = 2,
  CPU = 3,
  DISK = 4,
  NETWORK = 5,
  SYS_TIME = 6,
  UNRECOGNIZED = -1,
}

export function pluginTypeFromJSON(object: any): PluginType {
  switch (object) {
    case 0:
    case "PLUGIN_TYPE_UNKNOWN":
      return PluginType.PLUGIN_TYPE_UNKNOWN;
    case 1:
    case "UPTIME":
      return PluginType.UPTIME;
    case 2:
    case "MEMORY":
      return PluginType.MEMORY;
    case 3:
    case "CPU":
      return PluginType.CPU;
    case 4:
    case "DISK":
      return PluginType.DISK;
    case 5:
    case "NETWORK":
      return PluginType.NETWORK;
    case 6:
    case "SYS_TIME":
      return PluginType.SYS_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PluginType.UNRECOGNIZED;
  }
}

export function pluginTypeToJSON(object: PluginType): string {
  switch (object) {
    case PluginType.PLUGIN_TYPE_UNKNOWN:
      return "PLUGIN_TYPE_UNKNOWN";
    case PluginType.UPTIME:
      return "UPTIME";
    case PluginType.MEMORY:
      return "MEMORY";
    case PluginType.CPU:
      return "CPU";
    case PluginType.DISK:
      return "DISK";
    case PluginType.NETWORK:
      return "NETWORK";
    case PluginType.SYS_TIME:
      return "SYS_TIME";
    case PluginType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Ping {
  message: string;
}

export interface Userver {
  /** TODO set primary key with option field */
  id: string;
  name: string;
  ip: string;
  port: string;
  protocol: string;
  checkInterval: number;
  timeout: number;
}

export interface UptimeInfo {
  seconds: number;
}

export interface Id {
  uid: string;
}

export interface SysTimeInfo {
  time: Date | undefined;
}

function createBasePing(): Ping {
  return { message: "" };
}

export const Ping = {
  encode(message: Ping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ping {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ping>, I>>(object: I): Ping {
    const message = createBasePing();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUserver(): Userver {
  return { id: "", name: "", ip: "", port: "", protocol: "", checkInterval: 0, timeout: 0 };
}

export const Userver = {
  encode(message: Userver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.port !== "") {
      writer.uint32(34).string(message.port);
    }
    if (message.protocol !== "") {
      writer.uint32(42).string(message.protocol);
    }
    if (message.checkInterval !== 0) {
      writer.uint32(48).int32(message.checkInterval);
    }
    if (message.timeout !== 0) {
      writer.uint32(56).int32(message.timeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Userver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.ip = reader.string();
          break;
        case 4:
          message.port = reader.string();
          break;
        case 5:
          message.protocol = reader.string();
          break;
        case 6:
          message.checkInterval = reader.int32();
          break;
        case 7:
          message.timeout = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Userver {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? String(object.port) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      checkInterval: isSet(object.checkInterval) ? Number(object.checkInterval) : 0,
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
    };
  },

  toJSON(message: Userver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = message.port);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.checkInterval !== undefined && (obj.checkInterval = Math.round(message.checkInterval));
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Userver>, I>>(object: I): Userver {
    const message = createBaseUserver();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? "";
    message.protocol = object.protocol ?? "";
    message.checkInterval = object.checkInterval ?? 0;
    message.timeout = object.timeout ?? 0;
    return message;
  },
};

function createBaseUptimeInfo(): UptimeInfo {
  return { seconds: 0 };
}

export const UptimeInfo = {
  encode(message: UptimeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int32(message.seconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UptimeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UptimeInfo {
    return { seconds: isSet(object.seconds) ? Number(object.seconds) : 0 };
  },

  toJSON(message: UptimeInfo): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UptimeInfo>, I>>(object: I): UptimeInfo {
    const message = createBaseUptimeInfo();
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseId(): Id {
  return { uid: "" };
}

export const Id = {
  encode(message: Id, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Id {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Id {
    return { uid: isSet(object.uid) ? String(object.uid) : "" };
  },

  toJSON(message: Id): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Id>, I>>(object: I): Id {
    const message = createBaseId();
    message.uid = object.uid ?? "";
    return message;
  },
};

function createBaseSysTimeInfo(): SysTimeInfo {
  return { time: undefined };
}

export const SysTimeInfo = {
  encode(message: SysTimeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SysTimeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSysTimeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SysTimeInfo {
    return { time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined };
  },

  toJSON(message: SysTimeInfo): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SysTimeInfo>, I>>(object: I): SysTimeInfo {
    const message = createBaseSysTimeInfo();
    message.time = object.time ?? undefined;
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
