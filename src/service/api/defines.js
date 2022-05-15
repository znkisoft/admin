/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ServerStatus enum.
 * @exports ServerStatus
 * @enum {number}
 * @property {number} SERVER_STATUS_UNKNOWN=0 SERVER_STATUS_UNKNOWN value
 * @property {number} UP=1 UP value
 * @property {number} DOWN=2 DOWN value
 */
export const ServerStatus = ($root.ServerStatus = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "SERVER_STATUS_UNKNOWN")] = 0;
  values[(valuesById[1] = "UP")] = 1;
  values[(valuesById[2] = "DOWN")] = 2;
  return values;
})());

/**
 * PluginType enum.
 * @exports PluginType
 * @enum {number}
 * @property {number} PLUGIN_TYPE_UNKNOWN=0 PLUGIN_TYPE_UNKNOWN value
 * @property {number} UPTIME=1 UPTIME value
 * @property {number} MEMORY=2 MEMORY value
 * @property {number} CPU=3 CPU value
 * @property {number} DISK=4 DISK value
 * @property {number} NETWORK=5 NETWORK value
 * @property {number} SYS_TIME=6 SYS_TIME value
 */
export const PluginType = ($root.PluginType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "PLUGIN_TYPE_UNKNOWN")] = 0;
  values[(valuesById[1] = "UPTIME")] = 1;
  values[(valuesById[2] = "MEMORY")] = 2;
  values[(valuesById[3] = "CPU")] = 3;
  values[(valuesById[4] = "DISK")] = 4;
  values[(valuesById[5] = "NETWORK")] = 5;
  values[(valuesById[6] = "SYS_TIME")] = 6;
  return values;
})());

