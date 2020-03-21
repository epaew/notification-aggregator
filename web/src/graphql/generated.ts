import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  UUID: string,
  Timestamp: Date,
};

export type Channel = {
   __typename?: 'Channel',
  id: Scalars['UUID'],
  name: Scalars['String'],
  notifications: Array<Notification>,
  public: Scalars['Boolean'],
  secret: Scalars['String'],
  createdAt: Scalars['Timestamp'],
  createdBy: User,
  updatedAt: Scalars['Timestamp'],
};

export type ChannelNotificationsArgs = {
  startAfter?: Maybe<Scalars['Timestamp']>,
  limit?: Maybe<Scalars['Int']>
};

export type CreateChannelInput = {
  name: Scalars['String'],
  public: Scalars['Boolean'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createChannel: Channel,
  subscribeChannel: Channel,
};

export type MutationCreateChannelArgs = {
  input: CreateChannelInput
};

export type MutationSubscribeChannelArgs = {
  channelId: Scalars['UUID']
};

export type Notification = {
   __typename?: 'Notification',
  id: Scalars['ID'],
  body: Scalars['String'],
  createdAt: Scalars['Timestamp'],
};

export type Query = {
   __typename?: 'Query',
  channels: Array<Channel>,
  currentUser?: Maybe<User>,
  notifications: Array<Notification>,
  subscribedChannels: Array<Channel>,
  user?: Maybe<User>,
  users: Array<User>,
};

export type QueryChannelsArgs = {
  name?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type QueryNotificationsArgs = {
  startAfter?: Maybe<Scalars['Timestamp']>,
  limit?: Maybe<Scalars['Int']>
};

export type QuerySubscribedChannelsArgs = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type QueryUserArgs = {
  id: Scalars['String']
};

export type QueryUsersArgs = {
  name?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  displayName: Scalars['String'],
  photoURL?: Maybe<Scalars['String']>,
  createdChannels: Array<Channel>,
  subscribedChannels: Array<Channel>,
  createdAt: Scalars['Timestamp'],
  updatedAt: Scalars['Timestamp'],
};

export type UserCreatedChannelsArgs = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type UserSubscribedChannelsArgs = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Channel: ResolverTypeWrapper<Channel>,
  UUID: ResolverTypeWrapper<Scalars['UUID']>,
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>,
  Notification: ResolverTypeWrapper<Notification>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  User: ResolverTypeWrapper<User>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateChannelInput: CreateChannelInput,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  Channel: Channel,
  UUID: Scalars['UUID'],
  Timestamp: Scalars['Timestamp'],
  Notification: Notification,
  ID: Scalars['ID'],
  Boolean: Scalars['Boolean'],
  User: User,
  Mutation: {},
  CreateChannelInput: CreateChannelInput,
}>;

export type ChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  notifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, ChannelNotificationsArgs>,
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, RequireFields<MutationCreateChannelArgs, 'input'>>,
  subscribeChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, RequireFields<MutationSubscribeChannelArgs, 'channelId'>>,
}>;

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, QueryChannelsArgs>,
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  notifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, QueryNotificationsArgs>,
  subscribedChannels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, QuerySubscribedChannelsArgs>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>,
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryUsersArgs>,
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdChannels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, UserCreatedChannelsArgs>,
  subscribedChannels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, UserSubscribedChannelsArgs>,
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID'
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Channel?: ChannelResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Notification?: NotificationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Timestamp?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UUID?: GraphQLScalarType,
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
