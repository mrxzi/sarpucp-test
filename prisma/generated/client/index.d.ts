
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PlayerUCP
 * Existing table from the game database
 */
export type PlayerUCP = $Result.DefaultSelection<Prisma.$PlayerUCPPayload>
/**
 * Model WebUCP
 * New table for web UCP
 */
export type WebUCP = $Result.DefaultSelection<Prisma.$WebUCPPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PlayerUCPS
 * const playerUCPS = await prisma.playerUCP.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PlayerUCPS
   * const playerUCPS = await prisma.playerUCP.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.playerUCP`: Exposes CRUD operations for the **PlayerUCP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerUCPS
    * const playerUCPS = await prisma.playerUCP.findMany()
    * ```
    */
  get playerUCP(): Prisma.PlayerUCPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webUCP`: Exposes CRUD operations for the **WebUCP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebUCPS
    * const webUCPS = await prisma.webUCP.findMany()
    * ```
    */
  get webUCP(): Prisma.WebUCPDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PlayerUCP: 'PlayerUCP',
    WebUCP: 'WebUCP'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "playerUCP" | "webUCP"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PlayerUCP: {
        payload: Prisma.$PlayerUCPPayload<ExtArgs>
        fields: Prisma.PlayerUCPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerUCPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerUCPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          findFirst: {
            args: Prisma.PlayerUCPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerUCPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          findMany: {
            args: Prisma.PlayerUCPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>[]
          }
          create: {
            args: Prisma.PlayerUCPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          createMany: {
            args: Prisma.PlayerUCPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerUCPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          update: {
            args: Prisma.PlayerUCPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          deleteMany: {
            args: Prisma.PlayerUCPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUCPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUCPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerUCPPayload>
          }
          aggregate: {
            args: Prisma.PlayerUCPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerUCP>
          }
          groupBy: {
            args: Prisma.PlayerUCPGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerUCPGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerUCPCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerUCPCountAggregateOutputType> | number
          }
        }
      }
      WebUCP: {
        payload: Prisma.$WebUCPPayload<ExtArgs>
        fields: Prisma.WebUCPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebUCPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebUCPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          findFirst: {
            args: Prisma.WebUCPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebUCPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          findMany: {
            args: Prisma.WebUCPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>[]
          }
          create: {
            args: Prisma.WebUCPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          createMany: {
            args: Prisma.WebUCPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WebUCPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          update: {
            args: Prisma.WebUCPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          deleteMany: {
            args: Prisma.WebUCPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebUCPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebUCPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebUCPPayload>
          }
          aggregate: {
            args: Prisma.WebUCPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebUCP>
          }
          groupBy: {
            args: Prisma.WebUCPGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebUCPGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebUCPCountArgs<ExtArgs>
            result: $Utils.Optional<WebUCPCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    playerUCP?: PlayerUCPOmit
    webUCP?: WebUCPOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PlayerUCP
   */

  export type AggregatePlayerUCP = {
    _count: PlayerUCPCountAggregateOutputType | null
    _avg: PlayerUCPAvgAggregateOutputType | null
    _sum: PlayerUCPSumAggregateOutputType | null
    _min: PlayerUCPMinAggregateOutputType | null
    _max: PlayerUCPMaxAggregateOutputType | null
  }

  export type PlayerUCPAvgAggregateOutputType = {
    ID: number | null
    verifycode: number | null
    extrac: number | null
    reedem: number | null
  }

  export type PlayerUCPSumAggregateOutputType = {
    ID: number | null
    verifycode: number | null
    extrac: number | null
    reedem: number | null
  }

  export type PlayerUCPMinAggregateOutputType = {
    ID: number | null
    ucp: string | null
    verifycode: number | null
    DiscordID: string | null
    password: string | null
    salt: string | null
    extrac: number | null
    reedem: number | null
  }

  export type PlayerUCPMaxAggregateOutputType = {
    ID: number | null
    ucp: string | null
    verifycode: number | null
    DiscordID: string | null
    password: string | null
    salt: string | null
    extrac: number | null
    reedem: number | null
  }

  export type PlayerUCPCountAggregateOutputType = {
    ID: number
    ucp: number
    verifycode: number
    DiscordID: number
    password: number
    salt: number
    extrac: number
    reedem: number
    _all: number
  }


  export type PlayerUCPAvgAggregateInputType = {
    ID?: true
    verifycode?: true
    extrac?: true
    reedem?: true
  }

  export type PlayerUCPSumAggregateInputType = {
    ID?: true
    verifycode?: true
    extrac?: true
    reedem?: true
  }

  export type PlayerUCPMinAggregateInputType = {
    ID?: true
    ucp?: true
    verifycode?: true
    DiscordID?: true
    password?: true
    salt?: true
    extrac?: true
    reedem?: true
  }

  export type PlayerUCPMaxAggregateInputType = {
    ID?: true
    ucp?: true
    verifycode?: true
    DiscordID?: true
    password?: true
    salt?: true
    extrac?: true
    reedem?: true
  }

  export type PlayerUCPCountAggregateInputType = {
    ID?: true
    ucp?: true
    verifycode?: true
    DiscordID?: true
    password?: true
    salt?: true
    extrac?: true
    reedem?: true
    _all?: true
  }

  export type PlayerUCPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerUCP to aggregate.
     */
    where?: PlayerUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerUCPS to fetch.
     */
    orderBy?: PlayerUCPOrderByWithRelationInput | PlayerUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerUCPS
    **/
    _count?: true | PlayerUCPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerUCPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerUCPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerUCPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerUCPMaxAggregateInputType
  }

  export type GetPlayerUCPAggregateType<T extends PlayerUCPAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerUCP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerUCP[P]>
      : GetScalarType<T[P], AggregatePlayerUCP[P]>
  }




  export type PlayerUCPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerUCPWhereInput
    orderBy?: PlayerUCPOrderByWithAggregationInput | PlayerUCPOrderByWithAggregationInput[]
    by: PlayerUCPScalarFieldEnum[] | PlayerUCPScalarFieldEnum
    having?: PlayerUCPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerUCPCountAggregateInputType | true
    _avg?: PlayerUCPAvgAggregateInputType
    _sum?: PlayerUCPSumAggregateInputType
    _min?: PlayerUCPMinAggregateInputType
    _max?: PlayerUCPMaxAggregateInputType
  }

  export type PlayerUCPGroupByOutputType = {
    ID: number
    ucp: string | null
    verifycode: number | null
    DiscordID: string | null
    password: string | null
    salt: string | null
    extrac: number | null
    reedem: number | null
    _count: PlayerUCPCountAggregateOutputType | null
    _avg: PlayerUCPAvgAggregateOutputType | null
    _sum: PlayerUCPSumAggregateOutputType | null
    _min: PlayerUCPMinAggregateOutputType | null
    _max: PlayerUCPMaxAggregateOutputType | null
  }

  type GetPlayerUCPGroupByPayload<T extends PlayerUCPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerUCPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerUCPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerUCPGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerUCPGroupByOutputType[P]>
        }
      >
    >


  export type PlayerUCPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ucp?: boolean
    verifycode?: boolean
    DiscordID?: boolean
    password?: boolean
    salt?: boolean
    extrac?: boolean
    reedem?: boolean
  }, ExtArgs["result"]["playerUCP"]>



  export type PlayerUCPSelectScalar = {
    ID?: boolean
    ucp?: boolean
    verifycode?: boolean
    DiscordID?: boolean
    password?: boolean
    salt?: boolean
    extrac?: boolean
    reedem?: boolean
  }

  export type PlayerUCPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "ucp" | "verifycode" | "DiscordID" | "password" | "salt" | "extrac" | "reedem", ExtArgs["result"]["playerUCP"]>

  export type $PlayerUCPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerUCP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      ucp: string | null
      verifycode: number | null
      DiscordID: string | null
      password: string | null
      salt: string | null
      extrac: number | null
      reedem: number | null
    }, ExtArgs["result"]["playerUCP"]>
    composites: {}
  }

  type PlayerUCPGetPayload<S extends boolean | null | undefined | PlayerUCPDefaultArgs> = $Result.GetResult<Prisma.$PlayerUCPPayload, S>

  type PlayerUCPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerUCPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerUCPCountAggregateInputType | true
    }

  export interface PlayerUCPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerUCP'], meta: { name: 'PlayerUCP' } }
    /**
     * Find zero or one PlayerUCP that matches the filter.
     * @param {PlayerUCPFindUniqueArgs} args - Arguments to find a PlayerUCP
     * @example
     * // Get one PlayerUCP
     * const playerUCP = await prisma.playerUCP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerUCPFindUniqueArgs>(args: SelectSubset<T, PlayerUCPFindUniqueArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerUCP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerUCPFindUniqueOrThrowArgs} args - Arguments to find a PlayerUCP
     * @example
     * // Get one PlayerUCP
     * const playerUCP = await prisma.playerUCP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerUCPFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerUCPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerUCP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPFindFirstArgs} args - Arguments to find a PlayerUCP
     * @example
     * // Get one PlayerUCP
     * const playerUCP = await prisma.playerUCP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerUCPFindFirstArgs>(args?: SelectSubset<T, PlayerUCPFindFirstArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerUCP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPFindFirstOrThrowArgs} args - Arguments to find a PlayerUCP
     * @example
     * // Get one PlayerUCP
     * const playerUCP = await prisma.playerUCP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerUCPFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerUCPFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerUCPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerUCPS
     * const playerUCPS = await prisma.playerUCP.findMany()
     * 
     * // Get first 10 PlayerUCPS
     * const playerUCPS = await prisma.playerUCP.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const playerUCPWithIDOnly = await prisma.playerUCP.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends PlayerUCPFindManyArgs>(args?: SelectSubset<T, PlayerUCPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerUCP.
     * @param {PlayerUCPCreateArgs} args - Arguments to create a PlayerUCP.
     * @example
     * // Create one PlayerUCP
     * const PlayerUCP = await prisma.playerUCP.create({
     *   data: {
     *     // ... data to create a PlayerUCP
     *   }
     * })
     * 
     */
    create<T extends PlayerUCPCreateArgs>(args: SelectSubset<T, PlayerUCPCreateArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerUCPS.
     * @param {PlayerUCPCreateManyArgs} args - Arguments to create many PlayerUCPS.
     * @example
     * // Create many PlayerUCPS
     * const playerUCP = await prisma.playerUCP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerUCPCreateManyArgs>(args?: SelectSubset<T, PlayerUCPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerUCP.
     * @param {PlayerUCPDeleteArgs} args - Arguments to delete one PlayerUCP.
     * @example
     * // Delete one PlayerUCP
     * const PlayerUCP = await prisma.playerUCP.delete({
     *   where: {
     *     // ... filter to delete one PlayerUCP
     *   }
     * })
     * 
     */
    delete<T extends PlayerUCPDeleteArgs>(args: SelectSubset<T, PlayerUCPDeleteArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerUCP.
     * @param {PlayerUCPUpdateArgs} args - Arguments to update one PlayerUCP.
     * @example
     * // Update one PlayerUCP
     * const playerUCP = await prisma.playerUCP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUCPUpdateArgs>(args: SelectSubset<T, PlayerUCPUpdateArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerUCPS.
     * @param {PlayerUCPDeleteManyArgs} args - Arguments to filter PlayerUCPS to delete.
     * @example
     * // Delete a few PlayerUCPS
     * const { count } = await prisma.playerUCP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerUCPDeleteManyArgs>(args?: SelectSubset<T, PlayerUCPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerUCPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerUCPS
     * const playerUCP = await prisma.playerUCP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUCPUpdateManyArgs>(args: SelectSubset<T, PlayerUCPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerUCP.
     * @param {PlayerUCPUpsertArgs} args - Arguments to update or create a PlayerUCP.
     * @example
     * // Update or create a PlayerUCP
     * const playerUCP = await prisma.playerUCP.upsert({
     *   create: {
     *     // ... data to create a PlayerUCP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerUCP we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUCPUpsertArgs>(args: SelectSubset<T, PlayerUCPUpsertArgs<ExtArgs>>): Prisma__PlayerUCPClient<$Result.GetResult<Prisma.$PlayerUCPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerUCPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPCountArgs} args - Arguments to filter PlayerUCPS to count.
     * @example
     * // Count the number of PlayerUCPS
     * const count = await prisma.playerUCP.count({
     *   where: {
     *     // ... the filter for the PlayerUCPS we want to count
     *   }
     * })
    **/
    count<T extends PlayerUCPCountArgs>(
      args?: Subset<T, PlayerUCPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerUCPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerUCP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerUCPAggregateArgs>(args: Subset<T, PlayerUCPAggregateArgs>): Prisma.PrismaPromise<GetPlayerUCPAggregateType<T>>

    /**
     * Group by PlayerUCP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUCPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerUCPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerUCPGroupByArgs['orderBy'] }
        : { orderBy?: PlayerUCPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerUCPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerUCPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerUCP model
   */
  readonly fields: PlayerUCPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerUCP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerUCPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerUCP model
   */
  interface PlayerUCPFieldRefs {
    readonly ID: FieldRef<"PlayerUCP", 'Int'>
    readonly ucp: FieldRef<"PlayerUCP", 'String'>
    readonly verifycode: FieldRef<"PlayerUCP", 'Int'>
    readonly DiscordID: FieldRef<"PlayerUCP", 'String'>
    readonly password: FieldRef<"PlayerUCP", 'String'>
    readonly salt: FieldRef<"PlayerUCP", 'String'>
    readonly extrac: FieldRef<"PlayerUCP", 'Int'>
    readonly reedem: FieldRef<"PlayerUCP", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerUCP findUnique
   */
  export type PlayerUCPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter, which PlayerUCP to fetch.
     */
    where: PlayerUCPWhereUniqueInput
  }

  /**
   * PlayerUCP findUniqueOrThrow
   */
  export type PlayerUCPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter, which PlayerUCP to fetch.
     */
    where: PlayerUCPWhereUniqueInput
  }

  /**
   * PlayerUCP findFirst
   */
  export type PlayerUCPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter, which PlayerUCP to fetch.
     */
    where?: PlayerUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerUCPS to fetch.
     */
    orderBy?: PlayerUCPOrderByWithRelationInput | PlayerUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerUCPS.
     */
    cursor?: PlayerUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerUCPS.
     */
    distinct?: PlayerUCPScalarFieldEnum | PlayerUCPScalarFieldEnum[]
  }

  /**
   * PlayerUCP findFirstOrThrow
   */
  export type PlayerUCPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter, which PlayerUCP to fetch.
     */
    where?: PlayerUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerUCPS to fetch.
     */
    orderBy?: PlayerUCPOrderByWithRelationInput | PlayerUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerUCPS.
     */
    cursor?: PlayerUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerUCPS.
     */
    distinct?: PlayerUCPScalarFieldEnum | PlayerUCPScalarFieldEnum[]
  }

  /**
   * PlayerUCP findMany
   */
  export type PlayerUCPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter, which PlayerUCPS to fetch.
     */
    where?: PlayerUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerUCPS to fetch.
     */
    orderBy?: PlayerUCPOrderByWithRelationInput | PlayerUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerUCPS.
     */
    cursor?: PlayerUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerUCPS.
     */
    skip?: number
    distinct?: PlayerUCPScalarFieldEnum | PlayerUCPScalarFieldEnum[]
  }

  /**
   * PlayerUCP create
   */
  export type PlayerUCPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * The data needed to create a PlayerUCP.
     */
    data?: XOR<PlayerUCPCreateInput, PlayerUCPUncheckedCreateInput>
  }

  /**
   * PlayerUCP createMany
   */
  export type PlayerUCPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerUCPS.
     */
    data: PlayerUCPCreateManyInput | PlayerUCPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerUCP update
   */
  export type PlayerUCPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * The data needed to update a PlayerUCP.
     */
    data: XOR<PlayerUCPUpdateInput, PlayerUCPUncheckedUpdateInput>
    /**
     * Choose, which PlayerUCP to update.
     */
    where: PlayerUCPWhereUniqueInput
  }

  /**
   * PlayerUCP updateMany
   */
  export type PlayerUCPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerUCPS.
     */
    data: XOR<PlayerUCPUpdateManyMutationInput, PlayerUCPUncheckedUpdateManyInput>
    /**
     * Filter which PlayerUCPS to update
     */
    where?: PlayerUCPWhereInput
    /**
     * Limit how many PlayerUCPS to update.
     */
    limit?: number
  }

  /**
   * PlayerUCP upsert
   */
  export type PlayerUCPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * The filter to search for the PlayerUCP to update in case it exists.
     */
    where: PlayerUCPWhereUniqueInput
    /**
     * In case the PlayerUCP found by the `where` argument doesn't exist, create a new PlayerUCP with this data.
     */
    create: XOR<PlayerUCPCreateInput, PlayerUCPUncheckedCreateInput>
    /**
     * In case the PlayerUCP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUCPUpdateInput, PlayerUCPUncheckedUpdateInput>
  }

  /**
   * PlayerUCP delete
   */
  export type PlayerUCPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
    /**
     * Filter which PlayerUCP to delete.
     */
    where: PlayerUCPWhereUniqueInput
  }

  /**
   * PlayerUCP deleteMany
   */
  export type PlayerUCPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerUCPS to delete
     */
    where?: PlayerUCPWhereInput
    /**
     * Limit how many PlayerUCPS to delete.
     */
    limit?: number
  }

  /**
   * PlayerUCP without action
   */
  export type PlayerUCPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerUCP
     */
    select?: PlayerUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerUCP
     */
    omit?: PlayerUCPOmit<ExtArgs> | null
  }


  /**
   * Model WebUCP
   */

  export type AggregateWebUCP = {
    _count: WebUCPCountAggregateOutputType | null
    _avg: WebUCPAvgAggregateOutputType | null
    _sum: WebUCPSumAggregateOutputType | null
    _min: WebUCPMinAggregateOutputType | null
    _max: WebUCPMaxAggregateOutputType | null
  }

  export type WebUCPAvgAggregateOutputType = {
    id: number | null
  }

  export type WebUCPSumAggregateOutputType = {
    id: number | null
  }

  export type WebUCPMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebUCPMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebUCPCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebUCPAvgAggregateInputType = {
    id?: true
  }

  export type WebUCPSumAggregateInputType = {
    id?: true
  }

  export type WebUCPMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebUCPMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebUCPCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebUCPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebUCP to aggregate.
     */
    where?: WebUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebUCPS to fetch.
     */
    orderBy?: WebUCPOrderByWithRelationInput | WebUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebUCPS
    **/
    _count?: true | WebUCPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebUCPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebUCPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebUCPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebUCPMaxAggregateInputType
  }

  export type GetWebUCPAggregateType<T extends WebUCPAggregateArgs> = {
        [P in keyof T & keyof AggregateWebUCP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebUCP[P]>
      : GetScalarType<T[P], AggregateWebUCP[P]>
  }




  export type WebUCPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebUCPWhereInput
    orderBy?: WebUCPOrderByWithAggregationInput | WebUCPOrderByWithAggregationInput[]
    by: WebUCPScalarFieldEnum[] | WebUCPScalarFieldEnum
    having?: WebUCPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebUCPCountAggregateInputType | true
    _avg?: WebUCPAvgAggregateInputType
    _sum?: WebUCPSumAggregateInputType
    _min?: WebUCPMinAggregateInputType
    _max?: WebUCPMaxAggregateInputType
  }

  export type WebUCPGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: WebUCPCountAggregateOutputType | null
    _avg: WebUCPAvgAggregateOutputType | null
    _sum: WebUCPSumAggregateOutputType | null
    _min: WebUCPMinAggregateOutputType | null
    _max: WebUCPMaxAggregateOutputType | null
  }

  type GetWebUCPGroupByPayload<T extends WebUCPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebUCPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebUCPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebUCPGroupByOutputType[P]>
            : GetScalarType<T[P], WebUCPGroupByOutputType[P]>
        }
      >
    >


  export type WebUCPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webUCP"]>



  export type WebUCPSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebUCPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["webUCP"]>

  export type $WebUCPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebUCP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webUCP"]>
    composites: {}
  }

  type WebUCPGetPayload<S extends boolean | null | undefined | WebUCPDefaultArgs> = $Result.GetResult<Prisma.$WebUCPPayload, S>

  type WebUCPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebUCPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebUCPCountAggregateInputType | true
    }

  export interface WebUCPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebUCP'], meta: { name: 'WebUCP' } }
    /**
     * Find zero or one WebUCP that matches the filter.
     * @param {WebUCPFindUniqueArgs} args - Arguments to find a WebUCP
     * @example
     * // Get one WebUCP
     * const webUCP = await prisma.webUCP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebUCPFindUniqueArgs>(args: SelectSubset<T, WebUCPFindUniqueArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebUCP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebUCPFindUniqueOrThrowArgs} args - Arguments to find a WebUCP
     * @example
     * // Get one WebUCP
     * const webUCP = await prisma.webUCP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebUCPFindUniqueOrThrowArgs>(args: SelectSubset<T, WebUCPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebUCP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPFindFirstArgs} args - Arguments to find a WebUCP
     * @example
     * // Get one WebUCP
     * const webUCP = await prisma.webUCP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebUCPFindFirstArgs>(args?: SelectSubset<T, WebUCPFindFirstArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebUCP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPFindFirstOrThrowArgs} args - Arguments to find a WebUCP
     * @example
     * // Get one WebUCP
     * const webUCP = await prisma.webUCP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebUCPFindFirstOrThrowArgs>(args?: SelectSubset<T, WebUCPFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebUCPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebUCPS
     * const webUCPS = await prisma.webUCP.findMany()
     * 
     * // Get first 10 WebUCPS
     * const webUCPS = await prisma.webUCP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webUCPWithIdOnly = await prisma.webUCP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebUCPFindManyArgs>(args?: SelectSubset<T, WebUCPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebUCP.
     * @param {WebUCPCreateArgs} args - Arguments to create a WebUCP.
     * @example
     * // Create one WebUCP
     * const WebUCP = await prisma.webUCP.create({
     *   data: {
     *     // ... data to create a WebUCP
     *   }
     * })
     * 
     */
    create<T extends WebUCPCreateArgs>(args: SelectSubset<T, WebUCPCreateArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebUCPS.
     * @param {WebUCPCreateManyArgs} args - Arguments to create many WebUCPS.
     * @example
     * // Create many WebUCPS
     * const webUCP = await prisma.webUCP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebUCPCreateManyArgs>(args?: SelectSubset<T, WebUCPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WebUCP.
     * @param {WebUCPDeleteArgs} args - Arguments to delete one WebUCP.
     * @example
     * // Delete one WebUCP
     * const WebUCP = await prisma.webUCP.delete({
     *   where: {
     *     // ... filter to delete one WebUCP
     *   }
     * })
     * 
     */
    delete<T extends WebUCPDeleteArgs>(args: SelectSubset<T, WebUCPDeleteArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebUCP.
     * @param {WebUCPUpdateArgs} args - Arguments to update one WebUCP.
     * @example
     * // Update one WebUCP
     * const webUCP = await prisma.webUCP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebUCPUpdateArgs>(args: SelectSubset<T, WebUCPUpdateArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebUCPS.
     * @param {WebUCPDeleteManyArgs} args - Arguments to filter WebUCPS to delete.
     * @example
     * // Delete a few WebUCPS
     * const { count } = await prisma.webUCP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebUCPDeleteManyArgs>(args?: SelectSubset<T, WebUCPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebUCPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebUCPS
     * const webUCP = await prisma.webUCP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebUCPUpdateManyArgs>(args: SelectSubset<T, WebUCPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebUCP.
     * @param {WebUCPUpsertArgs} args - Arguments to update or create a WebUCP.
     * @example
     * // Update or create a WebUCP
     * const webUCP = await prisma.webUCP.upsert({
     *   create: {
     *     // ... data to create a WebUCP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebUCP we want to update
     *   }
     * })
     */
    upsert<T extends WebUCPUpsertArgs>(args: SelectSubset<T, WebUCPUpsertArgs<ExtArgs>>): Prisma__WebUCPClient<$Result.GetResult<Prisma.$WebUCPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebUCPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPCountArgs} args - Arguments to filter WebUCPS to count.
     * @example
     * // Count the number of WebUCPS
     * const count = await prisma.webUCP.count({
     *   where: {
     *     // ... the filter for the WebUCPS we want to count
     *   }
     * })
    **/
    count<T extends WebUCPCountArgs>(
      args?: Subset<T, WebUCPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebUCPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebUCP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebUCPAggregateArgs>(args: Subset<T, WebUCPAggregateArgs>): Prisma.PrismaPromise<GetWebUCPAggregateType<T>>

    /**
     * Group by WebUCP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebUCPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebUCPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebUCPGroupByArgs['orderBy'] }
        : { orderBy?: WebUCPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebUCPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebUCPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebUCP model
   */
  readonly fields: WebUCPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebUCP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebUCPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebUCP model
   */
  interface WebUCPFieldRefs {
    readonly id: FieldRef<"WebUCP", 'Int'>
    readonly username: FieldRef<"WebUCP", 'String'>
    readonly email: FieldRef<"WebUCP", 'String'>
    readonly password: FieldRef<"WebUCP", 'String'>
    readonly createdAt: FieldRef<"WebUCP", 'DateTime'>
    readonly updatedAt: FieldRef<"WebUCP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebUCP findUnique
   */
  export type WebUCPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter, which WebUCP to fetch.
     */
    where: WebUCPWhereUniqueInput
  }

  /**
   * WebUCP findUniqueOrThrow
   */
  export type WebUCPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter, which WebUCP to fetch.
     */
    where: WebUCPWhereUniqueInput
  }

  /**
   * WebUCP findFirst
   */
  export type WebUCPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter, which WebUCP to fetch.
     */
    where?: WebUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebUCPS to fetch.
     */
    orderBy?: WebUCPOrderByWithRelationInput | WebUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebUCPS.
     */
    cursor?: WebUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebUCPS.
     */
    distinct?: WebUCPScalarFieldEnum | WebUCPScalarFieldEnum[]
  }

  /**
   * WebUCP findFirstOrThrow
   */
  export type WebUCPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter, which WebUCP to fetch.
     */
    where?: WebUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebUCPS to fetch.
     */
    orderBy?: WebUCPOrderByWithRelationInput | WebUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebUCPS.
     */
    cursor?: WebUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebUCPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebUCPS.
     */
    distinct?: WebUCPScalarFieldEnum | WebUCPScalarFieldEnum[]
  }

  /**
   * WebUCP findMany
   */
  export type WebUCPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter, which WebUCPS to fetch.
     */
    where?: WebUCPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebUCPS to fetch.
     */
    orderBy?: WebUCPOrderByWithRelationInput | WebUCPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebUCPS.
     */
    cursor?: WebUCPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebUCPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebUCPS.
     */
    skip?: number
    distinct?: WebUCPScalarFieldEnum | WebUCPScalarFieldEnum[]
  }

  /**
   * WebUCP create
   */
  export type WebUCPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * The data needed to create a WebUCP.
     */
    data: XOR<WebUCPCreateInput, WebUCPUncheckedCreateInput>
  }

  /**
   * WebUCP createMany
   */
  export type WebUCPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebUCPS.
     */
    data: WebUCPCreateManyInput | WebUCPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebUCP update
   */
  export type WebUCPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * The data needed to update a WebUCP.
     */
    data: XOR<WebUCPUpdateInput, WebUCPUncheckedUpdateInput>
    /**
     * Choose, which WebUCP to update.
     */
    where: WebUCPWhereUniqueInput
  }

  /**
   * WebUCP updateMany
   */
  export type WebUCPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebUCPS.
     */
    data: XOR<WebUCPUpdateManyMutationInput, WebUCPUncheckedUpdateManyInput>
    /**
     * Filter which WebUCPS to update
     */
    where?: WebUCPWhereInput
    /**
     * Limit how many WebUCPS to update.
     */
    limit?: number
  }

  /**
   * WebUCP upsert
   */
  export type WebUCPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * The filter to search for the WebUCP to update in case it exists.
     */
    where: WebUCPWhereUniqueInput
    /**
     * In case the WebUCP found by the `where` argument doesn't exist, create a new WebUCP with this data.
     */
    create: XOR<WebUCPCreateInput, WebUCPUncheckedCreateInput>
    /**
     * In case the WebUCP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebUCPUpdateInput, WebUCPUncheckedUpdateInput>
  }

  /**
   * WebUCP delete
   */
  export type WebUCPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
    /**
     * Filter which WebUCP to delete.
     */
    where: WebUCPWhereUniqueInput
  }

  /**
   * WebUCP deleteMany
   */
  export type WebUCPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebUCPS to delete
     */
    where?: WebUCPWhereInput
    /**
     * Limit how many WebUCPS to delete.
     */
    limit?: number
  }

  /**
   * WebUCP without action
   */
  export type WebUCPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebUCP
     */
    select?: WebUCPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebUCP
     */
    omit?: WebUCPOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerUCPScalarFieldEnum: {
    ID: 'ID',
    ucp: 'ucp',
    verifycode: 'verifycode',
    DiscordID: 'DiscordID',
    password: 'password',
    salt: 'salt',
    extrac: 'extrac',
    reedem: 'reedem'
  };

  export type PlayerUCPScalarFieldEnum = (typeof PlayerUCPScalarFieldEnum)[keyof typeof PlayerUCPScalarFieldEnum]


  export const WebUCPScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebUCPScalarFieldEnum = (typeof WebUCPScalarFieldEnum)[keyof typeof WebUCPScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PlayerUCPOrderByRelevanceFieldEnum: {
    ucp: 'ucp',
    DiscordID: 'DiscordID',
    password: 'password',
    salt: 'salt'
  };

  export type PlayerUCPOrderByRelevanceFieldEnum = (typeof PlayerUCPOrderByRelevanceFieldEnum)[keyof typeof PlayerUCPOrderByRelevanceFieldEnum]


  export const WebUCPOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type WebUCPOrderByRelevanceFieldEnum = (typeof WebUCPOrderByRelevanceFieldEnum)[keyof typeof WebUCPOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PlayerUCPWhereInput = {
    AND?: PlayerUCPWhereInput | PlayerUCPWhereInput[]
    OR?: PlayerUCPWhereInput[]
    NOT?: PlayerUCPWhereInput | PlayerUCPWhereInput[]
    ID?: IntFilter<"PlayerUCP"> | number
    ucp?: StringNullableFilter<"PlayerUCP"> | string | null
    verifycode?: IntNullableFilter<"PlayerUCP"> | number | null
    DiscordID?: StringNullableFilter<"PlayerUCP"> | string | null
    password?: StringNullableFilter<"PlayerUCP"> | string | null
    salt?: StringNullableFilter<"PlayerUCP"> | string | null
    extrac?: IntNullableFilter<"PlayerUCP"> | number | null
    reedem?: IntNullableFilter<"PlayerUCP"> | number | null
  }

  export type PlayerUCPOrderByWithRelationInput = {
    ID?: SortOrder
    ucp?: SortOrderInput | SortOrder
    verifycode?: SortOrderInput | SortOrder
    DiscordID?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    extrac?: SortOrderInput | SortOrder
    reedem?: SortOrderInput | SortOrder
    _relevance?: PlayerUCPOrderByRelevanceInput
  }

  export type PlayerUCPWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    ucp?: string
    AND?: PlayerUCPWhereInput | PlayerUCPWhereInput[]
    OR?: PlayerUCPWhereInput[]
    NOT?: PlayerUCPWhereInput | PlayerUCPWhereInput[]
    verifycode?: IntNullableFilter<"PlayerUCP"> | number | null
    DiscordID?: StringNullableFilter<"PlayerUCP"> | string | null
    password?: StringNullableFilter<"PlayerUCP"> | string | null
    salt?: StringNullableFilter<"PlayerUCP"> | string | null
    extrac?: IntNullableFilter<"PlayerUCP"> | number | null
    reedem?: IntNullableFilter<"PlayerUCP"> | number | null
  }, "ID" | "ucp">

  export type PlayerUCPOrderByWithAggregationInput = {
    ID?: SortOrder
    ucp?: SortOrderInput | SortOrder
    verifycode?: SortOrderInput | SortOrder
    DiscordID?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    extrac?: SortOrderInput | SortOrder
    reedem?: SortOrderInput | SortOrder
    _count?: PlayerUCPCountOrderByAggregateInput
    _avg?: PlayerUCPAvgOrderByAggregateInput
    _max?: PlayerUCPMaxOrderByAggregateInput
    _min?: PlayerUCPMinOrderByAggregateInput
    _sum?: PlayerUCPSumOrderByAggregateInput
  }

  export type PlayerUCPScalarWhereWithAggregatesInput = {
    AND?: PlayerUCPScalarWhereWithAggregatesInput | PlayerUCPScalarWhereWithAggregatesInput[]
    OR?: PlayerUCPScalarWhereWithAggregatesInput[]
    NOT?: PlayerUCPScalarWhereWithAggregatesInput | PlayerUCPScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"PlayerUCP"> | number
    ucp?: StringNullableWithAggregatesFilter<"PlayerUCP"> | string | null
    verifycode?: IntNullableWithAggregatesFilter<"PlayerUCP"> | number | null
    DiscordID?: StringNullableWithAggregatesFilter<"PlayerUCP"> | string | null
    password?: StringNullableWithAggregatesFilter<"PlayerUCP"> | string | null
    salt?: StringNullableWithAggregatesFilter<"PlayerUCP"> | string | null
    extrac?: IntNullableWithAggregatesFilter<"PlayerUCP"> | number | null
    reedem?: IntNullableWithAggregatesFilter<"PlayerUCP"> | number | null
  }

  export type WebUCPWhereInput = {
    AND?: WebUCPWhereInput | WebUCPWhereInput[]
    OR?: WebUCPWhereInput[]
    NOT?: WebUCPWhereInput | WebUCPWhereInput[]
    id?: IntFilter<"WebUCP"> | number
    username?: StringFilter<"WebUCP"> | string
    email?: StringFilter<"WebUCP"> | string
    password?: StringFilter<"WebUCP"> | string
    createdAt?: DateTimeFilter<"WebUCP"> | Date | string
    updatedAt?: DateTimeFilter<"WebUCP"> | Date | string
  }

  export type WebUCPOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: WebUCPOrderByRelevanceInput
  }

  export type WebUCPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: WebUCPWhereInput | WebUCPWhereInput[]
    OR?: WebUCPWhereInput[]
    NOT?: WebUCPWhereInput | WebUCPWhereInput[]
    password?: StringFilter<"WebUCP"> | string
    createdAt?: DateTimeFilter<"WebUCP"> | Date | string
    updatedAt?: DateTimeFilter<"WebUCP"> | Date | string
  }, "id" | "username" | "email">

  export type WebUCPOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebUCPCountOrderByAggregateInput
    _avg?: WebUCPAvgOrderByAggregateInput
    _max?: WebUCPMaxOrderByAggregateInput
    _min?: WebUCPMinOrderByAggregateInput
    _sum?: WebUCPSumOrderByAggregateInput
  }

  export type WebUCPScalarWhereWithAggregatesInput = {
    AND?: WebUCPScalarWhereWithAggregatesInput | WebUCPScalarWhereWithAggregatesInput[]
    OR?: WebUCPScalarWhereWithAggregatesInput[]
    NOT?: WebUCPScalarWhereWithAggregatesInput | WebUCPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WebUCP"> | number
    username?: StringWithAggregatesFilter<"WebUCP"> | string
    email?: StringWithAggregatesFilter<"WebUCP"> | string
    password?: StringWithAggregatesFilter<"WebUCP"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WebUCP"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebUCP"> | Date | string
  }

  export type PlayerUCPCreateInput = {
    ucp?: string | null
    verifycode?: number | null
    DiscordID?: string | null
    password?: string | null
    salt?: string | null
    extrac?: number | null
    reedem?: number | null
  }

  export type PlayerUCPUncheckedCreateInput = {
    ID?: number
    ucp?: string | null
    verifycode?: number | null
    DiscordID?: string | null
    password?: string | null
    salt?: string | null
    extrac?: number | null
    reedem?: number | null
  }

  export type PlayerUCPUpdateInput = {
    ucp?: NullableStringFieldUpdateOperationsInput | string | null
    verifycode?: NullableIntFieldUpdateOperationsInput | number | null
    DiscordID?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    extrac?: NullableIntFieldUpdateOperationsInput | number | null
    reedem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerUCPUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ucp?: NullableStringFieldUpdateOperationsInput | string | null
    verifycode?: NullableIntFieldUpdateOperationsInput | number | null
    DiscordID?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    extrac?: NullableIntFieldUpdateOperationsInput | number | null
    reedem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerUCPCreateManyInput = {
    ID?: number
    ucp?: string | null
    verifycode?: number | null
    DiscordID?: string | null
    password?: string | null
    salt?: string | null
    extrac?: number | null
    reedem?: number | null
  }

  export type PlayerUCPUpdateManyMutationInput = {
    ucp?: NullableStringFieldUpdateOperationsInput | string | null
    verifycode?: NullableIntFieldUpdateOperationsInput | number | null
    DiscordID?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    extrac?: NullableIntFieldUpdateOperationsInput | number | null
    reedem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerUCPUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ucp?: NullableStringFieldUpdateOperationsInput | string | null
    verifycode?: NullableIntFieldUpdateOperationsInput | number | null
    DiscordID?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    extrac?: NullableIntFieldUpdateOperationsInput | number | null
    reedem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WebUCPCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebUCPUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebUCPUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebUCPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebUCPCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebUCPUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebUCPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlayerUCPOrderByRelevanceInput = {
    fields: PlayerUCPOrderByRelevanceFieldEnum | PlayerUCPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerUCPCountOrderByAggregateInput = {
    ID?: SortOrder
    ucp?: SortOrder
    verifycode?: SortOrder
    DiscordID?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    extrac?: SortOrder
    reedem?: SortOrder
  }

  export type PlayerUCPAvgOrderByAggregateInput = {
    ID?: SortOrder
    verifycode?: SortOrder
    extrac?: SortOrder
    reedem?: SortOrder
  }

  export type PlayerUCPMaxOrderByAggregateInput = {
    ID?: SortOrder
    ucp?: SortOrder
    verifycode?: SortOrder
    DiscordID?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    extrac?: SortOrder
    reedem?: SortOrder
  }

  export type PlayerUCPMinOrderByAggregateInput = {
    ID?: SortOrder
    ucp?: SortOrder
    verifycode?: SortOrder
    DiscordID?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    extrac?: SortOrder
    reedem?: SortOrder
  }

  export type PlayerUCPSumOrderByAggregateInput = {
    ID?: SortOrder
    verifycode?: SortOrder
    extrac?: SortOrder
    reedem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WebUCPOrderByRelevanceInput = {
    fields: WebUCPOrderByRelevanceFieldEnum | WebUCPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WebUCPCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebUCPAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WebUCPMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebUCPMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebUCPSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}