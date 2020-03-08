import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null;
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

export type CreateChannelMutationVariables = {
  name: Scalars['String'],
  public: Scalars['Boolean']
};

export type CreateChannelMutation = (
  { __typename?: 'Mutation' }
  & { createChannel: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id'>
  ) }
);

export type GetChannelsQueryVariables = {};

export type GetChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: Array<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'name' | 'secret' | 'createdAt'>
  )> }
);

export type GetCurrentUserQueryVariables = {};

export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'displayName' | 'photoURL'>
  )> }
);

export type GetNotificationsQueryVariables = {};

export type GetNotificationsQuery = (
  { __typename?: 'Query' }
  & { notifications: Array<(
    { __typename?: 'Notification' }
    & Pick<Notification, 'id' | 'body' | 'createdAt'>
  )> }
);

export type GetUserQueryVariables = {
  id: Scalars['String']
};

export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'displayName' | 'photoURL'>
  )> }
);

export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!, $public: Boolean!) {
  createChannel(input: {name: $name, public: $public}) {
    id
  }
}
    `
export type CreateChannelMutationFn = ApolloReactCommon.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      public: // value for 'public'
 *   },
 * });
 */
export function useCreateChannelMutation (baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, baseOptions)
}
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = ApolloReactCommon.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const GetChannelsDocument = gql`
    query GetChannels {
  channels {
    id
    name
    secret
    createdAt
  }
}
    `

/**
 * __useGetChannelsQuery__
 *
 * To run a query within a React component, call `useGetChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChannelsQuery (baseOptions?: ApolloReactHooks.QueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
  return ApolloReactHooks.useQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, baseOptions)
}
export function useGetChannelsLazyQuery (baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, baseOptions)
}
export type GetChannelsQueryHookResult = ReturnType<typeof useGetChannelsQuery>;
export type GetChannelsLazyQueryHookResult = ReturnType<typeof useGetChannelsLazyQuery>;
export type GetChannelsQueryResult = ApolloReactCommon.QueryResult<GetChannelsQuery, GetChannelsQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  currentUser {
    id
    displayName
    photoURL
  }
}
    `

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery (baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
  return ApolloReactHooks.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions)
}
export function useGetCurrentUserLazyQuery (baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions)
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = ApolloReactCommon.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetNotificationsDocument = gql`
    query GetNotifications {
  notifications {
    id
    body
    createdAt
  }
}
    `

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationsQuery (baseOptions?: ApolloReactHooks.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
  return ApolloReactHooks.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, baseOptions)
}
export function useGetNotificationsLazyQuery (baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, baseOptions)
}
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = ApolloReactCommon.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  user(id: $id) {
    id
    displayName
    photoURL
  }
}
    `

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery (baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions)
}
export function useGetUserLazyQuery (baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions)
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
