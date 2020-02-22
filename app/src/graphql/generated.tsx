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
  secret: Scalars['String'],
  createdAt: Scalars['Timestamp'],
  createdBy: User,
  updatedAt: Scalars['Timestamp'],
};

export type CreateChannelInput = {
  name: Scalars['String'],
};

export type CreateUserInput = {
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createChannel: Channel,
  createUser: User,
  subscribeChannel: Channel,
};

export type MutationCreateChannelArgs = {
  input: CreateChannelInput
};

export type MutationCreateUserArgs = {
  input: CreateUserInput
};

export type MutationSubscribeChannelArgs = {
  channelId: Scalars['UUID']
};

export type Notification = {
   __typename?: 'Notification',
  id: Scalars['ID'],
  body: Scalars['String'],
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

export type QueryUserArgs = {
  id: Scalars['ID']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  subscribedChannels: Array<Channel>,
  createdAt: Scalars['Timestamp'],
  updatedAt: Scalars['Timestamp'],
};

export type GetUserQueryVariables = {
  id: Scalars['ID']
};

export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
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
