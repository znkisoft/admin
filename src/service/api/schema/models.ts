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

export interface Userver {
  /**
   * TODO set primary key with option field
   * server base info
   */
  id: string;
  hostname: string;
  alias: string;
  ip: string;
  /** dial info */
  port: number;
  /** dial protocol to check if server is alive */
  protocol: string;
  /** check interval in seconds */
  checkInterval: number;
  /** timeout in seconds */
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

function createBaseUserver(): Userver {
  return { id: "", hostname: "", alias: "", ip: "", port: 0, protocol: "", checkInterval: 0, timeout: 0 };
}

export const Userver = {
  encode(message: Userver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(40).int32(message.port);
    }
    if (message.protocol !== "") {
      writer.uint32(50).string(message.protocol);
    }
    if (message.checkInterval !== 0) {
      writer.uint32(56).int32(message.checkInterval);
    }
    if (message.timeout !== 0) {
      writer.uint32(64).int32(message.timeout);
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
          message.hostname = reader.string();
          break;
        case 3:
          message.alias = reader.string();
          break;
        case 4:
          message.ip = reader.string();
          break;
        case 5:
          message.port = reader.int32();
          break;
        case 6:
          message.protocol = reader.string();
          break;
        case 7:
          message.checkInterval = reader.int32();
          break;
        case 8:
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
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      checkInterval: isSet(object.checkInterval) ? Number(object.checkInterval) : 0,
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
    };
  },

  toJSON(message: Userver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.alias !== undefined && (obj.alias = message.alias);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.checkInterval !== undefined && (obj.checkInterval = Math.round(message.checkInterval));
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Userver>, I>>(object: I): Userver {
    const message = createBaseUserver();
    message.id = object.id ?? "";
    message.hostname = object.hostname ?? "";
    message.alias = object.alias ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
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
