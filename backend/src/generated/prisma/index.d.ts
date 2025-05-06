
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JobOffer
 * 
 */
export type JobOffer = $Result.DefaultSelection<Prisma.$JobOfferPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model JobMatch
 * 
 */
export type JobMatch = $Result.DefaultSelection<Prisma.$JobMatchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOffer`: Exposes CRUD operations for the **JobOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOffers
    * const jobOffers = await prisma.jobOffer.findMany()
    * ```
    */
  get jobOffer(): Prisma.JobOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobMatch`: Exposes CRUD operations for the **JobMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobMatches
    * const jobMatches = await prisma.jobMatch.findMany()
    * ```
    */
  get jobMatch(): Prisma.JobMatchDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    JobOffer: 'JobOffer',
    UserProfile: 'UserProfile',
    Skill: 'Skill',
    Experience: 'Experience',
    Education: 'Education',
    JobMatch: 'JobMatch'
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
      modelProps: "user" | "jobOffer" | "userProfile" | "skill" | "experience" | "education" | "jobMatch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JobOffer: {
        payload: Prisma.$JobOfferPayload<ExtArgs>
        fields: Prisma.JobOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findFirst: {
            args: Prisma.JobOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findMany: {
            args: Prisma.JobOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          create: {
            args: Prisma.JobOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          createMany: {
            args: Prisma.JobOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          delete: {
            args: Prisma.JobOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          update: {
            args: Prisma.JobOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          deleteMany: {
            args: Prisma.JobOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          upsert: {
            args: Prisma.JobOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          aggregate: {
            args: Prisma.JobOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOffer>
          }
          groupBy: {
            args: Prisma.JobOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOfferCountArgs<ExtArgs>
            result: $Utils.Optional<JobOfferCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      JobMatch: {
        payload: Prisma.$JobMatchPayload<ExtArgs>
        fields: Prisma.JobMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          findFirst: {
            args: Prisma.JobMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          findMany: {
            args: Prisma.JobMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          create: {
            args: Prisma.JobMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          createMany: {
            args: Prisma.JobMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          delete: {
            args: Prisma.JobMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          update: {
            args: Prisma.JobMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          deleteMany: {
            args: Prisma.JobMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobMatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          upsert: {
            args: Prisma.JobMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          aggregate: {
            args: Prisma.JobMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobMatch>
          }
          groupBy: {
            args: Prisma.JobMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobMatchCountArgs<ExtArgs>
            result: $Utils.Optional<JobMatchCountAggregateOutputType> | number
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
    user?: UserOmit
    jobOffer?: JobOfferOmit
    userProfile?: UserProfileOmit
    skill?: SkillOmit
    experience?: ExperienceOmit
    education?: EducationOmit
    jobMatch?: JobMatchOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    offers: number
    profiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | UserCountOutputTypeCountOffersArgs
    profiles?: boolean | UserCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Count Type JobOfferCountOutputType
   */

  export type JobOfferCountOutputType = {
    skills: number
    jobMatches: number
  }

  export type JobOfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | JobOfferCountOutputTypeCountSkillsArgs
    jobMatches?: boolean | JobOfferCountOutputTypeCountJobMatchesArgs
  }

  // Custom InputTypes
  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOfferCountOutputType
     */
    select?: JobOfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeCountJobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
  }


  /**
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    skills: number
    experiences: number
    education: number
    jobMatches: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | UserProfileCountOutputTypeCountSkillsArgs
    experiences?: boolean | UserProfileCountOutputTypeCountExperiencesArgs
    education?: boolean | UserProfileCountOutputTypeCountEducationArgs
    jobMatches?: boolean | UserProfileCountOutputTypeCountJobMatchesArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountJobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    jobOffers: number
    profiles: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffers?: boolean | SkillCountOutputTypeCountJobOffersArgs
    profiles?: boolean | SkillCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountJobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    offers?: boolean | User$offersArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | User$offersArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      offers: Prisma.$JobOfferPayload<ExtArgs>[]
      profiles: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    cursor?: JobOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JobOffer
   */

  export type AggregateJobOffer = {
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  export type JobOfferAvgAggregateOutputType = {
    id: number | null
    score: number | null
    userId: number | null
  }

  export type JobOfferSumAggregateOutputType = {
    id: number | null
    score: number | null
    userId: number | null
  }

  export type JobOfferMinAggregateOutputType = {
    id: number | null
    title: string | null
    location: string | null
    company: string | null
    score: number | null
    alerts: string | null
    status: string | null
    url: string | null
    source: string | null
    contractType: string | null
    salary: string | null
    description: string | null
    skillsText: string | null
    skillsDynamicText: string | null
    userId: number | null
  }

  export type JobOfferMaxAggregateOutputType = {
    id: number | null
    title: string | null
    location: string | null
    company: string | null
    score: number | null
    alerts: string | null
    status: string | null
    url: string | null
    source: string | null
    contractType: string | null
    salary: string | null
    description: string | null
    skillsText: string | null
    skillsDynamicText: string | null
    userId: number | null
  }

  export type JobOfferCountAggregateOutputType = {
    id: number
    title: number
    location: number
    company: number
    score: number
    alerts: number
    status: number
    url: number
    source: number
    contractType: number
    salary: number
    description: number
    skillsText: number
    skillsDynamicText: number
    userId: number
    _all: number
  }


  export type JobOfferAvgAggregateInputType = {
    id?: true
    score?: true
    userId?: true
  }

  export type JobOfferSumAggregateInputType = {
    id?: true
    score?: true
    userId?: true
  }

  export type JobOfferMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    company?: true
    score?: true
    alerts?: true
    status?: true
    url?: true
    source?: true
    contractType?: true
    salary?: true
    description?: true
    skillsText?: true
    skillsDynamicText?: true
    userId?: true
  }

  export type JobOfferMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    company?: true
    score?: true
    alerts?: true
    status?: true
    url?: true
    source?: true
    contractType?: true
    salary?: true
    description?: true
    skillsText?: true
    skillsDynamicText?: true
    userId?: true
  }

  export type JobOfferCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    company?: true
    score?: true
    alerts?: true
    status?: true
    url?: true
    source?: true
    contractType?: true
    salary?: true
    description?: true
    skillsText?: true
    skillsDynamicText?: true
    userId?: true
    _all?: true
  }

  export type JobOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffer to aggregate.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOffers
    **/
    _count?: true | JobOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOfferMaxAggregateInputType
  }

  export type GetJobOfferAggregateType<T extends JobOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOffer[P]>
      : GetScalarType<T[P], AggregateJobOffer[P]>
  }




  export type JobOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithAggregationInput | JobOfferOrderByWithAggregationInput[]
    by: JobOfferScalarFieldEnum[] | JobOfferScalarFieldEnum
    having?: JobOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOfferCountAggregateInputType | true
    _avg?: JobOfferAvgAggregateInputType
    _sum?: JobOfferSumAggregateInputType
    _min?: JobOfferMinAggregateInputType
    _max?: JobOfferMaxAggregateInputType
  }

  export type JobOfferGroupByOutputType = {
    id: number
    title: string
    location: string
    company: string | null
    score: number | null
    alerts: string | null
    status: string
    url: string
    source: string
    contractType: string | null
    salary: string | null
    description: string | null
    skillsText: string | null
    skillsDynamicText: string | null
    userId: number
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  type GetJobOfferGroupByPayload<T extends JobOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
            : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
        }
      >
    >


  export type JobOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    company?: boolean
    score?: boolean
    alerts?: boolean
    status?: boolean
    url?: boolean
    source?: boolean
    contractType?: boolean
    salary?: boolean
    description?: boolean
    skillsText?: boolean
    skillsDynamicText?: boolean
    userId?: boolean
    skills?: boolean | JobOffer$skillsArgs<ExtArgs>
    jobMatches?: boolean | JobOffer$jobMatchesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    company?: boolean
    score?: boolean
    alerts?: boolean
    status?: boolean
    url?: boolean
    source?: boolean
    contractType?: boolean
    salary?: boolean
    description?: boolean
    skillsText?: boolean
    skillsDynamicText?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    company?: boolean
    score?: boolean
    alerts?: boolean
    status?: boolean
    url?: boolean
    source?: boolean
    contractType?: boolean
    salary?: boolean
    description?: boolean
    skillsText?: boolean
    skillsDynamicText?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    company?: boolean
    score?: boolean
    alerts?: boolean
    status?: boolean
    url?: boolean
    source?: boolean
    contractType?: boolean
    salary?: boolean
    description?: boolean
    skillsText?: boolean
    skillsDynamicText?: boolean
    userId?: boolean
  }

  export type JobOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "company" | "score" | "alerts" | "status" | "url" | "source" | "contractType" | "salary" | "description" | "skillsText" | "skillsDynamicText" | "userId", ExtArgs["result"]["jobOffer"]>
  export type JobOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | JobOffer$skillsArgs<ExtArgs>
    jobMatches?: boolean | JobOffer$jobMatchesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOffer"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      jobMatches: Prisma.$JobMatchPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      location: string
      company: string | null
      score: number | null
      alerts: string | null
      status: string
      url: string
      source: string
      contractType: string | null
      salary: string | null
      description: string | null
      skillsText: string | null
      skillsDynamicText: string | null
      userId: number
    }, ExtArgs["result"]["jobOffer"]>
    composites: {}
  }

  type JobOfferGetPayload<S extends boolean | null | undefined | JobOfferDefaultArgs> = $Result.GetResult<Prisma.$JobOfferPayload, S>

  type JobOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOfferCountAggregateInputType | true
    }

  export interface JobOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOffer'], meta: { name: 'JobOffer' } }
    /**
     * Find zero or one JobOffer that matches the filter.
     * @param {JobOfferFindUniqueArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOfferFindUniqueArgs>(args: SelectSubset<T, JobOfferFindUniqueArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOfferFindUniqueOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOfferFindFirstArgs>(args?: SelectSubset<T, JobOfferFindFirstArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOffers
     * const jobOffers = await prisma.jobOffer.findMany()
     * 
     * // Get first 10 JobOffers
     * const jobOffers = await prisma.jobOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOfferFindManyArgs>(args?: SelectSubset<T, JobOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOffer.
     * @param {JobOfferCreateArgs} args - Arguments to create a JobOffer.
     * @example
     * // Create one JobOffer
     * const JobOffer = await prisma.jobOffer.create({
     *   data: {
     *     // ... data to create a JobOffer
     *   }
     * })
     * 
     */
    create<T extends JobOfferCreateArgs>(args: SelectSubset<T, JobOfferCreateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOffers.
     * @param {JobOfferCreateManyArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOfferCreateManyArgs>(args?: SelectSubset<T, JobOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOffers and returns the data saved in the database.
     * @param {JobOfferCreateManyAndReturnArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobOffer.
     * @param {JobOfferDeleteArgs} args - Arguments to delete one JobOffer.
     * @example
     * // Delete one JobOffer
     * const JobOffer = await prisma.jobOffer.delete({
     *   where: {
     *     // ... filter to delete one JobOffer
     *   }
     * })
     * 
     */
    delete<T extends JobOfferDeleteArgs>(args: SelectSubset<T, JobOfferDeleteArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOffer.
     * @param {JobOfferUpdateArgs} args - Arguments to update one JobOffer.
     * @example
     * // Update one JobOffer
     * const jobOffer = await prisma.jobOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOfferUpdateArgs>(args: SelectSubset<T, JobOfferUpdateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOffers.
     * @param {JobOfferDeleteManyArgs} args - Arguments to filter JobOffers to delete.
     * @example
     * // Delete a few JobOffers
     * const { count } = await prisma.jobOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOfferDeleteManyArgs>(args?: SelectSubset<T, JobOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOfferUpdateManyArgs>(args: SelectSubset<T, JobOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers and returns the data updated in the database.
     * @param {JobOfferUpdateManyAndReturnArgs} args - Arguments to update many JobOffers.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JobOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobOffer.
     * @param {JobOfferUpsertArgs} args - Arguments to update or create a JobOffer.
     * @example
     * // Update or create a JobOffer
     * const jobOffer = await prisma.jobOffer.upsert({
     *   create: {
     *     // ... data to create a JobOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOffer we want to update
     *   }
     * })
     */
    upsert<T extends JobOfferUpsertArgs>(args: SelectSubset<T, JobOfferUpsertArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferCountArgs} args - Arguments to filter JobOffers to count.
     * @example
     * // Count the number of JobOffers
     * const count = await prisma.jobOffer.count({
     *   where: {
     *     // ... the filter for the JobOffers we want to count
     *   }
     * })
    **/
    count<T extends JobOfferCountArgs>(
      args?: Subset<T, JobOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobOfferAggregateArgs>(args: Subset<T, JobOfferAggregateArgs>): Prisma.PrismaPromise<GetJobOfferAggregateType<T>>

    /**
     * Group by JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferGroupByArgs} args - Group by arguments.
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
      T extends JobOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOfferGroupByArgs['orderBy'] }
        : { orderBy?: JobOfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOffer model
   */
  readonly fields: JobOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends JobOffer$skillsArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobMatches<T extends JobOffer$jobMatchesArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$jobMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobOffer model
   */
  interface JobOfferFieldRefs {
    readonly id: FieldRef<"JobOffer", 'Int'>
    readonly title: FieldRef<"JobOffer", 'String'>
    readonly location: FieldRef<"JobOffer", 'String'>
    readonly company: FieldRef<"JobOffer", 'String'>
    readonly score: FieldRef<"JobOffer", 'Int'>
    readonly alerts: FieldRef<"JobOffer", 'String'>
    readonly status: FieldRef<"JobOffer", 'String'>
    readonly url: FieldRef<"JobOffer", 'String'>
    readonly source: FieldRef<"JobOffer", 'String'>
    readonly contractType: FieldRef<"JobOffer", 'String'>
    readonly salary: FieldRef<"JobOffer", 'String'>
    readonly description: FieldRef<"JobOffer", 'String'>
    readonly skillsText: FieldRef<"JobOffer", 'String'>
    readonly skillsDynamicText: FieldRef<"JobOffer", 'String'>
    readonly userId: FieldRef<"JobOffer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JobOffer findUnique
   */
  export type JobOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findUniqueOrThrow
   */
  export type JobOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findFirst
   */
  export type JobOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findFirstOrThrow
   */
  export type JobOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findMany
   */
  export type JobOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffers to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer create
   */
  export type JobOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a JobOffer.
     */
    data: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
  }

  /**
   * JobOffer createMany
   */
  export type JobOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
  }

  /**
   * JobOffer createManyAndReturn
   */
  export type JobOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOffer update
   */
  export type JobOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a JobOffer.
     */
    data: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
    /**
     * Choose, which JobOffer to update.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer updateMany
   */
  export type JobOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
  }

  /**
   * JobOffer updateManyAndReturn
   */
  export type JobOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOffer upsert
   */
  export type JobOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the JobOffer to update in case it exists.
     */
    where: JobOfferWhereUniqueInput
    /**
     * In case the JobOffer found by the `where` argument doesn't exist, create a new JobOffer with this data.
     */
    create: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
    /**
     * In case the JobOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
  }

  /**
   * JobOffer delete
   */
  export type JobOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter which JobOffer to delete.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer deleteMany
   */
  export type JobOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffers to delete
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to delete.
     */
    limit?: number
  }

  /**
   * JobOffer.skills
   */
  export type JobOffer$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * JobOffer.jobMatches
   */
  export type JobOffer$jobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    cursor?: JobMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobOffer without action
   */
  export type JobOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    userId: number | null
    certifications: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    userId: number | null
    certifications: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    name: number
    title: number
    userId: number
    certifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    userId?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    userId?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    userId?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    name: string
    title: string | null
    userId: number
    certifications: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    userId?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | UserProfile$skillsArgs<ExtArgs>
    experiences?: boolean | UserProfile$experiencesArgs<ExtArgs>
    education?: boolean | UserProfile$educationArgs<ExtArgs>
    jobMatches?: boolean | UserProfile$jobMatchesArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    userId?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    userId?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    userId?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "userId" | "certifications" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | UserProfile$skillsArgs<ExtArgs>
    experiences?: boolean | UserProfile$experiencesArgs<ExtArgs>
    education?: boolean | UserProfile$educationArgs<ExtArgs>
    jobMatches?: boolean | UserProfile$jobMatchesArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skills: Prisma.$SkillPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      jobMatches: Prisma.$JobMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      title: string | null
      userId: number
      certifications: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends UserProfile$skillsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends UserProfile$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends UserProfile$educationArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobMatches<T extends UserProfile$jobMatchesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$jobMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly title: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'Int'>
    readonly certifications: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.skills
   */
  export type UserProfile$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * UserProfile.experiences
   */
  export type UserProfile$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * UserProfile.education
   */
  export type UserProfile$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * UserProfile.jobMatches
   */
  export type UserProfile$jobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    cursor?: JobMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    category: string | null
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    jobOffers?: boolean | Skill$jobOffersArgs<ExtArgs>
    profiles?: boolean | Skill$profilesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffers?: boolean | Skill$jobOffersArgs<ExtArgs>
    profiles?: boolean | Skill$profilesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      jobOffers: Prisma.$JobOfferPayload<ExtArgs>[]
      profiles: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string | null
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffers<T extends Skill$jobOffersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$jobOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends Skill$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Skill$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.jobOffers
   */
  export type Skill$jobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    cursor?: JobOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * Skill.profiles
   */
  export type Skill$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    startDate: Date | null
    endDate: Date | null
    current: boolean | null
    description: string | null
    skills: string | null
    profileId: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    startDate: Date | null
    endDate: Date | null
    current: boolean | null
    description: string | null
    skills: string | null
    profileId: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    company: number
    startDate: number
    endDate: number
    current: number
    description: number
    skills: number
    profileId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    skills?: true
    profileId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    skills?: true
    profileId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    skills?: true
    profileId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    title: string
    company: string
    startDate: Date
    endDate: Date | null
    current: boolean
    description: string | null
    skills: string | null
    profileId: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    skills?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    skills?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    skills?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    skills?: boolean
    profileId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "startDate" | "endDate" | "current" | "description" | "skills" | "profileId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      company: string
      startDate: Date
      endDate: Date | null
      current: boolean
      description: string | null
      skills: string | null
      profileId: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly current: FieldRef<"Experience", 'Boolean'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly skills: FieldRef<"Experience", 'String'>
    readonly profileId: FieldRef<"Experience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    degree: string | null
    institution: string | null
    startDate: Date | null
    endDate: Date | null
    current: boolean | null
    description: string | null
    profileId: number | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    degree: string | null
    institution: string | null
    startDate: Date | null
    endDate: Date | null
    current: boolean | null
    description: string | null
    profileId: number | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    degree: number
    institution: number
    startDate: number
    endDate: number
    current: number
    description: number
    profileId: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    degree?: true
    institution?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    profileId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    degree?: true
    institution?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    profileId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    degree?: true
    institution?: true
    startDate?: true
    endDate?: true
    current?: true
    description?: true
    profileId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    degree: string
    institution: string
    startDate: Date
    endDate: Date | null
    current: boolean
    description: string | null
    profileId: number
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    institution?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    institution?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    institution?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    degree?: boolean
    institution?: boolean
    startDate?: boolean
    endDate?: boolean
    current?: boolean
    description?: boolean
    profileId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "degree" | "institution" | "startDate" | "endDate" | "current" | "description" | "profileId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      degree: string
      institution: string
      startDate: Date
      endDate: Date | null
      current: boolean
      description: string | null
      profileId: number
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly current: FieldRef<"Education", 'Boolean'>
    readonly description: FieldRef<"Education", 'String'>
    readonly profileId: FieldRef<"Education", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model JobMatch
   */

  export type AggregateJobMatch = {
    _count: JobMatchCountAggregateOutputType | null
    _avg: JobMatchAvgAggregateOutputType | null
    _sum: JobMatchSumAggregateOutputType | null
    _min: JobMatchMinAggregateOutputType | null
    _max: JobMatchMaxAggregateOutputType | null
  }

  export type JobMatchAvgAggregateOutputType = {
    id: number | null
    jobOfferId: number | null
    userProfileId: number | null
    matchPercentage: number | null
  }

  export type JobMatchSumAggregateOutputType = {
    id: number | null
    jobOfferId: number | null
    userProfileId: number | null
    matchPercentage: number | null
  }

  export type JobMatchMinAggregateOutputType = {
    id: number | null
    jobOfferId: number | null
    userProfileId: number | null
    matchPercentage: number | null
    matchingSkills: string | null
    missingSkills: string | null
    createdAt: Date | null
  }

  export type JobMatchMaxAggregateOutputType = {
    id: number | null
    jobOfferId: number | null
    userProfileId: number | null
    matchPercentage: number | null
    matchingSkills: string | null
    missingSkills: string | null
    createdAt: Date | null
  }

  export type JobMatchCountAggregateOutputType = {
    id: number
    jobOfferId: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: number
    missingSkills: number
    createdAt: number
    _all: number
  }


  export type JobMatchAvgAggregateInputType = {
    id?: true
    jobOfferId?: true
    userProfileId?: true
    matchPercentage?: true
  }

  export type JobMatchSumAggregateInputType = {
    id?: true
    jobOfferId?: true
    userProfileId?: true
    matchPercentage?: true
  }

  export type JobMatchMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    userProfileId?: true
    matchPercentage?: true
    matchingSkills?: true
    missingSkills?: true
    createdAt?: true
  }

  export type JobMatchMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    userProfileId?: true
    matchPercentage?: true
    matchingSkills?: true
    missingSkills?: true
    createdAt?: true
  }

  export type JobMatchCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    userProfileId?: true
    matchPercentage?: true
    matchingSkills?: true
    missingSkills?: true
    createdAt?: true
    _all?: true
  }

  export type JobMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMatch to aggregate.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobMatches
    **/
    _count?: true | JobMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMatchMaxAggregateInputType
  }

  export type GetJobMatchAggregateType<T extends JobMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateJobMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobMatch[P]>
      : GetScalarType<T[P], AggregateJobMatch[P]>
  }




  export type JobMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithAggregationInput | JobMatchOrderByWithAggregationInput[]
    by: JobMatchScalarFieldEnum[] | JobMatchScalarFieldEnum
    having?: JobMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobMatchCountAggregateInputType | true
    _avg?: JobMatchAvgAggregateInputType
    _sum?: JobMatchSumAggregateInputType
    _min?: JobMatchMinAggregateInputType
    _max?: JobMatchMaxAggregateInputType
  }

  export type JobMatchGroupByOutputType = {
    id: number
    jobOfferId: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt: Date
    _count: JobMatchCountAggregateOutputType | null
    _avg: JobMatchAvgAggregateOutputType | null
    _sum: JobMatchSumAggregateOutputType | null
    _min: JobMatchMinAggregateOutputType | null
    _max: JobMatchMaxAggregateOutputType | null
  }

  type GetJobMatchGroupByPayload<T extends JobMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobMatchGroupByOutputType[P]>
            : GetScalarType<T[P], JobMatchGroupByOutputType[P]>
        }
      >
    >


  export type JobMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    userProfileId?: boolean
    matchPercentage?: boolean
    matchingSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    userProfileId?: boolean
    matchPercentage?: boolean
    matchingSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    userProfileId?: boolean
    matchPercentage?: boolean
    matchingSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    userProfileId?: boolean
    matchPercentage?: boolean
    matchingSkills?: boolean
    missingSkills?: boolean
    createdAt?: boolean
  }

  export type JobMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "userProfileId" | "matchPercentage" | "matchingSkills" | "missingSkills" | "createdAt", ExtArgs["result"]["jobMatch"]>
  export type JobMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type JobMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type JobMatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $JobMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobMatch"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
      userProfile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobOfferId: number
      userProfileId: number
      matchPercentage: number
      matchingSkills: string
      missingSkills: string
      createdAt: Date
    }, ExtArgs["result"]["jobMatch"]>
    composites: {}
  }

  type JobMatchGetPayload<S extends boolean | null | undefined | JobMatchDefaultArgs> = $Result.GetResult<Prisma.$JobMatchPayload, S>

  type JobMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobMatchCountAggregateInputType | true
    }

  export interface JobMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobMatch'], meta: { name: 'JobMatch' } }
    /**
     * Find zero or one JobMatch that matches the filter.
     * @param {JobMatchFindUniqueArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobMatchFindUniqueArgs>(args: SelectSubset<T, JobMatchFindUniqueArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobMatchFindUniqueOrThrowArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, JobMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindFirstArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobMatchFindFirstArgs>(args?: SelectSubset<T, JobMatchFindFirstArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindFirstOrThrowArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, JobMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobMatches
     * const jobMatches = await prisma.jobMatch.findMany()
     * 
     * // Get first 10 JobMatches
     * const jobMatches = await prisma.jobMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobMatchFindManyArgs>(args?: SelectSubset<T, JobMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobMatch.
     * @param {JobMatchCreateArgs} args - Arguments to create a JobMatch.
     * @example
     * // Create one JobMatch
     * const JobMatch = await prisma.jobMatch.create({
     *   data: {
     *     // ... data to create a JobMatch
     *   }
     * })
     * 
     */
    create<T extends JobMatchCreateArgs>(args: SelectSubset<T, JobMatchCreateArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobMatches.
     * @param {JobMatchCreateManyArgs} args - Arguments to create many JobMatches.
     * @example
     * // Create many JobMatches
     * const jobMatch = await prisma.jobMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobMatchCreateManyArgs>(args?: SelectSubset<T, JobMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobMatches and returns the data saved in the database.
     * @param {JobMatchCreateManyAndReturnArgs} args - Arguments to create many JobMatches.
     * @example
     * // Create many JobMatches
     * const jobMatch = await prisma.jobMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobMatches and only return the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, JobMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobMatch.
     * @param {JobMatchDeleteArgs} args - Arguments to delete one JobMatch.
     * @example
     * // Delete one JobMatch
     * const JobMatch = await prisma.jobMatch.delete({
     *   where: {
     *     // ... filter to delete one JobMatch
     *   }
     * })
     * 
     */
    delete<T extends JobMatchDeleteArgs>(args: SelectSubset<T, JobMatchDeleteArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobMatch.
     * @param {JobMatchUpdateArgs} args - Arguments to update one JobMatch.
     * @example
     * // Update one JobMatch
     * const jobMatch = await prisma.jobMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobMatchUpdateArgs>(args: SelectSubset<T, JobMatchUpdateArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobMatches.
     * @param {JobMatchDeleteManyArgs} args - Arguments to filter JobMatches to delete.
     * @example
     * // Delete a few JobMatches
     * const { count } = await prisma.jobMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobMatchDeleteManyArgs>(args?: SelectSubset<T, JobMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobMatches
     * const jobMatch = await prisma.jobMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobMatchUpdateManyArgs>(args: SelectSubset<T, JobMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMatches and returns the data updated in the database.
     * @param {JobMatchUpdateManyAndReturnArgs} args - Arguments to update many JobMatches.
     * @example
     * // Update many JobMatches
     * const jobMatch = await prisma.jobMatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobMatches and only return the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JobMatchUpdateManyAndReturnArgs>(args: SelectSubset<T, JobMatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobMatch.
     * @param {JobMatchUpsertArgs} args - Arguments to update or create a JobMatch.
     * @example
     * // Update or create a JobMatch
     * const jobMatch = await prisma.jobMatch.upsert({
     *   create: {
     *     // ... data to create a JobMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobMatch we want to update
     *   }
     * })
     */
    upsert<T extends JobMatchUpsertArgs>(args: SelectSubset<T, JobMatchUpsertArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchCountArgs} args - Arguments to filter JobMatches to count.
     * @example
     * // Count the number of JobMatches
     * const count = await prisma.jobMatch.count({
     *   where: {
     *     // ... the filter for the JobMatches we want to count
     *   }
     * })
    **/
    count<T extends JobMatchCountArgs>(
      args?: Subset<T, JobMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobMatchAggregateArgs>(args: Subset<T, JobMatchAggregateArgs>): Prisma.PrismaPromise<GetJobMatchAggregateType<T>>

    /**
     * Group by JobMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchGroupByArgs} args - Group by arguments.
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
      T extends JobMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobMatchGroupByArgs['orderBy'] }
        : { orderBy?: JobMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobMatch model
   */
  readonly fields: JobMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userProfile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobMatch model
   */
  interface JobMatchFieldRefs {
    readonly id: FieldRef<"JobMatch", 'Int'>
    readonly jobOfferId: FieldRef<"JobMatch", 'Int'>
    readonly userProfileId: FieldRef<"JobMatch", 'Int'>
    readonly matchPercentage: FieldRef<"JobMatch", 'Int'>
    readonly matchingSkills: FieldRef<"JobMatch", 'String'>
    readonly missingSkills: FieldRef<"JobMatch", 'String'>
    readonly createdAt: FieldRef<"JobMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobMatch findUnique
   */
  export type JobMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch findUniqueOrThrow
   */
  export type JobMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch findFirst
   */
  export type JobMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMatches.
     */
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch findFirstOrThrow
   */
  export type JobMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMatches.
     */
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch findMany
   */
  export type JobMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatches to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch create
   */
  export type JobMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a JobMatch.
     */
    data: XOR<JobMatchCreateInput, JobMatchUncheckedCreateInput>
  }

  /**
   * JobMatch createMany
   */
  export type JobMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobMatches.
     */
    data: JobMatchCreateManyInput | JobMatchCreateManyInput[]
  }

  /**
   * JobMatch createManyAndReturn
   */
  export type JobMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * The data used to create many JobMatches.
     */
    data: JobMatchCreateManyInput | JobMatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobMatch update
   */
  export type JobMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a JobMatch.
     */
    data: XOR<JobMatchUpdateInput, JobMatchUncheckedUpdateInput>
    /**
     * Choose, which JobMatch to update.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch updateMany
   */
  export type JobMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobMatches.
     */
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyInput>
    /**
     * Filter which JobMatches to update
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to update.
     */
    limit?: number
  }

  /**
   * JobMatch updateManyAndReturn
   */
  export type JobMatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * The data used to update JobMatches.
     */
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyInput>
    /**
     * Filter which JobMatches to update
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobMatch upsert
   */
  export type JobMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the JobMatch to update in case it exists.
     */
    where: JobMatchWhereUniqueInput
    /**
     * In case the JobMatch found by the `where` argument doesn't exist, create a new JobMatch with this data.
     */
    create: XOR<JobMatchCreateInput, JobMatchUncheckedCreateInput>
    /**
     * In case the JobMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobMatchUpdateInput, JobMatchUncheckedUpdateInput>
  }

  /**
   * JobMatch delete
   */
  export type JobMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter which JobMatch to delete.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch deleteMany
   */
  export type JobMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMatches to delete
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to delete.
     */
    limit?: number
  }

  /**
   * JobMatch without action
   */
  export type JobMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobOfferScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    company: 'company',
    score: 'score',
    alerts: 'alerts',
    status: 'status',
    url: 'url',
    source: 'source',
    contractType: 'contractType',
    salary: 'salary',
    description: 'description',
    skillsText: 'skillsText',
    skillsDynamicText: 'skillsDynamicText',
    userId: 'userId'
  };

  export type JobOfferScalarFieldEnum = (typeof JobOfferScalarFieldEnum)[keyof typeof JobOfferScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    userId: 'userId',
    certifications: 'certifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    startDate: 'startDate',
    endDate: 'endDate',
    current: 'current',
    description: 'description',
    skills: 'skills',
    profileId: 'profileId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    degree: 'degree',
    institution: 'institution',
    startDate: 'startDate',
    endDate: 'endDate',
    current: 'current',
    description: 'description',
    profileId: 'profileId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const JobMatchScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    userProfileId: 'userProfileId',
    matchPercentage: 'matchPercentage',
    matchingSkills: 'matchingSkills',
    missingSkills: 'missingSkills',
    createdAt: 'createdAt'
  };

  export type JobMatchScalarFieldEnum = (typeof JobMatchScalarFieldEnum)[keyof typeof JobMatchScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    offers?: JobOfferListRelationFilter
    profiles?: UserProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    offers?: JobOfferOrderByRelationAggregateInput
    profiles?: UserProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    offers?: JobOfferListRelationFilter
    profiles?: UserProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type JobOfferWhereInput = {
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    id?: IntFilter<"JobOffer"> | number
    title?: StringFilter<"JobOffer"> | string
    location?: StringFilter<"JobOffer"> | string
    company?: StringNullableFilter<"JobOffer"> | string | null
    score?: IntNullableFilter<"JobOffer"> | number | null
    alerts?: StringNullableFilter<"JobOffer"> | string | null
    status?: StringFilter<"JobOffer"> | string
    url?: StringFilter<"JobOffer"> | string
    source?: StringFilter<"JobOffer"> | string
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    salary?: StringNullableFilter<"JobOffer"> | string | null
    description?: StringNullableFilter<"JobOffer"> | string | null
    skillsText?: StringNullableFilter<"JobOffer"> | string | null
    skillsDynamicText?: StringNullableFilter<"JobOffer"> | string | null
    userId?: IntFilter<"JobOffer"> | number
    skills?: SkillListRelationFilter
    jobMatches?: JobMatchListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JobOfferOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    company?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    alerts?: SortOrderInput | SortOrder
    status?: SortOrder
    url?: SortOrder
    source?: SortOrder
    contractType?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    skillsText?: SortOrderInput | SortOrder
    skillsDynamicText?: SortOrderInput | SortOrder
    userId?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    jobMatches?: JobMatchOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type JobOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    title?: StringFilter<"JobOffer"> | string
    location?: StringFilter<"JobOffer"> | string
    company?: StringNullableFilter<"JobOffer"> | string | null
    score?: IntNullableFilter<"JobOffer"> | number | null
    alerts?: StringNullableFilter<"JobOffer"> | string | null
    status?: StringFilter<"JobOffer"> | string
    url?: StringFilter<"JobOffer"> | string
    source?: StringFilter<"JobOffer"> | string
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    salary?: StringNullableFilter<"JobOffer"> | string | null
    description?: StringNullableFilter<"JobOffer"> | string | null
    skillsText?: StringNullableFilter<"JobOffer"> | string | null
    skillsDynamicText?: StringNullableFilter<"JobOffer"> | string | null
    userId?: IntFilter<"JobOffer"> | number
    skills?: SkillListRelationFilter
    jobMatches?: JobMatchListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JobOfferOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    company?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    alerts?: SortOrderInput | SortOrder
    status?: SortOrder
    url?: SortOrder
    source?: SortOrder
    contractType?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    skillsText?: SortOrderInput | SortOrder
    skillsDynamicText?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: JobOfferCountOrderByAggregateInput
    _avg?: JobOfferAvgOrderByAggregateInput
    _max?: JobOfferMaxOrderByAggregateInput
    _min?: JobOfferMinOrderByAggregateInput
    _sum?: JobOfferSumOrderByAggregateInput
  }

  export type JobOfferScalarWhereWithAggregatesInput = {
    AND?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    OR?: JobOfferScalarWhereWithAggregatesInput[]
    NOT?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobOffer"> | number
    title?: StringWithAggregatesFilter<"JobOffer"> | string
    location?: StringWithAggregatesFilter<"JobOffer"> | string
    company?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    score?: IntNullableWithAggregatesFilter<"JobOffer"> | number | null
    alerts?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    status?: StringWithAggregatesFilter<"JobOffer"> | string
    url?: StringWithAggregatesFilter<"JobOffer"> | string
    source?: StringWithAggregatesFilter<"JobOffer"> | string
    contractType?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    salary?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    description?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    skillsText?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    skillsDynamicText?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    userId?: IntWithAggregatesFilter<"JobOffer"> | number
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    name?: StringFilter<"UserProfile"> | string
    title?: StringNullableFilter<"UserProfile"> | string | null
    userId?: IntFilter<"UserProfile"> | number
    certifications?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    jobMatches?: JobMatchListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    userId?: SortOrder
    certifications?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skills?: SkillOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    jobMatches?: JobMatchOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringFilter<"UserProfile"> | string
    title?: StringNullableFilter<"UserProfile"> | string | null
    userId?: IntFilter<"UserProfile"> | number
    certifications?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    jobMatches?: JobMatchListRelationFilter
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    userId?: SortOrder
    certifications?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    name?: StringWithAggregatesFilter<"UserProfile"> | string
    title?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    userId?: IntWithAggregatesFilter<"UserProfile"> | number
    certifications?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    category?: StringNullableFilter<"Skill"> | string | null
    jobOffers?: JobOfferListRelationFilter
    profiles?: UserProfileListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    jobOffers?: JobOfferOrderByRelationAggregateInput
    profiles?: UserProfileOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    category?: StringNullableFilter<"Skill"> | string | null
    jobOffers?: JobOfferListRelationFilter
    profiles?: UserProfileListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    category?: StringNullableWithAggregatesFilter<"Skill"> | string | null
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    current?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    skills?: StringNullableFilter<"Experience"> | string | null
    profileId?: IntFilter<"Experience"> | number
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    current?: SortOrder
    description?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    profileId?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    current?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    skills?: StringNullableFilter<"Experience"> | string | null
    profileId?: IntFilter<"Experience"> | number
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    current?: SortOrder
    description?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    profileId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    title?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    current?: BoolWithAggregatesFilter<"Experience"> | boolean
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    skills?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    profileId?: IntWithAggregatesFilter<"Experience"> | number
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    current?: BoolFilter<"Education"> | boolean
    description?: StringNullableFilter<"Education"> | string | null
    profileId?: IntFilter<"Education"> | number
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    degree?: SortOrder
    institution?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    current?: SortOrder
    description?: SortOrderInput | SortOrder
    profileId?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    degree?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    current?: BoolFilter<"Education"> | boolean
    description?: StringNullableFilter<"Education"> | string | null
    profileId?: IntFilter<"Education"> | number
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    degree?: SortOrder
    institution?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    current?: SortOrder
    description?: SortOrderInput | SortOrder
    profileId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    degree?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    startDate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    current?: BoolWithAggregatesFilter<"Education"> | boolean
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
    profileId?: IntWithAggregatesFilter<"Education"> | number
  }

  export type JobMatchWhereInput = {
    AND?: JobMatchWhereInput | JobMatchWhereInput[]
    OR?: JobMatchWhereInput[]
    NOT?: JobMatchWhereInput | JobMatchWhereInput[]
    id?: IntFilter<"JobMatch"> | number
    jobOfferId?: IntFilter<"JobMatch"> | number
    userProfileId?: IntFilter<"JobMatch"> | number
    matchPercentage?: IntFilter<"JobMatch"> | number
    matchingSkills?: StringFilter<"JobMatch"> | string
    missingSkills?: StringFilter<"JobMatch"> | string
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type JobMatchOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
    matchingSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type JobMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobOfferId_userProfileId?: JobMatchJobOfferIdUserProfileIdCompoundUniqueInput
    AND?: JobMatchWhereInput | JobMatchWhereInput[]
    OR?: JobMatchWhereInput[]
    NOT?: JobMatchWhereInput | JobMatchWhereInput[]
    jobOfferId?: IntFilter<"JobMatch"> | number
    userProfileId?: IntFilter<"JobMatch"> | number
    matchPercentage?: IntFilter<"JobMatch"> | number
    matchingSkills?: StringFilter<"JobMatch"> | string
    missingSkills?: StringFilter<"JobMatch"> | string
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "jobOfferId_userProfileId">

  export type JobMatchOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
    matchingSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    _count?: JobMatchCountOrderByAggregateInput
    _avg?: JobMatchAvgOrderByAggregateInput
    _max?: JobMatchMaxOrderByAggregateInput
    _min?: JobMatchMinOrderByAggregateInput
    _sum?: JobMatchSumOrderByAggregateInput
  }

  export type JobMatchScalarWhereWithAggregatesInput = {
    AND?: JobMatchScalarWhereWithAggregatesInput | JobMatchScalarWhereWithAggregatesInput[]
    OR?: JobMatchScalarWhereWithAggregatesInput[]
    NOT?: JobMatchScalarWhereWithAggregatesInput | JobMatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobMatch"> | number
    jobOfferId?: IntWithAggregatesFilter<"JobMatch"> | number
    userProfileId?: IntWithAggregatesFilter<"JobMatch"> | number
    matchPercentage?: IntWithAggregatesFilter<"JobMatch"> | number
    matchingSkills?: StringWithAggregatesFilter<"JobMatch"> | string
    missingSkills?: StringWithAggregatesFilter<"JobMatch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobMatch"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    offers?: JobOfferCreateNestedManyWithoutUserInput
    profiles?: UserProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    offers?: JobOfferUncheckedCreateNestedManyWithoutUserInput
    profiles?: UserProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: JobOfferUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: JobOfferUncheckedUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type JobOfferCreateInput = {
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    skills?: SkillCreateNestedManyWithoutJobOffersInput
    jobMatches?: JobMatchCreateNestedManyWithoutJobOfferInput
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type JobOfferUncheckedCreateInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    userId: number
    skills?: SkillUncheckedCreateNestedManyWithoutJobOffersInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutJobOffersNestedInput
    jobMatches?: JobMatchUpdateManyWithoutJobOfferNestedInput
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type JobOfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    skills?: SkillUncheckedUpdateManyWithoutJobOffersNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferCreateManyInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    userId: number
  }

  export type JobOfferUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobOfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    skills?: SkillCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    skills?: SkillUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    name: string
    category?: string | null
    jobOffers?: JobOfferCreateNestedManyWithoutSkillsInput
    profiles?: UserProfileCreateNestedManyWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    category?: string | null
    jobOffers?: JobOfferUncheckedCreateNestedManyWithoutSkillsInput
    profiles?: UserProfileUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    jobOffers?: JobOfferUpdateManyWithoutSkillsNestedInput
    profiles?: UserProfileUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    jobOffers?: JobOfferUncheckedUpdateManyWithoutSkillsNestedInput
    profiles?: UserProfileUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    category?: string | null
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceCreateInput = {
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
    profile: UserProfileCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
    profileId: number
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateManyInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
    profileId: number
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationCreateInput = {
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    profile: UserProfileCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    profileId: number
  }

  export type EducationUpdateInput = {
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationCreateManyInput = {
    id?: number
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    profileId: number
  }

  export type EducationUpdateManyMutationInput = {
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type JobMatchCreateInput = {
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutJobMatchesInput
    userProfile: UserProfileCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateInput = {
    id?: number
    jobOfferId: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type JobMatchUpdateInput = {
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutJobMatchesNestedInput
    userProfile?: UserProfileUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOfferId?: IntFieldUpdateOperationsInput | number
    userProfileId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchCreateManyInput = {
    id?: number
    jobOfferId: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type JobMatchUpdateManyMutationInput = {
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOfferId?: IntFieldUpdateOperationsInput | number
    userProfileId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type JobOfferListRelationFilter = {
    every?: JobOfferWhereInput
    some?: JobOfferWhereInput
    none?: JobOfferWhereInput
  }

  export type UserProfileListRelationFilter = {
    every?: UserProfileWhereInput
    some?: UserProfileWhereInput
    none?: UserProfileWhereInput
  }

  export type JobOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type JobMatchListRelationFilter = {
    every?: JobMatchWhereInput
    some?: JobMatchWhereInput
    none?: JobMatchWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOfferCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    company?: SortOrder
    score?: SortOrder
    alerts?: SortOrder
    status?: SortOrder
    url?: SortOrder
    source?: SortOrder
    contractType?: SortOrder
    salary?: SortOrder
    description?: SortOrder
    skillsText?: SortOrder
    skillsDynamicText?: SortOrder
    userId?: SortOrder
  }

  export type JobOfferAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    userId?: SortOrder
  }

  export type JobOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    company?: SortOrder
    score?: SortOrder
    alerts?: SortOrder
    status?: SortOrder
    url?: SortOrder
    source?: SortOrder
    contractType?: SortOrder
    salary?: SortOrder
    description?: SortOrder
    skillsText?: SortOrder
    skillsDynamicText?: SortOrder
    userId?: SortOrder
  }

  export type JobOfferMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    company?: SortOrder
    score?: SortOrder
    alerts?: SortOrder
    status?: SortOrder
    url?: SortOrder
    source?: SortOrder
    contractType?: SortOrder
    salary?: SortOrder
    description?: SortOrder
    skillsText?: SortOrder
    skillsDynamicText?: SortOrder
    userId?: SortOrder
  }

  export type JobOfferSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    userId?: SortOrder
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

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    profileId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    profileId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    profileId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    institution?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    profileId?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    institution?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    profileId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    institution?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    current?: SortOrder
    description?: SortOrder
    profileId?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type JobOfferScalarRelationFilter = {
    is?: JobOfferWhereInput
    isNot?: JobOfferWhereInput
  }

  export type JobMatchJobOfferIdUserProfileIdCompoundUniqueInput = {
    jobOfferId: number
    userProfileId: number
  }

  export type JobMatchCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
    matchingSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchAvgOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
  }

  export type JobMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
    matchingSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
    matchingSkills?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchSumOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    userProfileId?: SortOrder
    matchPercentage?: SortOrder
  }

  export type JobOfferCreateNestedManyWithoutUserInput = {
    create?: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput> | JobOfferCreateWithoutUserInput[] | JobOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutUserInput | JobOfferCreateOrConnectWithoutUserInput[]
    createMany?: JobOfferCreateManyUserInputEnvelope
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type UserProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type JobOfferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput> | JobOfferCreateWithoutUserInput[] | JobOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutUserInput | JobOfferCreateOrConnectWithoutUserInput[]
    createMany?: JobOfferCreateManyUserInputEnvelope
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type JobOfferUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput> | JobOfferCreateWithoutUserInput[] | JobOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutUserInput | JobOfferCreateOrConnectWithoutUserInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutUserInput | JobOfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobOfferCreateManyUserInputEnvelope
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutUserInput | JobOfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutUserInput | JobOfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type UserProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobOfferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput> | JobOfferCreateWithoutUserInput[] | JobOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutUserInput | JobOfferCreateOrConnectWithoutUserInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutUserInput | JobOfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobOfferCreateManyUserInputEnvelope
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutUserInput | JobOfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutUserInput | JobOfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type SkillCreateNestedManyWithoutJobOffersInput = {
    create?: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput> | SkillCreateWithoutJobOffersInput[] | SkillUncheckedCreateWithoutJobOffersInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutJobOffersInput | SkillCreateOrConnectWithoutJobOffersInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type JobMatchCreateNestedManyWithoutJobOfferInput = {
    create?: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput> | JobMatchCreateWithoutJobOfferInput[] | JobMatchUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOfferInput | JobMatchCreateOrConnectWithoutJobOfferInput[]
    createMany?: JobMatchCreateManyJobOfferInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type SkillUncheckedCreateNestedManyWithoutJobOffersInput = {
    create?: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput> | SkillCreateWithoutJobOffersInput[] | SkillUncheckedCreateWithoutJobOffersInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutJobOffersInput | SkillCreateOrConnectWithoutJobOffersInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type JobMatchUncheckedCreateNestedManyWithoutJobOfferInput = {
    create?: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput> | JobMatchCreateWithoutJobOfferInput[] | JobMatchUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOfferInput | JobMatchCreateOrConnectWithoutJobOfferInput[]
    createMany?: JobMatchCreateManyJobOfferInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
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

  export type SkillUpdateManyWithoutJobOffersNestedInput = {
    create?: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput> | SkillCreateWithoutJobOffersInput[] | SkillUncheckedCreateWithoutJobOffersInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutJobOffersInput | SkillCreateOrConnectWithoutJobOffersInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutJobOffersInput | SkillUpsertWithWhereUniqueWithoutJobOffersInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutJobOffersInput | SkillUpdateWithWhereUniqueWithoutJobOffersInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutJobOffersInput | SkillUpdateManyWithWhereWithoutJobOffersInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type JobMatchUpdateManyWithoutJobOfferNestedInput = {
    create?: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput> | JobMatchCreateWithoutJobOfferInput[] | JobMatchUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOfferInput | JobMatchCreateOrConnectWithoutJobOfferInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutJobOfferInput | JobMatchUpsertWithWhereUniqueWithoutJobOfferInput[]
    createMany?: JobMatchCreateManyJobOfferInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutJobOfferInput | JobMatchUpdateWithWhereUniqueWithoutJobOfferInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutJobOfferInput | JobMatchUpdateManyWithWhereWithoutJobOfferInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type SkillUncheckedUpdateManyWithoutJobOffersNestedInput = {
    create?: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput> | SkillCreateWithoutJobOffersInput[] | SkillUncheckedCreateWithoutJobOffersInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutJobOffersInput | SkillCreateOrConnectWithoutJobOffersInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutJobOffersInput | SkillUpsertWithWhereUniqueWithoutJobOffersInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutJobOffersInput | SkillUpdateWithWhereUniqueWithoutJobOffersInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutJobOffersInput | SkillUpdateManyWithWhereWithoutJobOffersInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type JobMatchUncheckedUpdateManyWithoutJobOfferNestedInput = {
    create?: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput> | JobMatchCreateWithoutJobOfferInput[] | JobMatchUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOfferInput | JobMatchCreateOrConnectWithoutJobOfferInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutJobOfferInput | JobMatchUpsertWithWhereUniqueWithoutJobOfferInput[]
    createMany?: JobMatchCreateManyJobOfferInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutJobOfferInput | JobMatchUpdateWithWhereUniqueWithoutJobOfferInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutJobOfferInput | JobMatchUpdateManyWithWhereWithoutJobOfferInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedManyWithoutProfilesInput = {
    create?: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput> | SkillCreateWithoutProfilesInput[] | SkillUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput | SkillCreateOrConnectWithoutProfilesInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutProfileInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutProfileInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type JobMatchCreateNestedManyWithoutUserProfileInput = {
    create?: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput> | JobMatchCreateWithoutUserProfileInput[] | JobMatchUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserProfileInput | JobMatchCreateOrConnectWithoutUserProfileInput[]
    createMany?: JobMatchCreateManyUserProfileInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput> | SkillCreateWithoutProfilesInput[] | SkillUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput | SkillCreateOrConnectWithoutProfilesInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type JobMatchUncheckedCreateNestedManyWithoutUserProfileInput = {
    create?: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput> | JobMatchCreateWithoutUserProfileInput[] | JobMatchUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserProfileInput | JobMatchCreateOrConnectWithoutUserProfileInput[]
    createMany?: JobMatchCreateManyUserProfileInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type SkillUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput> | SkillCreateWithoutProfilesInput[] | SkillUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput | SkillCreateOrConnectWithoutProfilesInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfilesInput | SkillUpsertWithWhereUniqueWithoutProfilesInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfilesInput | SkillUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfilesInput | SkillUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutProfileInput | ExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutProfileInput | ExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutProfileInput | ExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfileInput | EducationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfileInput | EducationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfileInput | EducationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type JobMatchUpdateManyWithoutUserProfileNestedInput = {
    create?: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput> | JobMatchCreateWithoutUserProfileInput[] | JobMatchUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserProfileInput | JobMatchCreateOrConnectWithoutUserProfileInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutUserProfileInput | JobMatchUpsertWithWhereUniqueWithoutUserProfileInput[]
    createMany?: JobMatchCreateManyUserProfileInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutUserProfileInput | JobMatchUpdateWithWhereUniqueWithoutUserProfileInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutUserProfileInput | JobMatchUpdateManyWithWhereWithoutUserProfileInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput> | SkillCreateWithoutProfilesInput[] | SkillUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfilesInput | SkillCreateOrConnectWithoutProfilesInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfilesInput | SkillUpsertWithWhereUniqueWithoutProfilesInput[]
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfilesInput | SkillUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfilesInput | SkillUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutProfileInput | ExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutProfileInput | ExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutProfileInput | ExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfileInput | EducationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfileInput | EducationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfileInput | EducationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput = {
    create?: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput> | JobMatchCreateWithoutUserProfileInput[] | JobMatchUncheckedCreateWithoutUserProfileInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserProfileInput | JobMatchCreateOrConnectWithoutUserProfileInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutUserProfileInput | JobMatchUpsertWithWhereUniqueWithoutUserProfileInput[]
    createMany?: JobMatchCreateManyUserProfileInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutUserProfileInput | JobMatchUpdateWithWhereUniqueWithoutUserProfileInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutUserProfileInput | JobMatchUpdateManyWithWhereWithoutUserProfileInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type JobOfferCreateNestedManyWithoutSkillsInput = {
    create?: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput> | JobOfferCreateWithoutSkillsInput[] | JobOfferUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput | JobOfferCreateOrConnectWithoutSkillsInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type UserProfileCreateNestedManyWithoutSkillsInput = {
    create?: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput> | UserProfileCreateWithoutSkillsInput[] | UserProfileUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSkillsInput | UserProfileCreateOrConnectWithoutSkillsInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type JobOfferUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput> | JobOfferCreateWithoutSkillsInput[] | JobOfferUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput | JobOfferCreateOrConnectWithoutSkillsInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput> | UserProfileCreateWithoutSkillsInput[] | UserProfileUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSkillsInput | UserProfileCreateOrConnectWithoutSkillsInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type JobOfferUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput> | JobOfferCreateWithoutSkillsInput[] | JobOfferUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput | JobOfferCreateOrConnectWithoutSkillsInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutSkillsInput | JobOfferUpsertWithWhereUniqueWithoutSkillsInput[]
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutSkillsInput | JobOfferUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutSkillsInput | JobOfferUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type UserProfileUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput> | UserProfileCreateWithoutSkillsInput[] | UserProfileUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSkillsInput | UserProfileCreateOrConnectWithoutSkillsInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutSkillsInput | UserProfileUpsertWithWhereUniqueWithoutSkillsInput[]
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutSkillsInput | UserProfileUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutSkillsInput | UserProfileUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type JobOfferUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput> | JobOfferCreateWithoutSkillsInput[] | JobOfferUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutSkillsInput | JobOfferCreateOrConnectWithoutSkillsInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutSkillsInput | JobOfferUpsertWithWhereUniqueWithoutSkillsInput[]
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutSkillsInput | JobOfferUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutSkillsInput | JobOfferUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput> | UserProfileCreateWithoutSkillsInput[] | UserProfileUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSkillsInput | UserProfileCreateOrConnectWithoutSkillsInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutSkillsInput | UserProfileUpsertWithWhereUniqueWithoutSkillsInput[]
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutSkillsInput | UserProfileUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutSkillsInput | UserProfileUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type UserProfileCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<UserProfileCreateWithoutExperiencesInput, UserProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutExperiencesInput
    connect?: UserProfileWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserProfileUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<UserProfileCreateWithoutExperiencesInput, UserProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutExperiencesInput
    upsert?: UserProfileUpsertWithoutExperiencesInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutExperiencesInput, UserProfileUpdateWithoutExperiencesInput>, UserProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserProfileCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutEducationInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutEducationInput
    upsert?: UserProfileUpsertWithoutEducationInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutEducationInput, UserProfileUpdateWithoutEducationInput>, UserProfileUncheckedUpdateWithoutEducationInput>
  }

  export type JobOfferCreateNestedOneWithoutJobMatchesInput = {
    create?: XOR<JobOfferCreateWithoutJobMatchesInput, JobOfferUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutJobMatchesInput
    connect?: JobOfferWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutJobMatchesInput = {
    create?: XOR<UserProfileCreateWithoutJobMatchesInput, UserProfileUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutJobMatchesInput
    connect?: UserProfileWhereUniqueInput
  }

  export type JobOfferUpdateOneRequiredWithoutJobMatchesNestedInput = {
    create?: XOR<JobOfferCreateWithoutJobMatchesInput, JobOfferUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutJobMatchesInput
    upsert?: JobOfferUpsertWithoutJobMatchesInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutJobMatchesInput, JobOfferUpdateWithoutJobMatchesInput>, JobOfferUncheckedUpdateWithoutJobMatchesInput>
  }

  export type UserProfileUpdateOneRequiredWithoutJobMatchesNestedInput = {
    create?: XOR<UserProfileCreateWithoutJobMatchesInput, UserProfileUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutJobMatchesInput
    upsert?: UserProfileUpsertWithoutJobMatchesInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutJobMatchesInput, UserProfileUpdateWithoutJobMatchesInput>, UserProfileUncheckedUpdateWithoutJobMatchesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JobOfferCreateWithoutUserInput = {
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    skills?: SkillCreateNestedManyWithoutJobOffersInput
    jobMatches?: JobMatchCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutJobOffersInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutUserInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput>
  }

  export type JobOfferCreateManyUserInputEnvelope = {
    data: JobOfferCreateManyUserInput | JobOfferCreateManyUserInput[]
  }

  export type UserProfileCreateWithoutUserInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateManyUserInputEnvelope = {
    data: UserProfileCreateManyUserInput | UserProfileCreateManyUserInput[]
  }

  export type JobOfferUpsertWithWhereUniqueWithoutUserInput = {
    where: JobOfferWhereUniqueInput
    update: XOR<JobOfferUpdateWithoutUserInput, JobOfferUncheckedUpdateWithoutUserInput>
    create: XOR<JobOfferCreateWithoutUserInput, JobOfferUncheckedCreateWithoutUserInput>
  }

  export type JobOfferUpdateWithWhereUniqueWithoutUserInput = {
    where: JobOfferWhereUniqueInput
    data: XOR<JobOfferUpdateWithoutUserInput, JobOfferUncheckedUpdateWithoutUserInput>
  }

  export type JobOfferUpdateManyWithWhereWithoutUserInput = {
    where: JobOfferScalarWhereInput
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyWithoutUserInput>
  }

  export type JobOfferScalarWhereInput = {
    AND?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
    OR?: JobOfferScalarWhereInput[]
    NOT?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
    id?: IntFilter<"JobOffer"> | number
    title?: StringFilter<"JobOffer"> | string
    location?: StringFilter<"JobOffer"> | string
    company?: StringNullableFilter<"JobOffer"> | string | null
    score?: IntNullableFilter<"JobOffer"> | number | null
    alerts?: StringNullableFilter<"JobOffer"> | string | null
    status?: StringFilter<"JobOffer"> | string
    url?: StringFilter<"JobOffer"> | string
    source?: StringFilter<"JobOffer"> | string
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    salary?: StringNullableFilter<"JobOffer"> | string | null
    description?: StringNullableFilter<"JobOffer"> | string | null
    skillsText?: StringNullableFilter<"JobOffer"> | string | null
    skillsDynamicText?: StringNullableFilter<"JobOffer"> | string | null
    userId?: IntFilter<"JobOffer"> | number
  }

  export type UserProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutUserInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProfileScalarWhereInput = {
    AND?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    OR?: UserProfileScalarWhereInput[]
    NOT?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    name?: StringFilter<"UserProfile"> | string
    title?: StringNullableFilter<"UserProfile"> | string | null
    userId?: IntFilter<"UserProfile"> | number
    certifications?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type SkillCreateWithoutJobOffersInput = {
    name: string
    category?: string | null
    profiles?: UserProfileCreateNestedManyWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutJobOffersInput = {
    id?: number
    name: string
    category?: string | null
    profiles?: UserProfileUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillCreateOrConnectWithoutJobOffersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput>
  }

  export type JobMatchCreateWithoutJobOfferInput = {
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
    userProfile: UserProfileCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateWithoutJobOfferInput = {
    id?: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type JobMatchCreateOrConnectWithoutJobOfferInput = {
    where: JobMatchWhereUniqueInput
    create: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput>
  }

  export type JobMatchCreateManyJobOfferInputEnvelope = {
    data: JobMatchCreateManyJobOfferInput | JobMatchCreateManyJobOfferInput[]
  }

  export type UserCreateWithoutOffersInput = {
    email: string
    password: string
    name: string
    profiles?: UserProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: number
    email: string
    password: string
    name: string
    profiles?: UserProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type SkillUpsertWithWhereUniqueWithoutJobOffersInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutJobOffersInput, SkillUncheckedUpdateWithoutJobOffersInput>
    create: XOR<SkillCreateWithoutJobOffersInput, SkillUncheckedCreateWithoutJobOffersInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutJobOffersInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutJobOffersInput, SkillUncheckedUpdateWithoutJobOffersInput>
  }

  export type SkillUpdateManyWithWhereWithoutJobOffersInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutJobOffersInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    category?: StringNullableFilter<"Skill"> | string | null
  }

  export type JobMatchUpsertWithWhereUniqueWithoutJobOfferInput = {
    where: JobMatchWhereUniqueInput
    update: XOR<JobMatchUpdateWithoutJobOfferInput, JobMatchUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobMatchCreateWithoutJobOfferInput, JobMatchUncheckedCreateWithoutJobOfferInput>
  }

  export type JobMatchUpdateWithWhereUniqueWithoutJobOfferInput = {
    where: JobMatchWhereUniqueInput
    data: XOR<JobMatchUpdateWithoutJobOfferInput, JobMatchUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobMatchUpdateManyWithWhereWithoutJobOfferInput = {
    where: JobMatchScalarWhereInput
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyWithoutJobOfferInput>
  }

  export type JobMatchScalarWhereInput = {
    AND?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
    OR?: JobMatchScalarWhereInput[]
    NOT?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
    id?: IntFilter<"JobMatch"> | number
    jobOfferId?: IntFilter<"JobMatch"> | number
    userProfileId?: IntFilter<"JobMatch"> | number
    matchPercentage?: IntFilter<"JobMatch"> | number
    matchingSkills?: StringFilter<"JobMatch"> | string
    missingSkills?: StringFilter<"JobMatch"> | string
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profiles?: UserProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profiles?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfilesInput = {
    email: string
    password: string
    name: string
    offers?: JobOfferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: number
    email: string
    password: string
    name: string
    offers?: JobOfferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type SkillCreateWithoutProfilesInput = {
    name: string
    category?: string | null
    jobOffers?: JobOfferCreateNestedManyWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutProfilesInput = {
    id?: number
    name: string
    category?: string | null
    jobOffers?: JobOfferUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type SkillCreateOrConnectWithoutProfilesInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput>
  }

  export type ExperienceCreateWithoutProfileInput = {
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
  }

  export type ExperienceUncheckedCreateWithoutProfileInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
  }

  export type ExperienceCreateOrConnectWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput>
  }

  export type ExperienceCreateManyProfileInputEnvelope = {
    data: ExperienceCreateManyProfileInput | ExperienceCreateManyProfileInput[]
  }

  export type EducationCreateWithoutProfileInput = {
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
  }

  export type EducationUncheckedCreateWithoutProfileInput = {
    id?: number
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
  }

  export type EducationCreateOrConnectWithoutProfileInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput>
  }

  export type EducationCreateManyProfileInputEnvelope = {
    data: EducationCreateManyProfileInput | EducationCreateManyProfileInput[]
  }

  export type JobMatchCreateWithoutUserProfileInput = {
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateWithoutUserProfileInput = {
    id?: number
    jobOfferId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type JobMatchCreateOrConnectWithoutUserProfileInput = {
    where: JobMatchWhereUniqueInput
    create: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput>
  }

  export type JobMatchCreateManyUserProfileInputEnvelope = {
    data: JobMatchCreateManyUserProfileInput | JobMatchCreateManyUserProfileInput[]
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: JobOfferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    offers?: JobOfferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithWhereUniqueWithoutProfilesInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutProfilesInput, SkillUncheckedUpdateWithoutProfilesInput>
    create: XOR<SkillCreateWithoutProfilesInput, SkillUncheckedCreateWithoutProfilesInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutProfilesInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutProfilesInput, SkillUncheckedUpdateWithoutProfilesInput>
  }

  export type SkillUpdateManyWithWhereWithoutProfilesInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutProfilesInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutProfileInput, ExperienceUncheckedUpdateWithoutProfileInput>
    create: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutProfileInput, ExperienceUncheckedUpdateWithoutProfileInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutProfileInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutProfileInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    current?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    skills?: StringNullableFilter<"Experience"> | string | null
    profileId?: IntFilter<"Experience"> | number
  }

  export type EducationUpsertWithWhereUniqueWithoutProfileInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutProfileInput, EducationUncheckedUpdateWithoutProfileInput>
    create: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutProfileInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutProfileInput, EducationUncheckedUpdateWithoutProfileInput>
  }

  export type EducationUpdateManyWithWhereWithoutProfileInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutProfileInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    current?: BoolFilter<"Education"> | boolean
    description?: StringNullableFilter<"Education"> | string | null
    profileId?: IntFilter<"Education"> | number
  }

  export type JobMatchUpsertWithWhereUniqueWithoutUserProfileInput = {
    where: JobMatchWhereUniqueInput
    update: XOR<JobMatchUpdateWithoutUserProfileInput, JobMatchUncheckedUpdateWithoutUserProfileInput>
    create: XOR<JobMatchCreateWithoutUserProfileInput, JobMatchUncheckedCreateWithoutUserProfileInput>
  }

  export type JobMatchUpdateWithWhereUniqueWithoutUserProfileInput = {
    where: JobMatchWhereUniqueInput
    data: XOR<JobMatchUpdateWithoutUserProfileInput, JobMatchUncheckedUpdateWithoutUserProfileInput>
  }

  export type JobMatchUpdateManyWithWhereWithoutUserProfileInput = {
    where: JobMatchScalarWhereInput
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyWithoutUserProfileInput>
  }

  export type JobOfferCreateWithoutSkillsInput = {
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    jobMatches?: JobMatchCreateNestedManyWithoutJobOfferInput
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type JobOfferUncheckedCreateWithoutSkillsInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    userId: number
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutSkillsInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput>
  }

  export type UserProfileCreateWithoutSkillsInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    experiences?: ExperienceCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutSkillsInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutSkillsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput>
  }

  export type JobOfferUpsertWithWhereUniqueWithoutSkillsInput = {
    where: JobOfferWhereUniqueInput
    update: XOR<JobOfferUpdateWithoutSkillsInput, JobOfferUncheckedUpdateWithoutSkillsInput>
    create: XOR<JobOfferCreateWithoutSkillsInput, JobOfferUncheckedCreateWithoutSkillsInput>
  }

  export type JobOfferUpdateWithWhereUniqueWithoutSkillsInput = {
    where: JobOfferWhereUniqueInput
    data: XOR<JobOfferUpdateWithoutSkillsInput, JobOfferUncheckedUpdateWithoutSkillsInput>
  }

  export type JobOfferUpdateManyWithWhereWithoutSkillsInput = {
    where: JobOfferScalarWhereInput
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyWithoutSkillsInput>
  }

  export type UserProfileUpsertWithWhereUniqueWithoutSkillsInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutSkillsInput, UserProfileUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserProfileCreateWithoutSkillsInput, UserProfileUncheckedCreateWithoutSkillsInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutSkillsInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutSkillsInput, UserProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutSkillsInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutSkillsInput>
  }

  export type UserProfileCreateWithoutExperiencesInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    skills?: SkillCreateNestedManyWithoutProfilesInput
    education?: EducationCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutExperiencesInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfilesInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutExperiencesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutExperiencesInput, UserProfileUncheckedCreateWithoutExperiencesInput>
  }

  export type UserProfileUpsertWithoutExperiencesInput = {
    update: XOR<UserProfileUpdateWithoutExperiencesInput, UserProfileUncheckedUpdateWithoutExperiencesInput>
    create: XOR<UserProfileCreateWithoutExperiencesInput, UserProfileUncheckedCreateWithoutExperiencesInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutExperiencesInput, UserProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserProfileUpdateWithoutExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    skills?: SkillUpdateManyWithoutProfilesNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfilesNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileCreateWithoutEducationInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    skills?: SkillCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutEducationInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutEducationInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
  }

  export type UserProfileUpsertWithoutEducationInput = {
    update: XOR<UserProfileUpdateWithoutEducationInput, UserProfileUncheckedUpdateWithoutEducationInput>
    create: XOR<UserProfileCreateWithoutEducationInput, UserProfileUncheckedCreateWithoutEducationInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutEducationInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutEducationInput, UserProfileUncheckedUpdateWithoutEducationInput>
  }

  export type UserProfileUpdateWithoutEducationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    skills?: SkillUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type JobOfferCreateWithoutJobMatchesInput = {
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    skills?: SkillCreateNestedManyWithoutJobOffersInput
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type JobOfferUncheckedCreateWithoutJobMatchesInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
    userId: number
    skills?: SkillUncheckedCreateNestedManyWithoutJobOffersInput
  }

  export type JobOfferCreateOrConnectWithoutJobMatchesInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutJobMatchesInput, JobOfferUncheckedCreateWithoutJobMatchesInput>
  }

  export type UserProfileCreateWithoutJobMatchesInput = {
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfilesInput
    skills?: SkillCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutJobMatchesInput = {
    id?: number
    name: string
    title?: string | null
    userId: number
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfilesInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutJobMatchesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutJobMatchesInput, UserProfileUncheckedCreateWithoutJobMatchesInput>
  }

  export type JobOfferUpsertWithoutJobMatchesInput = {
    update: XOR<JobOfferUpdateWithoutJobMatchesInput, JobOfferUncheckedUpdateWithoutJobMatchesInput>
    create: XOR<JobOfferCreateWithoutJobMatchesInput, JobOfferUncheckedCreateWithoutJobMatchesInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutJobMatchesInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutJobMatchesInput, JobOfferUncheckedUpdateWithoutJobMatchesInput>
  }

  export type JobOfferUpdateWithoutJobMatchesInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutJobOffersNestedInput
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutJobMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    skills?: SkillUncheckedUpdateManyWithoutJobOffersNestedInput
  }

  export type UserProfileUpsertWithoutJobMatchesInput = {
    update: XOR<UserProfileUpdateWithoutJobMatchesInput, UserProfileUncheckedUpdateWithoutJobMatchesInput>
    create: XOR<UserProfileCreateWithoutJobMatchesInput, UserProfileUncheckedCreateWithoutJobMatchesInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutJobMatchesInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutJobMatchesInput, UserProfileUncheckedUpdateWithoutJobMatchesInput>
  }

  export type UserProfileUpdateWithoutJobMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    skills?: SkillUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutJobMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type JobOfferCreateManyUserInput = {
    id?: number
    title: string
    location: string
    company?: string | null
    score?: number | null
    alerts?: string | null
    status: string
    url: string
    source: string
    contractType?: string | null
    salary?: string | null
    description?: string | null
    skillsText?: string | null
    skillsDynamicText?: string | null
  }

  export type UserProfileCreateManyUserInput = {
    id?: number
    name: string
    title?: string | null
    certifications?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOfferUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutJobOffersNestedInput
    jobMatches?: JobMatchUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutJobOffersNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfilesNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchCreateManyJobOfferInput = {
    id?: number
    userProfileId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type SkillUpdateWithoutJobOffersInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    profiles?: UserProfileUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutJobOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    profiles?: UserProfileUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutJobOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobMatchUpdateWithoutJobOfferInput = {
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateWithoutJobOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    userProfileId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyWithoutJobOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    userProfileId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateManyProfileInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
    skills?: string | null
  }

  export type EducationCreateManyProfileInput = {
    id?: number
    degree: string
    institution: string
    startDate: Date | string
    endDate?: Date | string | null
    current?: boolean
    description?: string | null
  }

  export type JobMatchCreateManyUserProfileInput = {
    id?: number
    jobOfferId: number
    matchPercentage: number
    matchingSkills: string
    missingSkills: string
    createdAt?: Date | string
  }

  export type SkillUpdateWithoutProfilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    jobOffers?: JobOfferUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    jobOffers?: JobOfferUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUpdateWithoutProfileInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUpdateWithoutProfileInput = {
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobMatchUpdateWithoutUserProfileInput = {
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateWithoutUserProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOfferId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyWithoutUserProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOfferId?: IntFieldUpdateOperationsInput | number
    matchPercentage?: IntFieldUpdateOperationsInput | number
    matchingSkills?: StringFieldUpdateOperationsInput | string
    missingSkills?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferUpdateWithoutSkillsInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    jobMatches?: JobMatchUpdateManyWithoutJobOfferNestedInput
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    jobMatches?: JobMatchUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateManyWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    alerts?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    skillsText?: NullableStringFieldUpdateOperationsInput | string | null
    skillsDynamicText?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfilesNestedInput
    experiences?: ExperienceUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateManyWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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