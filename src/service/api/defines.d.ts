import * as $protobuf from "protobufjs";
/** ServerStatus enum. */
export enum ServerStatus {
    SERVER_STATUS_UNKNOWN = 0,
    UP = 1,
    DOWN = 2
}

/** PluginType enum. */
export enum PluginType {
    PLUGIN_TYPE_UNKNOWN = 0,
    UPTIME = 1,
    MEMORY = 2,
    CPU = 3,
    DISK = 4,
    NETWORK = 5,
    SYS_TIME = 6
}

/** Properties of a Ping. */
export interface IPing {

    /** Ping message */
    message?: (string|null);
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /** Ping message. */
    public message: string;

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ping
     */
    public static fromObject(object: [ 'object' ].<string, any>): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a ServerInfo. */
export interface IServerInfo {

    /** ServerInfo name */
    name?: (string|null);

    /** ServerInfo ip */
    ip?: (string|null);

    /** ServerInfo port */
    port?: (string|null);

    /** ServerInfo protocol */
    protocol?: (string|null);

    /** ServerInfo check_interval */
    check_interval?: (number|null);

    /** ServerInfo timeout */
    timeout?: (number|null);
}

/** Represents a ServerInfo. */
export class ServerInfo implements IServerInfo {

    /**
     * Constructs a new ServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerInfo);

    /** ServerInfo name. */
    public name: string;

    /** ServerInfo ip. */
    public ip: string;

    /** ServerInfo port. */
    public port: string;

    /** ServerInfo protocol. */
    public protocol: string;

    /** ServerInfo check_interval. */
    public check_interval: number;

    /** ServerInfo timeout. */
    public timeout: number;

    /**
     * Creates a new ServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerInfo instance
     */
    public static create(properties?: IServerInfo): ServerInfo;

    /**
     * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @param message ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerInfo;

    /**
     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): ServerInfo;

    /**
     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
     * @param message ServerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ServerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UptimeInfo. */
export interface IUptimeInfo {

    /** UptimeInfo seconds */
    seconds?: (number|null);
}

/** Represents an UptimeInfo. */
export class UptimeInfo implements IUptimeInfo {

    /**
     * Constructs a new UptimeInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUptimeInfo);

    /** UptimeInfo seconds. */
    public seconds: number;

    /**
     * Creates a new UptimeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UptimeInfo instance
     */
    public static create(properties?: IUptimeInfo): UptimeInfo;

    /**
     * Encodes the specified UptimeInfo message. Does not implicitly {@link UptimeInfo.verify|verify} messages.
     * @param message UptimeInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUptimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UptimeInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UptimeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UptimeInfo;

    /**
     * Creates an UptimeInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UptimeInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): UptimeInfo;

    /**
     * Creates a plain object from an UptimeInfo message. Also converts values to other types if specified.
     * @param message UptimeInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UptimeInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UptimeInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a SysTimeInfo. */
export interface ISysTimeInfo {

    /** SysTimeInfo time */
    time?: (google.protobuf.ITimestamp|null);
}

/** Represents a SysTimeInfo. */
export class SysTimeInfo implements ISysTimeInfo {

    /**
     * Constructs a new SysTimeInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISysTimeInfo);

    /** SysTimeInfo time. */
    public time?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new SysTimeInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SysTimeInfo instance
     */
    public static create(properties?: ISysTimeInfo): SysTimeInfo;

    /**
     * Encodes the specified SysTimeInfo message. Does not implicitly {@link SysTimeInfo.verify|verify} messages.
     * @param message SysTimeInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISysTimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SysTimeInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SysTimeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysTimeInfo;

    /**
     * Creates a SysTimeInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SysTimeInfo
     */
    public static fromObject(object: [ 'object' ].<string, any>): SysTimeInfo;

    /**
     * Creates a plain object from a SysTimeInfo message. Also converts values to other types if specified.
     * @param message SysTimeInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SysTimeInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this SysTimeInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: [ 'object' ].<string, any>): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): [ 'object' ].<string, any>;
        }
    }
}

/** Properties of a ServerStatusRequest. */
export interface IServerStatusRequest {

    /** ServerStatusRequest server_id */
    server_id?: (string|null);
}

/** Represents a ServerStatusRequest. */
export class ServerStatusRequest implements IServerStatusRequest {

    /**
     * Constructs a new ServerStatusRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerStatusRequest);

    /** ServerStatusRequest server_id. */
    public server_id: string;

    /**
     * Creates a new ServerStatusRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerStatusRequest instance
     */
    public static create(properties?: IServerStatusRequest): ServerStatusRequest;

