
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
 * Model T_Account
 * 
 */
export type T_Account = $Result.DefaultSelection<Prisma.$T_AccountPayload>
/**
 * Model T_Report
 * 
 */
export type T_Report = $Result.DefaultSelection<Prisma.$T_ReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_Accounts
 * const t_Accounts = await prisma.t_Account.findMany()
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
   * // Fetch zero or more T_Accounts
   * const t_Accounts = await prisma.t_Account.findMany()
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
   * `prisma.t_Account`: Exposes CRUD operations for the **T_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Accounts
    * const t_Accounts = await prisma.t_Account.findMany()
    * ```
    */
  get t_Account(): Prisma.T_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Report`: Exposes CRUD operations for the **T_Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Reports
    * const t_Reports = await prisma.t_Report.findMany()
    * ```
    */
  get t_Report(): Prisma.T_ReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    T_Account: 'T_Account',
    T_Report: 'T_Report'
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
      modelProps: "t_Account" | "t_Report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      T_Account: {
        payload: Prisma.$T_AccountPayload<ExtArgs>
        fields: Prisma.T_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findFirst: {
            args: Prisma.T_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findMany: {
            args: Prisma.T_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          create: {
            args: Prisma.T_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          createMany: {
            args: Prisma.T_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          delete: {
            args: Prisma.T_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          update: {
            args: Prisma.T_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          deleteMany: {
            args: Prisma.T_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          upsert: {
            args: Prisma.T_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          aggregate: {
            args: Prisma.T_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Account>
          }
          groupBy: {
            args: Prisma.T_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<T_AccountCountAggregateOutputType> | number
          }
        }
      }
      T_Report: {
        payload: Prisma.$T_ReportPayload<ExtArgs>
        fields: Prisma.T_ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          findFirst: {
            args: Prisma.T_ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          findMany: {
            args: Prisma.T_ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>[]
          }
          create: {
            args: Prisma.T_ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          createMany: {
            args: Prisma.T_ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>[]
          }
          delete: {
            args: Prisma.T_ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          update: {
            args: Prisma.T_ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          deleteMany: {
            args: Prisma.T_ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>[]
          }
          upsert: {
            args: Prisma.T_ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_ReportPayload>
          }
          aggregate: {
            args: Prisma.T_ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Report>
          }
          groupBy: {
            args: Prisma.T_ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_ReportCountArgs<ExtArgs>
            result: $Utils.Optional<T_ReportCountAggregateOutputType> | number
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
    t_Account?: T_AccountOmit
    t_Report?: T_ReportOmit
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
   * Model T_Account
   */

  export type AggregateT_Account = {
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  export type T_AccountAvgAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountSumAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountMinAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountMaxAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountCountAggregateOutputType = {
    id_Account: number
    nome_Account: number
    email_Account: number
    password_Account: number
    createdAt_Account: number
    updatedAt_Account: number
    _all: number
  }


  export type T_AccountAvgAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountSumAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountMinAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountMaxAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountCountAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
    _all?: true
  }

  export type T_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Account to aggregate.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Accounts
    **/
    _count?: true | T_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_AccountMaxAggregateInputType
  }

  export type GetT_AccountAggregateType<T extends T_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Account[P]>
      : GetScalarType<T[P], AggregateT_Account[P]>
  }




  export type T_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_AccountWhereInput
    orderBy?: T_AccountOrderByWithAggregationInput | T_AccountOrderByWithAggregationInput[]
    by: T_AccountScalarFieldEnum[] | T_AccountScalarFieldEnum
    having?: T_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_AccountCountAggregateInputType | true
    _avg?: T_AccountAvgAggregateInputType
    _sum?: T_AccountSumAggregateInputType
    _min?: T_AccountMinAggregateInputType
    _max?: T_AccountMaxAggregateInputType
  }

  export type T_AccountGroupByOutputType = {
    id_Account: number
    nome_Account: string
    email_Account: string
    password_Account: string
    createdAt_Account: Date
    updatedAt_Account: Date
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  type GetT_AccountGroupByPayload<T extends T_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
        }
      >
    >


  export type T_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectScalar = {
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }

  export type T_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Account" | "nome_Account" | "email_Account" | "password_Account" | "createdAt_Account" | "updatedAt_Account", ExtArgs["result"]["t_Account"]>

  export type $T_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Account"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_Account: number
      nome_Account: string
      email_Account: string
      password_Account: string
      createdAt_Account: Date
      updatedAt_Account: Date
    }, ExtArgs["result"]["t_Account"]>
    composites: {}
  }

  type T_AccountGetPayload<S extends boolean | null | undefined | T_AccountDefaultArgs> = $Result.GetResult<Prisma.$T_AccountPayload, S>

  type T_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_AccountCountAggregateInputType | true
    }

  export interface T_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Account'], meta: { name: 'T_Account' } }
    /**
     * Find zero or one T_Account that matches the filter.
     * @param {T_AccountFindUniqueArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_AccountFindUniqueArgs>(args: SelectSubset<T, T_AccountFindUniqueArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_AccountFindUniqueOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, T_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_AccountFindFirstArgs>(args?: SelectSubset<T, T_AccountFindFirstArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, T_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany()
     * 
     * // Get first 10 T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany({ take: 10 })
     * 
     * // Only select the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.findMany({ select: { id_Account: true } })
     * 
     */
    findMany<T extends T_AccountFindManyArgs>(args?: SelectSubset<T, T_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Account.
     * @param {T_AccountCreateArgs} args - Arguments to create a T_Account.
     * @example
     * // Create one T_Account
     * const T_Account = await prisma.t_Account.create({
     *   data: {
     *     // ... data to create a T_Account
     *   }
     * })
     * 
     */
    create<T extends T_AccountCreateArgs>(args: SelectSubset<T, T_AccountCreateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Accounts.
     * @param {T_AccountCreateManyArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_AccountCreateManyArgs>(args?: SelectSubset<T, T_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Accounts and returns the data saved in the database.
     * @param {T_AccountCreateManyAndReturnArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.createManyAndReturn({
     *   select: { id_Account: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, T_AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Account.
     * @param {T_AccountDeleteArgs} args - Arguments to delete one T_Account.
     * @example
     * // Delete one T_Account
     * const T_Account = await prisma.t_Account.delete({
     *   where: {
     *     // ... filter to delete one T_Account
     *   }
     * })
     * 
     */
    delete<T extends T_AccountDeleteArgs>(args: SelectSubset<T, T_AccountDeleteArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Account.
     * @param {T_AccountUpdateArgs} args - Arguments to update one T_Account.
     * @example
     * // Update one T_Account
     * const t_Account = await prisma.t_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_AccountUpdateArgs>(args: SelectSubset<T, T_AccountUpdateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Accounts.
     * @param {T_AccountDeleteManyArgs} args - Arguments to filter T_Accounts to delete.
     * @example
     * // Delete a few T_Accounts
     * const { count } = await prisma.t_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_AccountDeleteManyArgs>(args?: SelectSubset<T, T_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_AccountUpdateManyArgs>(args: SelectSubset<T, T_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts and returns the data updated in the database.
     * @param {T_AccountUpdateManyAndReturnArgs} args - Arguments to update many T_Accounts.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.updateManyAndReturn({
     *   select: { id_Account: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, T_AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Account.
     * @param {T_AccountUpsertArgs} args - Arguments to update or create a T_Account.
     * @example
     * // Update or create a T_Account
     * const t_Account = await prisma.t_Account.upsert({
     *   create: {
     *     // ... data to create a T_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Account we want to update
     *   }
     * })
     */
    upsert<T extends T_AccountUpsertArgs>(args: SelectSubset<T, T_AccountUpsertArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountCountArgs} args - Arguments to filter T_Accounts to count.
     * @example
     * // Count the number of T_Accounts
     * const count = await prisma.t_Account.count({
     *   where: {
     *     // ... the filter for the T_Accounts we want to count
     *   }
     * })
    **/
    count<T extends T_AccountCountArgs>(
      args?: Subset<T, T_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_AccountAggregateArgs>(args: Subset<T, T_AccountAggregateArgs>): Prisma.PrismaPromise<GetT_AccountAggregateType<T>>

    /**
     * Group by T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountGroupByArgs} args - Group by arguments.
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
      T extends T_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_AccountGroupByArgs['orderBy'] }
        : { orderBy?: T_AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Account model
   */
  readonly fields: T_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the T_Account model
   */
  interface T_AccountFieldRefs {
    readonly id_Account: FieldRef<"T_Account", 'Int'>
    readonly nome_Account: FieldRef<"T_Account", 'String'>
    readonly email_Account: FieldRef<"T_Account", 'String'>
    readonly password_Account: FieldRef<"T_Account", 'String'>
    readonly createdAt_Account: FieldRef<"T_Account", 'DateTime'>
    readonly updatedAt_Account: FieldRef<"T_Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * T_Account findUnique
   */
  export type T_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findUniqueOrThrow
   */
  export type T_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findFirst
   */
  export type T_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findFirstOrThrow
   */
  export type T_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findMany
   */
  export type T_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter, which T_Accounts to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account create
   */
  export type T_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data needed to create a T_Account.
     */
    data: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
  }

  /**
   * T_Account createMany
   */
  export type T_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account createManyAndReturn
   */
  export type T_AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account update
   */
  export type T_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data needed to update a T_Account.
     */
    data: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
    /**
     * Choose, which T_Account to update.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account updateMany
   */
  export type T_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account updateManyAndReturn
   */
  export type T_AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account upsert
   */
  export type T_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The filter to search for the T_Account to update in case it exists.
     */
    where: T_AccountWhereUniqueInput
    /**
     * In case the T_Account found by the `where` argument doesn't exist, create a new T_Account with this data.
     */
    create: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
    /**
     * In case the T_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
  }

  /**
   * T_Account delete
   */
  export type T_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Filter which T_Account to delete.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account deleteMany
   */
  export type T_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Accounts to delete
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to delete.
     */
    limit?: number
  }

  /**
   * T_Account without action
   */
  export type T_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
  }


  /**
   * Model T_Report
   */

  export type AggregateT_Report = {
    _count: T_ReportCountAggregateOutputType | null
    _min: T_ReportMinAggregateOutputType | null
    _max: T_ReportMaxAggregateOutputType | null
  }

  export type T_ReportMinAggregateOutputType = {
    id_Report: string | null
    content_Report: string | null
    createdAt_Report: Date | null
    updatedAt_Report: Date | null
  }

  export type T_ReportMaxAggregateOutputType = {
    id_Report: string | null
    content_Report: string | null
    createdAt_Report: Date | null
    updatedAt_Report: Date | null
  }

  export type T_ReportCountAggregateOutputType = {
    id_Report: number
    content_Report: number
    createdAt_Report: number
    updatedAt_Report: number
    _all: number
  }


  export type T_ReportMinAggregateInputType = {
    id_Report?: true
    content_Report?: true
    createdAt_Report?: true
    updatedAt_Report?: true
  }

  export type T_ReportMaxAggregateInputType = {
    id_Report?: true
    content_Report?: true
    createdAt_Report?: true
    updatedAt_Report?: true
  }

  export type T_ReportCountAggregateInputType = {
    id_Report?: true
    content_Report?: true
    createdAt_Report?: true
    updatedAt_Report?: true
    _all?: true
  }

  export type T_ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Report to aggregate.
     */
    where?: T_ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Reports to fetch.
     */
    orderBy?: T_ReportOrderByWithRelationInput | T_ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Reports
    **/
    _count?: true | T_ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_ReportMaxAggregateInputType
  }

  export type GetT_ReportAggregateType<T extends T_ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Report]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Report[P]>
      : GetScalarType<T[P], AggregateT_Report[P]>
  }




  export type T_ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_ReportWhereInput
    orderBy?: T_ReportOrderByWithAggregationInput | T_ReportOrderByWithAggregationInput[]
    by: T_ReportScalarFieldEnum[] | T_ReportScalarFieldEnum
    having?: T_ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_ReportCountAggregateInputType | true
    _min?: T_ReportMinAggregateInputType
    _max?: T_ReportMaxAggregateInputType
  }

  export type T_ReportGroupByOutputType = {
    id_Report: string
    content_Report: string | null
    createdAt_Report: Date
    updatedAt_Report: Date
    _count: T_ReportCountAggregateOutputType | null
    _min: T_ReportMinAggregateOutputType | null
    _max: T_ReportMaxAggregateOutputType | null
  }

  type GetT_ReportGroupByPayload<T extends T_ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_ReportGroupByOutputType[P]>
            : GetScalarType<T[P], T_ReportGroupByOutputType[P]>
        }
      >
    >


  export type T_ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Report?: boolean
    content_Report?: boolean
    createdAt_Report?: boolean
    updatedAt_Report?: boolean
  }, ExtArgs["result"]["t_Report"]>

  export type T_ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Report?: boolean
    content_Report?: boolean
    createdAt_Report?: boolean
    updatedAt_Report?: boolean
  }, ExtArgs["result"]["t_Report"]>

  export type T_ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Report?: boolean
    content_Report?: boolean
    createdAt_Report?: boolean
    updatedAt_Report?: boolean
  }, ExtArgs["result"]["t_Report"]>

  export type T_ReportSelectScalar = {
    id_Report?: boolean
    content_Report?: boolean
    createdAt_Report?: boolean
    updatedAt_Report?: boolean
  }

  export type T_ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Report" | "content_Report" | "createdAt_Report" | "updatedAt_Report", ExtArgs["result"]["t_Report"]>

  export type $T_ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_Report: string
      content_Report: string | null
      createdAt_Report: Date
      updatedAt_Report: Date
    }, ExtArgs["result"]["t_Report"]>
    composites: {}
  }

  type T_ReportGetPayload<S extends boolean | null | undefined | T_ReportDefaultArgs> = $Result.GetResult<Prisma.$T_ReportPayload, S>

  type T_ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_ReportCountAggregateInputType | true
    }

  export interface T_ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Report'], meta: { name: 'T_Report' } }
    /**
     * Find zero or one T_Report that matches the filter.
     * @param {T_ReportFindUniqueArgs} args - Arguments to find a T_Report
     * @example
     * // Get one T_Report
     * const t_Report = await prisma.t_Report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_ReportFindUniqueArgs>(args: SelectSubset<T, T_ReportFindUniqueArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_ReportFindUniqueOrThrowArgs} args - Arguments to find a T_Report
     * @example
     * // Get one T_Report
     * const t_Report = await prisma.t_Report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, T_ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportFindFirstArgs} args - Arguments to find a T_Report
     * @example
     * // Get one T_Report
     * const t_Report = await prisma.t_Report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_ReportFindFirstArgs>(args?: SelectSubset<T, T_ReportFindFirstArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportFindFirstOrThrowArgs} args - Arguments to find a T_Report
     * @example
     * // Get one T_Report
     * const t_Report = await prisma.t_Report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, T_ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Reports
     * const t_Reports = await prisma.t_Report.findMany()
     * 
     * // Get first 10 T_Reports
     * const t_Reports = await prisma.t_Report.findMany({ take: 10 })
     * 
     * // Only select the `id_Report`
     * const t_ReportWithId_ReportOnly = await prisma.t_Report.findMany({ select: { id_Report: true } })
     * 
     */
    findMany<T extends T_ReportFindManyArgs>(args?: SelectSubset<T, T_ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Report.
     * @param {T_ReportCreateArgs} args - Arguments to create a T_Report.
     * @example
     * // Create one T_Report
     * const T_Report = await prisma.t_Report.create({
     *   data: {
     *     // ... data to create a T_Report
     *   }
     * })
     * 
     */
    create<T extends T_ReportCreateArgs>(args: SelectSubset<T, T_ReportCreateArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Reports.
     * @param {T_ReportCreateManyArgs} args - Arguments to create many T_Reports.
     * @example
     * // Create many T_Reports
     * const t_Report = await prisma.t_Report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_ReportCreateManyArgs>(args?: SelectSubset<T, T_ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Reports and returns the data saved in the database.
     * @param {T_ReportCreateManyAndReturnArgs} args - Arguments to create many T_Reports.
     * @example
     * // Create many T_Reports
     * const t_Report = await prisma.t_Report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Reports and only return the `id_Report`
     * const t_ReportWithId_ReportOnly = await prisma.t_Report.createManyAndReturn({
     *   select: { id_Report: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, T_ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Report.
     * @param {T_ReportDeleteArgs} args - Arguments to delete one T_Report.
     * @example
     * // Delete one T_Report
     * const T_Report = await prisma.t_Report.delete({
     *   where: {
     *     // ... filter to delete one T_Report
     *   }
     * })
     * 
     */
    delete<T extends T_ReportDeleteArgs>(args: SelectSubset<T, T_ReportDeleteArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Report.
     * @param {T_ReportUpdateArgs} args - Arguments to update one T_Report.
     * @example
     * // Update one T_Report
     * const t_Report = await prisma.t_Report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_ReportUpdateArgs>(args: SelectSubset<T, T_ReportUpdateArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Reports.
     * @param {T_ReportDeleteManyArgs} args - Arguments to filter T_Reports to delete.
     * @example
     * // Delete a few T_Reports
     * const { count } = await prisma.t_Report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_ReportDeleteManyArgs>(args?: SelectSubset<T, T_ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Reports
     * const t_Report = await prisma.t_Report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_ReportUpdateManyArgs>(args: SelectSubset<T, T_ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Reports and returns the data updated in the database.
     * @param {T_ReportUpdateManyAndReturnArgs} args - Arguments to update many T_Reports.
     * @example
     * // Update many T_Reports
     * const t_Report = await prisma.t_Report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Reports and only return the `id_Report`
     * const t_ReportWithId_ReportOnly = await prisma.t_Report.updateManyAndReturn({
     *   select: { id_Report: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, T_ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Report.
     * @param {T_ReportUpsertArgs} args - Arguments to update or create a T_Report.
     * @example
     * // Update or create a T_Report
     * const t_Report = await prisma.t_Report.upsert({
     *   create: {
     *     // ... data to create a T_Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Report we want to update
     *   }
     * })
     */
    upsert<T extends T_ReportUpsertArgs>(args: SelectSubset<T, T_ReportUpsertArgs<ExtArgs>>): Prisma__T_ReportClient<$Result.GetResult<Prisma.$T_ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportCountArgs} args - Arguments to filter T_Reports to count.
     * @example
     * // Count the number of T_Reports
     * const count = await prisma.t_Report.count({
     *   where: {
     *     // ... the filter for the T_Reports we want to count
     *   }
     * })
    **/
    count<T extends T_ReportCountArgs>(
      args?: Subset<T, T_ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_ReportAggregateArgs>(args: Subset<T, T_ReportAggregateArgs>): Prisma.PrismaPromise<GetT_ReportAggregateType<T>>

    /**
     * Group by T_Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_ReportGroupByArgs} args - Group by arguments.
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
      T extends T_ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_ReportGroupByArgs['orderBy'] }
        : { orderBy?: T_ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_ReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Report model
   */
  readonly fields: T_ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the T_Report model
   */
  interface T_ReportFieldRefs {
    readonly id_Report: FieldRef<"T_Report", 'String'>
    readonly content_Report: FieldRef<"T_Report", 'String'>
    readonly createdAt_Report: FieldRef<"T_Report", 'DateTime'>
    readonly updatedAt_Report: FieldRef<"T_Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * T_Report findUnique
   */
  export type T_ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter, which T_Report to fetch.
     */
    where: T_ReportWhereUniqueInput
  }

  /**
   * T_Report findUniqueOrThrow
   */
  export type T_ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter, which T_Report to fetch.
     */
    where: T_ReportWhereUniqueInput
  }

  /**
   * T_Report findFirst
   */
  export type T_ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter, which T_Report to fetch.
     */
    where?: T_ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Reports to fetch.
     */
    orderBy?: T_ReportOrderByWithRelationInput | T_ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Reports.
     */
    cursor?: T_ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Reports.
     */
    distinct?: T_ReportScalarFieldEnum | T_ReportScalarFieldEnum[]
  }

  /**
   * T_Report findFirstOrThrow
   */
  export type T_ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter, which T_Report to fetch.
     */
    where?: T_ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Reports to fetch.
     */
    orderBy?: T_ReportOrderByWithRelationInput | T_ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Reports.
     */
    cursor?: T_ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Reports.
     */
    distinct?: T_ReportScalarFieldEnum | T_ReportScalarFieldEnum[]
  }

  /**
   * T_Report findMany
   */
  export type T_ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter, which T_Reports to fetch.
     */
    where?: T_ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Reports to fetch.
     */
    orderBy?: T_ReportOrderByWithRelationInput | T_ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Reports.
     */
    cursor?: T_ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Reports.
     */
    skip?: number
    distinct?: T_ReportScalarFieldEnum | T_ReportScalarFieldEnum[]
  }

  /**
   * T_Report create
   */
  export type T_ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * The data needed to create a T_Report.
     */
    data: XOR<T_ReportCreateInput, T_ReportUncheckedCreateInput>
  }

  /**
   * T_Report createMany
   */
  export type T_ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Reports.
     */
    data: T_ReportCreateManyInput | T_ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Report createManyAndReturn
   */
  export type T_ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * The data used to create many T_Reports.
     */
    data: T_ReportCreateManyInput | T_ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Report update
   */
  export type T_ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * The data needed to update a T_Report.
     */
    data: XOR<T_ReportUpdateInput, T_ReportUncheckedUpdateInput>
    /**
     * Choose, which T_Report to update.
     */
    where: T_ReportWhereUniqueInput
  }

  /**
   * T_Report updateMany
   */
  export type T_ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Reports.
     */
    data: XOR<T_ReportUpdateManyMutationInput, T_ReportUncheckedUpdateManyInput>
    /**
     * Filter which T_Reports to update
     */
    where?: T_ReportWhereInput
    /**
     * Limit how many T_Reports to update.
     */
    limit?: number
  }

  /**
   * T_Report updateManyAndReturn
   */
  export type T_ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * The data used to update T_Reports.
     */
    data: XOR<T_ReportUpdateManyMutationInput, T_ReportUncheckedUpdateManyInput>
    /**
     * Filter which T_Reports to update
     */
    where?: T_ReportWhereInput
    /**
     * Limit how many T_Reports to update.
     */
    limit?: number
  }

  /**
   * T_Report upsert
   */
  export type T_ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * The filter to search for the T_Report to update in case it exists.
     */
    where: T_ReportWhereUniqueInput
    /**
     * In case the T_Report found by the `where` argument doesn't exist, create a new T_Report with this data.
     */
    create: XOR<T_ReportCreateInput, T_ReportUncheckedCreateInput>
    /**
     * In case the T_Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_ReportUpdateInput, T_ReportUncheckedUpdateInput>
  }

  /**
   * T_Report delete
   */
  export type T_ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
    /**
     * Filter which T_Report to delete.
     */
    where: T_ReportWhereUniqueInput
  }

  /**
   * T_Report deleteMany
   */
  export type T_ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Reports to delete
     */
    where?: T_ReportWhereInput
    /**
     * Limit how many T_Reports to delete.
     */
    limit?: number
  }

  /**
   * T_Report without action
   */
  export type T_ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Report
     */
    select?: T_ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Report
     */
    omit?: T_ReportOmit<ExtArgs> | null
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


  export const T_AccountScalarFieldEnum: {
    id_Account: 'id_Account',
    nome_Account: 'nome_Account',
    email_Account: 'email_Account',
    password_Account: 'password_Account',
    createdAt_Account: 'createdAt_Account',
    updatedAt_Account: 'updatedAt_Account'
  };

  export type T_AccountScalarFieldEnum = (typeof T_AccountScalarFieldEnum)[keyof typeof T_AccountScalarFieldEnum]


  export const T_ReportScalarFieldEnum: {
    id_Report: 'id_Report',
    content_Report: 'content_Report',
    createdAt_Report: 'createdAt_Report',
    updatedAt_Report: 'updatedAt_Report'
  };

  export type T_ReportScalarFieldEnum = (typeof T_ReportScalarFieldEnum)[keyof typeof T_ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type T_AccountWhereInput = {
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    id_Account?: IntFilter<"T_Account"> | number
    nome_Account?: StringFilter<"T_Account"> | string
    email_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
  }

  export type T_AccountOrderByWithRelationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountWhereUniqueInput = Prisma.AtLeast<{
    id_Account?: number
    email_Account?: string
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    nome_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
  }, "id_Account" | "email_Account">

  export type T_AccountOrderByWithAggregationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
    _count?: T_AccountCountOrderByAggregateInput
    _avg?: T_AccountAvgOrderByAggregateInput
    _max?: T_AccountMaxOrderByAggregateInput
    _min?: T_AccountMinOrderByAggregateInput
    _sum?: T_AccountSumOrderByAggregateInput
  }

  export type T_AccountScalarWhereWithAggregatesInput = {
    AND?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    OR?: T_AccountScalarWhereWithAggregatesInput[]
    NOT?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    id_Account?: IntWithAggregatesFilter<"T_Account"> | number
    nome_Account?: StringWithAggregatesFilter<"T_Account"> | string
    email_Account?: StringWithAggregatesFilter<"T_Account"> | string
    password_Account?: StringWithAggregatesFilter<"T_Account"> | string
    createdAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
  }

  export type T_ReportWhereInput = {
    AND?: T_ReportWhereInput | T_ReportWhereInput[]
    OR?: T_ReportWhereInput[]
    NOT?: T_ReportWhereInput | T_ReportWhereInput[]
    id_Report?: StringFilter<"T_Report"> | string
    content_Report?: StringNullableFilter<"T_Report"> | string | null
    createdAt_Report?: DateTimeFilter<"T_Report"> | Date | string
    updatedAt_Report?: DateTimeFilter<"T_Report"> | Date | string
  }

  export type T_ReportOrderByWithRelationInput = {
    id_Report?: SortOrder
    content_Report?: SortOrderInput | SortOrder
    createdAt_Report?: SortOrder
    updatedAt_Report?: SortOrder
  }

  export type T_ReportWhereUniqueInput = Prisma.AtLeast<{
    id_Report?: string
    AND?: T_ReportWhereInput | T_ReportWhereInput[]
    OR?: T_ReportWhereInput[]
    NOT?: T_ReportWhereInput | T_ReportWhereInput[]
    content_Report?: StringNullableFilter<"T_Report"> | string | null
    createdAt_Report?: DateTimeFilter<"T_Report"> | Date | string
    updatedAt_Report?: DateTimeFilter<"T_Report"> | Date | string
  }, "id_Report">

  export type T_ReportOrderByWithAggregationInput = {
    id_Report?: SortOrder
    content_Report?: SortOrderInput | SortOrder
    createdAt_Report?: SortOrder
    updatedAt_Report?: SortOrder
    _count?: T_ReportCountOrderByAggregateInput
    _max?: T_ReportMaxOrderByAggregateInput
    _min?: T_ReportMinOrderByAggregateInput
  }

  export type T_ReportScalarWhereWithAggregatesInput = {
    AND?: T_ReportScalarWhereWithAggregatesInput | T_ReportScalarWhereWithAggregatesInput[]
    OR?: T_ReportScalarWhereWithAggregatesInput[]
    NOT?: T_ReportScalarWhereWithAggregatesInput | T_ReportScalarWhereWithAggregatesInput[]
    id_Report?: StringWithAggregatesFilter<"T_Report"> | string
    content_Report?: StringNullableWithAggregatesFilter<"T_Report"> | string | null
    createdAt_Report?: DateTimeWithAggregatesFilter<"T_Report"> | Date | string
    updatedAt_Report?: DateTimeWithAggregatesFilter<"T_Report"> | Date | string
  }

  export type T_AccountCreateInput = {
    nome_Account: string
    email_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUncheckedCreateInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUpdateInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountCreateManyInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUpdateManyMutationInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateManyInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_ReportCreateInput = {
    id_Report?: string
    content_Report?: string | null
    createdAt_Report?: Date | string
    updatedAt_Report?: Date | string
  }

  export type T_ReportUncheckedCreateInput = {
    id_Report?: string
    content_Report?: string | null
    createdAt_Report?: Date | string
    updatedAt_Report?: Date | string
  }

  export type T_ReportUpdateInput = {
    id_Report?: StringFieldUpdateOperationsInput | string
    content_Report?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_ReportUncheckedUpdateInput = {
    id_Report?: StringFieldUpdateOperationsInput | string
    content_Report?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_ReportCreateManyInput = {
    id_Report?: string
    content_Report?: string | null
    createdAt_Report?: Date | string
    updatedAt_Report?: Date | string
  }

  export type T_ReportUpdateManyMutationInput = {
    id_Report?: StringFieldUpdateOperationsInput | string
    content_Report?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_ReportUncheckedUpdateManyInput = {
    id_Report?: StringFieldUpdateOperationsInput | string
    content_Report?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Report?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type T_AccountCountOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountAvgOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type T_AccountMaxOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountMinOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountSumOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type T_ReportCountOrderByAggregateInput = {
    id_Report?: SortOrder
    content_Report?: SortOrder
    createdAt_Report?: SortOrder
    updatedAt_Report?: SortOrder
  }

  export type T_ReportMaxOrderByAggregateInput = {
    id_Report?: SortOrder
    content_Report?: SortOrder
    createdAt_Report?: SortOrder
    updatedAt_Report?: SortOrder
  }

  export type T_ReportMinOrderByAggregateInput = {
    id_Report?: SortOrder
    content_Report?: SortOrder
    createdAt_Report?: SortOrder
    updatedAt_Report?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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