export const Ping = ($root.Ping = (() => {
  /**
   * Properties of a Ping.
   * @exports IPing
   * @interface IPing
   * @property {string|null} [message] Ping message
   */

  /**
   * Constructs a new Ping.
   * @exports Ping
   * @classdesc Represents a Ping.
   * @implements IPing
   * @constructor
   * @param {IPing=} [properties] Properties to set
   */
  function Ping(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Ping message.
   * @member {string} message
   * @memberof Ping
   * @instance
   */
  Ping.prototype.message = "";

  /**
   * Creates a new Ping instance using the specified properties.
   * @function create
   * @memberof Ping
   * @static
   * @param {IPing=} [properties] Properties to set
   * @returns {Ping} Ping instance
   */
  Ping.create = function create(properties) {
    return new Ping(properties);
  };

  /**
   * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
   * @function encode
   * @memberof Ping
   * @static
   * @param {IPing} message Ping message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Ping.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.message);
    return writer;
  };

  /**
   * Decodes a Ping message from the specified reader or buffer.
   * @function decode
   * @memberof Ping
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Ping} Ping
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Ping.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Ping();
    while (reader.pos < end) {
      let tag = reader.uint32();
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
  };

  /**
   * Creates a Ping message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Ping
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Ping} Ping
   */
  Ping.fromObject = function fromObject(object) {
    if (object instanceof $root.Ping) return object;
    let message = new $root.Ping();
    if (object.message != null) message.message = String(object.message);
    return message;
  };

  /**
   * Creates a plain object from a Ping message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Ping
   * @static
   * @param {Ping} message Ping
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Ping.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) object.message = "";
    if (message.message != null && message.hasOwnProperty("message")) object.message = message.message;
    return object;
  };

  /**
   * Converts this Ping to JSON.
   * @function toJSON
   * @memberof Ping
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Ping.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return Ping;
})());

export const ServerInfo = ($root.ServerInfo = (() => {
  /**
   * Properties of a ServerInfo.
   * @exports IServerInfo
   * @interface IServerInfo
   * @property {string|null} [name] ServerInfo name
   * @property {string|null} [ip] ServerInfo ip
   * @property {string|null} [port] ServerInfo port
   * @property {string|null} [protocol] ServerInfo protocol
   * @property {number|null} [check_interval] ServerInfo check_interval
   * @property {number|null} [timeout] ServerInfo timeout
   */

  /**
   * Constructs a new ServerInfo.
   * @exports ServerInfo
   * @classdesc Represents a ServerInfo.
   * @implements IServerInfo
   * @constructor
   * @param {IServerInfo=} [properties] Properties to set
   */
  function ServerInfo(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ServerInfo name.
   * @member {string} name
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.name = "";

  /**
   * ServerInfo ip.
   * @member {string} ip
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.ip = "";

  /**
   * ServerInfo port.
   * @member {string} port
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.port = "";

  /**
   * ServerInfo protocol.
   * @member {string} protocol
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.protocol = "";

  /**
   * ServerInfo check_interval.
   * @member {number} check_interval
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.check_interval = 0;

  /**
   * ServerInfo timeout.
   * @member {number} timeout
   * @memberof ServerInfo
   * @instance
   */
  ServerInfo.prototype.timeout = 0;

  /**
   * Creates a new ServerInfo instance using the specified properties.
   * @function create
   * @memberof ServerInfo
   * @static
   * @param {IServerInfo=} [properties] Properties to set
   * @returns {ServerInfo} ServerInfo instance
   */
  ServerInfo.create = function create(properties) {
    return new ServerInfo(properties);
  };

  /**
   * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
   * @function encode
   * @memberof ServerInfo
   * @static
   * @param {IServerInfo} message ServerInfo message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ServerInfo.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.ip);
    if (message.port != null && Object.hasOwnProperty.call(message, "port"))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.port);
    if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.protocol);
    if (message.check_interval != null && Object.hasOwnProperty.call(message, "check_interval"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.check_interval);
    if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
      writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.timeout);
    return writer;
  };

  /**
   * Decodes a ServerInfo message from the specified reader or buffer.
   * @function decode
   * @memberof ServerInfo
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ServerInfo} ServerInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ServerInfo.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ServerInfo();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.protocol = reader.string();
          break;
        case 5:
          message.check_interval = reader.int32();
          break;
        case 6:
          message.timeout = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ServerInfo
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ServerInfo} ServerInfo
   */
  ServerInfo.fromObject = function fromObject(object) {
    if (object instanceof $root.ServerInfo) return object;
    let message = new $root.ServerInfo();
    if (object.name != null) message.name = String(object.name);
    if (object.ip != null) message.ip = String(object.ip);
    if (object.port != null) message.port = String(object.port);
    if (object.protocol != null) message.protocol = String(object.protocol);
    if (object.check_interval != null) message.check_interval = object.check_interval | 0;
    if (object.timeout != null) message.timeout = object.timeout | 0;
    return message;
  };

  /**
   * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ServerInfo
   * @static
   * @param {ServerInfo} message ServerInfo
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ServerInfo.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) {
      object.name = "";
      object.ip = "";
      object.port = "";
      object.protocol = "";
      object.check_interval = 0;
      object.timeout = 0;
    }
    if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
    if (message.ip != null && message.hasOwnProperty("ip")) object.ip = message.ip;
    if (message.port != null && message.hasOwnProperty("port")) object.port = message.port;
    if (message.protocol != null && message.hasOwnProperty("protocol")) object.protocol = message.protocol;
    if (message.check_interval != null && message.hasOwnProperty("check_interval"))
      object.check_interval = message.check_interval;
    if (message.timeout != null && message.hasOwnProperty("timeout")) object.timeout = message.timeout;
    return object;
  };

  /**
   * Converts this ServerInfo to JSON.
   * @function toJSON
   * @memberof ServerInfo
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ServerInfo.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return ServerInfo;
})());

export const UptimeInfo = ($root.UptimeInfo = (() => {
  /**
   * Properties of an UptimeInfo.
   * @exports IUptimeInfo
   * @interface IUptimeInfo
   * @property {number|null} [seconds] UptimeInfo seconds
   */

  /**
   * Constructs a new UptimeInfo.
   * @exports UptimeInfo
   * @classdesc Represents an UptimeInfo.
   * @implements IUptimeInfo
   * @constructor
   * @param {IUptimeInfo=} [properties] Properties to set
   */
  function UptimeInfo(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * UptimeInfo seconds.
   * @member {number} seconds
   * @memberof UptimeInfo
   * @instance
   */
  UptimeInfo.prototype.seconds = 0;

  /**
   * Creates a new UptimeInfo instance using the specified properties.
   * @function create
   * @memberof UptimeInfo
   * @static
   * @param {IUptimeInfo=} [properties] Properties to set
   * @returns {UptimeInfo} UptimeInfo instance
   */
  UptimeInfo.create = function create(properties) {
    return new UptimeInfo(properties);
  };

  /**
   * Encodes the specified UptimeInfo message. Does not implicitly {@link UptimeInfo.verify|verify} messages.
   * @function encode
   * @memberof UptimeInfo
   * @static
   * @param {IUptimeInfo} message UptimeInfo message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  UptimeInfo.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.seconds);
    return writer;
  };

  /**
   * Decodes an UptimeInfo message from the specified reader or buffer.
   * @function decode
   * @memberof UptimeInfo
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {UptimeInfo} UptimeInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  UptimeInfo.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.UptimeInfo();
    while (reader.pos < end) {
      let tag = reader.uint32();
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
  };

  /**
   * Creates an UptimeInfo message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof UptimeInfo
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {UptimeInfo} UptimeInfo
   */
  UptimeInfo.fromObject = function fromObject(object) {
    if (object instanceof $root.UptimeInfo) return object;
    let message = new $root.UptimeInfo();
    if (object.seconds != null) message.seconds = object.seconds | 0;
    return message;
  };

  /**
   * Creates a plain object from an UptimeInfo message. Also converts values to other types if specified.
   * @function toObject
   * @memberof UptimeInfo
   * @static
   * @param {UptimeInfo} message UptimeInfo
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  UptimeInfo.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) object.seconds = 0;
    if (message.seconds != null && message.hasOwnProperty("seconds")) object.seconds = message.seconds;
    return object;
  };

  /**
   * Converts this UptimeInfo to JSON.
   * @function toJSON
   * @memberof UptimeInfo
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  UptimeInfo.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return UptimeInfo;
})());

export const SysTimeInfo = ($root.SysTimeInfo = (() => {
  /**
   * Properties of a SysTimeInfo.
   * @exports ISysTimeInfo
   * @interface ISysTimeInfo
   * @property {google.protobuf.ITimestamp|null} [time] SysTimeInfo time
   */

  /**
   * Constructs a new SysTimeInfo.
   * @exports SysTimeInfo
   * @classdesc Represents a SysTimeInfo.
   * @implements ISysTimeInfo
   * @constructor
   * @param {ISysTimeInfo=} [properties] Properties to set
   */
  function SysTimeInfo(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * SysTimeInfo time.
   * @member {google.protobuf.ITimestamp|null|undefined} time
   * @memberof SysTimeInfo
   * @instance
   */
  SysTimeInfo.prototype.time = null;

  /**
   * Creates a new SysTimeInfo instance using the specified properties.
   * @function create
   * @memberof SysTimeInfo
   * @static
   * @param {ISysTimeInfo=} [properties] Properties to set
   * @returns {SysTimeInfo} SysTimeInfo instance
   */
  SysTimeInfo.create = function create(properties) {
    return new SysTimeInfo(properties);
  };

  /**
   * Encodes the specified SysTimeInfo message. Does not implicitly {@link SysTimeInfo.verify|verify} messages.
   * @function encode
   * @memberof SysTimeInfo
   * @static
   * @param {ISysTimeInfo} message SysTimeInfo message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SysTimeInfo.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.time != null && Object.hasOwnProperty.call(message, "time"))
      $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
    return writer;
  };

  /**
   * Decodes a SysTimeInfo message from the specified reader or buffer.
   * @function decode
   * @memberof SysTimeInfo
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SysTimeInfo} SysTimeInfo
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SysTimeInfo.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.SysTimeInfo();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a SysTimeInfo message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SysTimeInfo
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SysTimeInfo} SysTimeInfo
   */
  SysTimeInfo.fromObject = function fromObject(object) {
    if (object instanceof $root.SysTimeInfo) return object;
    let message = new $root.SysTimeInfo();
    if (object.time != null) {
      if (typeof object.time !== "object") throw TypeError(".SysTimeInfo.time: object expected");
      message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
    }
    return message;
  };

  /**
   * Creates a plain object from a SysTimeInfo message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SysTimeInfo
   * @static
   * @param {SysTimeInfo} message SysTimeInfo
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SysTimeInfo.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) object.time = null;
    if (message.time != null && message.hasOwnProperty("time"))
      object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
    return object;
  };

  /**
   * Converts this SysTimeInfo to JSON.
   * @function toJSON
   * @memberof SysTimeInfo
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SysTimeInfo.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SysTimeInfo;
})());

export const google = ($root.google = (() => {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  const google = {};

  google.protobuf = (function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    const protobuf = {};

    protobuf.Timestamp = (function () {
      /**
       * Properties of a Timestamp.
       * @memberof google.protobuf
       * @interface ITimestamp
       * @property {number|Long|null} [seconds] Timestamp seconds
       * @property {number|null} [nanos] Timestamp nanos
       */

      /**
       * Constructs a new Timestamp.
       * @memberof google.protobuf
       * @classdesc Represents a Timestamp.
       * @implements ITimestamp
       * @constructor
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       */
      function Timestamp(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Timestamp seconds.
       * @member {number|Long} seconds
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Timestamp nanos.
       * @member {number} nanos
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.nanos = 0;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       * @returns {google.protobuf.Timestamp} Timestamp instance
       */
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Timestamp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
        if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
        return writer;
      };

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Timestamp} Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Timestamp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Timestamp();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.seconds = reader.int64();
              break;
            case 2:
              message.nanos = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Timestamp} Timestamp
       */
      Timestamp.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Timestamp) return object;
        let message = new $root.google.protobuf.Timestamp();
        if (object.seconds != null)
          if ($util.Long) (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
          else if (typeof object.seconds === "string") message.seconds = parseInt(object.seconds, 10);
          else if (typeof object.seconds === "number") message.seconds = object.seconds;
          else if (typeof object.seconds === "object")
            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
        if (object.nanos != null) message.nanos = object.nanos | 0;
        return message;
      };

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.Timestamp} message Timestamp
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Timestamp.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          if ($util.Long) {
            let long = new $util.Long(0, 0, false);
            object.seconds =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
          } else object.seconds = options.longs === String ? "0" : 0;
          object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty("seconds"))
          if (typeof message.seconds === "number")
            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
          else
            object.seconds =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.seconds)
                : options.longs === Number
                ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber()
                : message.seconds;
        if (message.nanos != null && message.hasOwnProperty("nanos")) object.nanos = message.nanos;
        return object;
      };

      /**
       * Converts this Timestamp to JSON.
       * @function toJSON
       * @memberof google.protobuf.Timestamp
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Timestamp;
    })();

    return protobuf;
  })();

  return google;
})());

export const ServerStatusRequest = ($root.ServerStatusRequest = (() => {
  /**
   * Properties of a ServerStatusRequest.
   * @exports IServerStatusRequest
   * @interface IServerStatusRequest
   * @property {string|null} [server_id] ServerStatusRequest server_id
   */

  /**
   * Constructs a new ServerStatusRequest.
   * @exports ServerStatusRequest
   * @classdesc Represents a ServerStatusRequest.
   * @implements IServerStatusRequest
   * @constructor
   * @param {IServerStatusRequest=} [properties] Properties to set
   */
  function ServerStatusRequest(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ServerStatusRequest server_id.
   * @member {string} server_id
   * @memberof ServerStatusRequest
   * @instance
   */
  ServerStatusRequest.prototype.server_id = "";

  /**
   * Creates a new ServerStatusRequest instance using the specified properties.
   * @function create
   * @memberof ServerStatusRequest
   * @static
   * @param {IServerStatusRequest=} [properties] Properties to set
   * @returns {ServerStatusRequest} ServerStatusRequest instance
   */
  ServerStatusRequest.create = function create(properties) {
    return new ServerStatusRequest(properties);
  };

  /**
   * Encodes the specified ServerStatusRequest message. Does not implicitly {@link ServerStatusRequest.verify|verify} messages.
   * @function encode
   * @memberof ServerStatusRequest
   * @static
   * @param {IServerStatusRequest} message ServerStatusRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ServerStatusRequest.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.server_id != null && Object.hasOwnProperty.call(message, "server_id"))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.server_id);
    return writer;
  };

  /**
   * Decodes a ServerStatusRequest message from the specified reader or buffer.
   * @function decode
   * @memberof ServerStatusRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ServerStatusRequest} ServerStatusRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ServerStatusRequest.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ServerStatusRequest();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.server_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a ServerStatusRequest message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ServerStatusRequest
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ServerStatusRequest} ServerStatusRequest
   */
  ServerStatusRequest.fromObject = function fromObject(object) {
    if (object instanceof $root.ServerStatusRequest) return object;
    let message = new $root.ServerStatusRequest();
    if (object.server_id != null) message.server_id = String(object.server_id);
    return message;
  };

  /**
   * Creates a plain object from a ServerStatusRequest message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ServerStatusRequest
   * @static
   * @param {ServerStatusRequest} message ServerStatusRequest
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ServerStatusRequest.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) object.server_id = "";
    if (message.server_id != null && message.hasOwnProperty("server_id")) object.server_id = message.server_id;
    return object;
  };

  /**
   * Converts this ServerStatusRequest to JSON.
   * @function toJSON
   * @memberof ServerStatusRequest
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ServerStatusRequest.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return ServerStatusRequest;
})());

export const ServerStatusResponse = ($root.ServerStatusResponse = (() => {
  /**
   * Properties of a ServerStatusResponse.
   * @exports IServerStatusResponse
   * @interface IServerStatusResponse
   * @property {ServerStatus|null} [status] ServerStatusResponse status
   * @property {google.protobuf.ITimestamp|null} [last_updated] ServerStatusResponse last_updated
   */

  /**
   * Constructs a new ServerStatusResponse.
   * @exports ServerStatusResponse
   * @classdesc Represents a ServerStatusResponse.
   * @implements IServerStatusResponse
   * @constructor
   * @param {IServerStatusResponse=} [properties] Properties to set
   */
  function ServerStatusResponse(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ServerStatusResponse status.
   * @member {ServerStatus} status
   * @memberof ServerStatusResponse
   * @instance
   */
  ServerStatusResponse.prototype.status = 0;

  /**
   * ServerStatusResponse last_updated.
   * @member {google.protobuf.ITimestamp|null|undefined} last_updated
   * @memberof ServerStatusResponse
   * @instance
   */
  ServerStatusResponse.prototype.last_updated = null;

  /**
   * Creates a new ServerStatusResponse instance using the specified properties.
   * @function create
   * @memberof ServerStatusResponse
   * @static
   * @param {IServerStatusResponse=} [properties] Properties to set
   * @returns {ServerStatusResponse} ServerStatusResponse instance
   */
  ServerStatusResponse.create = function create(properties) {
    return new ServerStatusResponse(properties);
  };

  /**
   * Encodes the specified ServerStatusResponse message. Does not implicitly {@link ServerStatusResponse.verify|verify} messages.
   * @function encode
   * @memberof ServerStatusResponse
   * @static
   * @param {IServerStatusResponse} message ServerStatusResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ServerStatusResponse.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.status);
    if (message.last_updated != null && Object.hasOwnProperty.call(message, "last_updated"))
      $root.google.protobuf.Timestamp.encode(
        message.last_updated,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Decodes a ServerStatusResponse message from the specified reader or buffer.
   * @function decode
   * @memberof ServerStatusResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ServerStatusResponse} ServerStatusResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ServerStatusResponse.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ServerStatusResponse();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.last_updated = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a ServerStatusResponse message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ServerStatusResponse
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ServerStatusResponse} ServerStatusResponse
   */
  ServerStatusResponse.fromObject = function fromObject(object) {
    if (object instanceof $root.ServerStatusResponse) return object;
    let message = new $root.ServerStatusResponse();
    switch (object.status) {
      case "SERVER_STATUS_UNKNOWN":
      case 0:
        message.status = 0;
        break;
      case "UP":
      case 1:
        message.status = 1;
        break;
      case "DOWN":
      case 2:
        message.status = 2;
        break;
    }
    if (object.last_updated != null) {
      if (typeof object.last_updated !== "object")
        throw TypeError(".ServerStatusResponse.last_updated: object expected");
      message.last_updated = $root.google.protobuf.Timestamp.fromObject(object.last_updated);
    }
    return message;
  };

  /**
   * Creates a plain object from a ServerStatusResponse message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ServerStatusResponse
   * @static
   * @param {ServerStatusResponse} message ServerStatusResponse
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ServerStatusResponse.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) {
      object.status = options.enums === String ? "SERVER_STATUS_UNKNOWN" : 0;
      object.last_updated = null;
    }
    if (message.status != null && message.hasOwnProperty("status"))
      object.status = options.enums === String ? $root.ServerStatus[message.status] : message.status;
    if (message.last_updated != null && message.hasOwnProperty("last_updated"))
      object.last_updated = $root.google.protobuf.Timestamp.toObject(message.last_updated, options);
    return object;
  };

  /**
   * Converts this ServerStatusResponse to JSON.
   * @function toJSON
   * @memberof ServerStatusResponse
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ServerStatusResponse.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return ServerStatusResponse;
})());

export const PluginRequest = ($root.PluginRequest = (() => {
  /**
   * Properties of a PluginRequest.
   * @exports IPluginRequest
   * @interface IPluginRequest
   * @property {PluginType|null} [type] PluginRequest type
   */

  /**
   * Constructs a new PluginRequest.
   * @exports PluginRequest
   * @classdesc Represents a PluginRequest.
   * @implements IPluginRequest
   * @constructor
   * @param {IPluginRequest=} [properties] Properties to set
   */
  function PluginRequest(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * PluginRequest type.
   * @member {PluginType} type
   * @memberof PluginRequest
   * @instance
   */
  PluginRequest.prototype.type = 0;

  /**
   * Creates a new PluginRequest instance using the specified properties.
   * @function create
   * @memberof PluginRequest
   * @static
   * @param {IPluginRequest=} [properties] Properties to set
   * @returns {PluginRequest} PluginRequest instance
   */
  PluginRequest.create = function create(properties) {
    return new PluginRequest(properties);
  };

  /**
   * Encodes the specified PluginRequest message. Does not implicitly {@link PluginRequest.verify|verify} messages.
   * @function encode
   * @memberof PluginRequest
   * @static
   * @param {IPluginRequest} message PluginRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  PluginRequest.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
    return writer;
  };

  /**
   * Decodes a PluginRequest message from the specified reader or buffer.
   * @function decode
   * @memberof PluginRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {PluginRequest} PluginRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  PluginRequest.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.PluginRequest();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a PluginRequest message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof PluginRequest
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {PluginRequest} PluginRequest
   */
  PluginRequest.fromObject = function fromObject(object) {
    if (object instanceof $root.PluginRequest) return object;
    let message = new $root.PluginRequest();
    switch (object.type) {
      case "PLUGIN_TYPE_UNKNOWN":
      case 0:
        message.type = 0;
        break;
      case "UPTIME":
      case 1:
        message.type = 1;
        break;
      case "MEMORY":
      case 2:
        message.type = 2;
        break;
      case "CPU":
      case 3:
        message.type = 3;
        break;
      case "DISK":
      case 4:
        message.type = 4;
        break;
      case "NETWORK":
      case 5:
        message.type = 5;
        break;
      case "SYS_TIME":
      case 6:
        message.type = 6;
        break;
    }
    return message;
  };

  /**
   * Creates a plain object from a PluginRequest message. Also converts values to other types if specified.
   * @function toObject
   * @memberof PluginRequest
   * @static
   * @param {PluginRequest} message PluginRequest
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  PluginRequest.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.defaults) object.type = options.enums === String ? "PLUGIN_TYPE_UNKNOWN" : 0;
    if (message.type != null && message.hasOwnProperty("type"))
      object.type = options.enums === String ? $root.PluginType[message.type] : message.type;
    return object;
  };

  /**
   * Converts this PluginRequest to JSON.
   * @function toJSON
   * @memberof PluginRequest
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  PluginRequest.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return PluginRequest;
})());

export const PluginResponse = ($root.PluginResponse = (() => {
  /**
   * Properties of a PluginResponse.
   * @exports IPluginResponse
   * @interface IPluginResponse
   * @property {IUptimeInfo|null} [uptime_info] PluginResponse uptime_info
   * @property {ISysTimeInfo|null} [sys_time_info] PluginResponse sys_time_info
   */

  /**
   * Constructs a new PluginResponse.
   * @exports PluginResponse
   * @classdesc Represents a PluginResponse.
   * @implements IPluginResponse
   * @constructor
   * @param {IPluginResponse=} [properties] Properties to set
   */
  function PluginResponse(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * PluginResponse uptime_info.
   * @member {IUptimeInfo|null|undefined} uptime_info
   * @memberof PluginResponse
   * @instance
   */
  PluginResponse.prototype.uptime_info = null;

  /**
   * PluginResponse sys_time_info.
   * @member {ISysTimeInfo|null|undefined} sys_time_info
   * @memberof PluginResponse
   * @instance
   */
  PluginResponse.prototype.sys_time_info = null;

  // OneOf field names bound to virtual getters and setters
  let $oneOfFields;

  /**
   * PluginResponse PluginInfo.
   * @member {"uptime_info"|"sys_time_info"|undefined} PluginInfo
   * @memberof PluginResponse
   * @instance
   */
  Object.defineProperty(PluginResponse.prototype, "PluginInfo", {
    get: $util.oneOfGetter(($oneOfFields = ["uptime_info", "sys_time_info"])),
    set: $util.oneOfSetter($oneOfFields),
  });

  /**
   * Creates a new PluginResponse instance using the specified properties.
   * @function create
   * @memberof PluginResponse
   * @static
   * @param {IPluginResponse=} [properties] Properties to set
   * @returns {PluginResponse} PluginResponse instance
   */
  PluginResponse.create = function create(properties) {
    return new PluginResponse(properties);
  };

  /**
   * Encodes the specified PluginResponse message. Does not implicitly {@link PluginResponse.verify|verify} messages.
   * @function encode
   * @memberof PluginResponse
   * @static
   * @param {IPluginResponse} message PluginResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  PluginResponse.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.uptime_info != null && Object.hasOwnProperty.call(message, "uptime_info"))
      $root.UptimeInfo.encode(message.uptime_info, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
    if (message.sys_time_info != null && Object.hasOwnProperty.call(message, "sys_time_info"))
      $root.SysTimeInfo.encode(message.sys_time_info, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
    return writer;
  };

  /**
   * Decodes a PluginResponse message from the specified reader or buffer.
   * @function decode
   * @memberof PluginResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {PluginResponse} PluginResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  PluginResponse.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.PluginResponse();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptime_info = $root.UptimeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.sys_time_info = $root.SysTimeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a PluginResponse message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof PluginResponse
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {PluginResponse} PluginResponse
   */
  PluginResponse.fromObject = function fromObject(object) {
    if (object instanceof $root.PluginResponse) return object;
    let message = new $root.PluginResponse();
    if (object.uptime_info != null) {
      if (typeof object.uptime_info !== "object") throw TypeError(".PluginResponse.uptime_info: object expected");
      message.uptime_info = $root.UptimeInfo.fromObject(object.uptime_info);
    }
    if (object.sys_time_info != null) {
      if (typeof object.sys_time_info !== "object") throw TypeError(".PluginResponse.sys_time_info: object expected");
      message.sys_time_info = $root.SysTimeInfo.fromObject(object.sys_time_info);
    }
    return message;
  };

  /**
   * Creates a plain object from a PluginResponse message. Also converts values to other types if specified.
   * @function toObject
   * @memberof PluginResponse
   * @static
   * @param {PluginResponse} message PluginResponse
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  PluginResponse.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (message.uptime_info != null && message.hasOwnProperty("uptime_info")) {
      object.uptime_info = $root.UptimeInfo.toObject(message.uptime_info, options);
      if (options.oneofs) object.PluginInfo = "uptime_info";
    }
    if (message.sys_time_info != null && message.hasOwnProperty("sys_time_info")) {
      object.sys_time_info = $root.SysTimeInfo.toObject(message.sys_time_info, options);
      if (options.oneofs) object.PluginInfo = "sys_time_info";
    }
    return object;
  };

  /**
   * Converts this PluginResponse to JSON.
   * @function toJSON
   * @memberof PluginResponse
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  PluginResponse.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return PluginResponse;
})());

export const PluginListResponse = ($root.PluginListResponse = (() => {
  /**
   * Properties of a PluginListResponse.
   * @exports IPluginListResponse
   * @interface IPluginListResponse
   * @property {Array.<string>|null} [plugins] PluginListResponse plugins
   */

  /**
   * Constructs a new PluginListResponse.
   * @exports PluginListResponse
   * @classdesc Represents a PluginListResponse.
   * @implements IPluginListResponse
   * @constructor
   * @param {IPluginListResponse=} [properties] Properties to set
   */
  function PluginListResponse(properties) {
    this.plugins = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * PluginListResponse plugins.
   * @member {Array.<string>} plugins
   * @memberof PluginListResponse
   * @instance
   */
  PluginListResponse.prototype.plugins = $util.emptyArray;

  /**
   * Creates a new PluginListResponse instance using the specified properties.
   * @function create
   * @memberof PluginListResponse
   * @static
   * @param {IPluginListResponse=} [properties] Properties to set
   * @returns {PluginListResponse} PluginListResponse instance
   */
  PluginListResponse.create = function create(properties) {
    return new PluginListResponse(properties);
  };

  /**
   * Encodes the specified PluginListResponse message. Does not implicitly {@link PluginListResponse.verify|verify} messages.
   * @function encode
   * @memberof PluginListResponse
   * @static
   * @param {IPluginListResponse} message PluginListResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  PluginListResponse.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.plugins != null && message.plugins.length)
      for (let i = 0; i < message.plugins.length; ++i)
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.plugins[i]);
    return writer;
  };

  /**
   * Decodes a PluginListResponse message from the specified reader or buffer.
   * @function decode
   * @memberof PluginListResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {PluginListResponse} PluginListResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  PluginListResponse.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.PluginListResponse();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (!(message.plugins && message.plugins.length)) message.plugins = [];
          message.plugins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Creates a PluginListResponse message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof PluginListResponse
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {PluginListResponse} PluginListResponse
   */
  PluginListResponse.fromObject = function fromObject(object) {
    if (object instanceof $root.PluginListResponse) return object;
    let message = new $root.PluginListResponse();
    if (object.plugins) {
      if (!Array.isArray(object.plugins)) throw TypeError(".PluginListResponse.plugins: array expected");
      message.plugins = [];
      for (let i = 0; i < object.plugins.length; ++i) message.plugins[i] = String(object.plugins[i]);
    }
    return message;
  };

  /**
   * Creates a plain object from a PluginListResponse message. Also converts values to other types if specified.
   * @function toObject
   * @memberof PluginListResponse
   * @static
   * @param {PluginListResponse} message PluginListResponse
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  PluginListResponse.toObject = function toObject(message, options) {
    if (!options) options = {};
    let object = {};
    if (options.arrays || options.defaults) object.plugins = [];
    if (message.plugins && message.plugins.length) {
      object.plugins = [];
      for (let j = 0; j < message.plugins.length; ++j) object.plugins[j] = message.plugins[j];
    }
    return object;
  };

  /**
   * Converts this PluginListResponse to JSON.
   * @function toJSON
   * @memberof PluginListResponse
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  PluginListResponse.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return PluginListResponse;
})());

export { $root as default };