    /**
     * Encodes the specified ServerStatusRequest message. Does not implicitly {@link ServerStatusRequest.verify|verify} messages.
     * @param message ServerStatusRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerStatusRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerStatusRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerStatusRequest;

    /**
     * Creates a ServerStatusRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerStatusRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): ServerStatusRequest;

    /**
     * Creates a plain object from a ServerStatusRequest message. Also converts values to other types if specified.
     * @param message ServerStatusRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerStatusRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ServerStatusRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a ServerStatusResponse. */
export interface IServerStatusResponse {

    /** ServerStatusResponse status */
    status?: (ServerStatus|null);

    /** ServerStatusResponse last_updated */
    last_updated?: (google.protobuf.ITimestamp|null);
}

/** Represents a ServerStatusResponse. */
export class ServerStatusResponse implements IServerStatusResponse {

    /**
     * Constructs a new ServerStatusResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerStatusResponse);

    /** ServerStatusResponse status. */
    public status: ServerStatus;

    /** ServerStatusResponse last_updated. */
    public last_updated?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new ServerStatusResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerStatusResponse instance
     */
    public static create(properties?: IServerStatusResponse): ServerStatusResponse;

    /**
     * Encodes the specified ServerStatusResponse message. Does not implicitly {@link ServerStatusResponse.verify|verify} messages.
     * @param message ServerStatusResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerStatusResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerStatusResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerStatusResponse;

    /**
     * Creates a ServerStatusResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerStatusResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): ServerStatusResponse;

    /**
     * Creates a plain object from a ServerStatusResponse message. Also converts values to other types if specified.
     * @param message ServerStatusResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerStatusResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ServerStatusResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PluginRequest. */
export interface IPluginRequest {

    /** PluginRequest type */
    type?: (PluginType|null);
}

/** Represents a PluginRequest. */
export class PluginRequest implements IPluginRequest {

    /**
     * Constructs a new PluginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginRequest);

    /** PluginRequest type. */
    public type: PluginType;

    /**
     * Creates a new PluginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginRequest instance
     */
    public static create(properties?: IPluginRequest): PluginRequest;

    /**
     * Encodes the specified PluginRequest message. Does not implicitly {@link PluginRequest.verify|verify} messages.
     * @param message PluginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginRequest;

    /**
     * Creates a PluginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): PluginRequest;

    /**
     * Creates a plain object from a PluginRequest message. Also converts values to other types if specified.
     * @param message PluginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PluginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PluginResponse. */
export interface IPluginResponse {

    /** PluginResponse uptime_info */
    uptime_info?: (IUptimeInfo|null);

    /** PluginResponse sys_time_info */
    sys_time_info?: (ISysTimeInfo|null);
}

/** Represents a PluginResponse. */
export class PluginResponse implements IPluginResponse {

    /**
     * Constructs a new PluginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginResponse);

    /** PluginResponse uptime_info. */
    public uptime_info?: (IUptimeInfo|null);

    /** PluginResponse sys_time_info. */
    public sys_time_info?: (ISysTimeInfo|null);

    /** PluginResponse PluginInfo. */
    public PluginInfo?: ("uptime_info"|"sys_time_info");

    /**
     * Creates a new PluginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginResponse instance
     */
    public static create(properties?: IPluginResponse): PluginResponse;

    /**
     * Encodes the specified PluginResponse message. Does not implicitly {@link PluginResponse.verify|verify} messages.
     * @param message PluginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginResponse;

    /**
     * Creates a PluginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): PluginResponse;

    /**
     * Creates a plain object from a PluginResponse message. Also converts values to other types if specified.
     * @param message PluginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PluginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PluginListResponse. */
export interface IPluginListResponse {

    /** PluginListResponse plugins */
    plugins?: (string[]|null);
}

/** Represents a PluginListResponse. */
export class PluginListResponse implements IPluginListResponse {

    /**
     * Constructs a new PluginListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginListResponse);

    /** PluginListResponse plugins. */
    public plugins: [ 'Array' ].<string>;

    /**
     * Creates a new PluginListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginListResponse instance
     */
    public static create(properties?: IPluginListResponse): PluginListResponse;

    /**
     * Encodes the specified PluginListResponse message. Does not implicitly {@link PluginListResponse.verify|verify} messages.
     * @param message PluginListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginListResponse;

    /**
     * Creates a PluginListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginListResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): PluginListResponse;

    /**
     * Creates a plain object from a PluginListResponse message. Also converts values to other types if specified.
     * @param message PluginListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginListResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PluginListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
