import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type UploadUrlResponse = {
  __typename?: 'UploadUrlResponse';
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Refers to a parent/main topic within which multiple sub-topics (subjects) can be managed, facilitating the organization and exploration of books, templates, and clips. */
export type Channel = {
  __typename?: 'channel';
  active: Scalars['Boolean']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  channelTypeId: Scalars['Int']['output'];
  /** An object relationship */
  channel_type: Channel_Type;
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  /** An object relationship */
  organization: Organization;
  organizationId: Scalars['Int']['output'];
  /** An array relationship */
  subjects: Array<Subject>;
  /** An aggregate relationship */
  subjects_aggregate: Subject_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** Refers to a parent/main topic within which multiple sub-topics (subjects) can be managed, facilitating the organization and exploration of books, templates, and clips. */
export type ChannelSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


/** Refers to a parent/main topic within which multiple sub-topics (subjects) can be managed, facilitating the organization and exploration of books, templates, and clips. */
export type ChannelSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** aggregated selection of "channel" */
export type Channel_Aggregate = {
  __typename?: 'channel_aggregate';
  aggregate?: Maybe<Channel_Aggregate_Fields>;
  nodes: Array<Channel>;
};

export type Channel_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Channel_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Channel_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Channel_Aggregate_Bool_Exp_Count>;
};

export type Channel_Aggregate_Bool_Exp_Bool_And = {
  arguments: Channel_Select_Column_Channel_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Channel_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Channel_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Channel_Select_Column_Channel_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Channel_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Channel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Channel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "channel" */
export type Channel_Aggregate_Fields = {
  __typename?: 'channel_aggregate_fields';
  avg?: Maybe<Channel_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Channel_Max_Fields>;
  min?: Maybe<Channel_Min_Fields>;
  stddev?: Maybe<Channel_Stddev_Fields>;
  stddev_pop?: Maybe<Channel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channel_Stddev_Samp_Fields>;
  sum?: Maybe<Channel_Sum_Fields>;
  var_pop?: Maybe<Channel_Var_Pop_Fields>;
  var_samp?: Maybe<Channel_Var_Samp_Fields>;
  variance?: Maybe<Channel_Variance_Fields>;
};


/** aggregate fields of "channel" */
export type Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "channel" */
export type Channel_Aggregate_Order_By = {
  avg?: InputMaybe<Channel_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Channel_Max_Order_By>;
  min?: InputMaybe<Channel_Min_Order_By>;
  stddev?: InputMaybe<Channel_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Channel_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Channel_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Channel_Sum_Order_By>;
  var_pop?: InputMaybe<Channel_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Channel_Var_Samp_Order_By>;
  variance?: InputMaybe<Channel_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "channel" */
export type Channel_Arr_Rel_Insert_Input = {
  data: Array<Channel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};

/** aggregate avg on columns */
export type Channel_Avg_Fields = {
  __typename?: 'channel_avg_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "channel" */
export type Channel_Avg_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Bool_Exp>>;
  _not?: InputMaybe<Channel_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  channelTypeId?: InputMaybe<Int_Comparison_Exp>;
  channel_type?: InputMaybe<Channel_Type_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  subjects?: InputMaybe<Subject_Bool_Exp>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChannelPkey = 'channel_pkey'
}

/** input type for incrementing numeric columns in table "channel" */
export type Channel_Inc_Input = {
  channelTypeId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "channel" */
export type Channel_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelTypeId?: InputMaybe<Scalars['Int']['input']>;
  channel_type?: InputMaybe<Channel_Type_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjects?: InputMaybe<Subject_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'channel_max_fields';
  alias?: Maybe<Scalars['String']['output']>;
  channelTypeId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "channel" */
export type Channel_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'channel_min_fields';
  alias?: Maybe<Scalars['String']['output']>;
  channelTypeId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "channel" */
export type Channel_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "channel" */
export type Channel_Mutation_Response = {
  __typename?: 'channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel>;
};

/** on_conflict condition type for table "channel" */
export type Channel_On_Conflict = {
  constraint: Channel_Constraint;
  update_columns?: Array<Channel_Update_Column>;
  where?: InputMaybe<Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "channel". */
export type Channel_Order_By = {
  active?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  channelTypeId?: InputMaybe<Order_By>;
  channel_type?: InputMaybe<Channel_Type_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel */
export type Channel_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "channel" */
export enum Channel_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelTypeId = 'channelTypeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "channel_aggregate_bool_exp_bool_and_arguments_columns" columns of table "channel" */
export enum Channel_Select_Column_Channel_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "channel_aggregate_bool_exp_bool_or_arguments_columns" columns of table "channel" */
export enum Channel_Select_Column_Channel_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "channel" */
export type Channel_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelTypeId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Channel_Stddev_Fields = {
  __typename?: 'channel_stddev_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "channel" */
export type Channel_Stddev_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Channel_Stddev_Pop_Fields = {
  __typename?: 'channel_stddev_pop_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "channel" */
export type Channel_Stddev_Pop_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Channel_Stddev_Samp_Fields = {
  __typename?: 'channel_stddev_samp_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "channel" */
export type Channel_Stddev_Samp_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "channel" */
export type Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelTypeId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Channel_Sum_Fields = {
  __typename?: 'channel_sum_fields';
  channelTypeId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "channel" */
export type Channel_Sum_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Master table for channel types that organizations can use to create channels */
export type Channel_Type = {
  __typename?: 'channel_type';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "channel_type" */
export type Channel_Type_Aggregate = {
  __typename?: 'channel_type_aggregate';
  aggregate?: Maybe<Channel_Type_Aggregate_Fields>;
  nodes: Array<Channel_Type>;
};

/** aggregate fields of "channel_type" */
export type Channel_Type_Aggregate_Fields = {
  __typename?: 'channel_type_aggregate_fields';
  avg?: Maybe<Channel_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Channel_Type_Max_Fields>;
  min?: Maybe<Channel_Type_Min_Fields>;
  stddev?: Maybe<Channel_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Channel_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channel_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Channel_Type_Sum_Fields>;
  var_pop?: Maybe<Channel_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Channel_Type_Var_Samp_Fields>;
  variance?: Maybe<Channel_Type_Variance_Fields>;
};


/** aggregate fields of "channel_type" */
export type Channel_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Channel_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Channel_Type_Avg_Fields = {
  __typename?: 'channel_type_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "channel_type". All fields are combined with a logical 'AND'. */
export type Channel_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Channel_Type_Bool_Exp>>;
  _not?: InputMaybe<Channel_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Channel_Type_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "channel_type" */
export enum Channel_Type_Constraint {
  /** unique or primary key constraint on columns "label" */
  ChannelTypeLabelKey = 'channel_type_label_key',
  /** unique or primary key constraint on columns "id" */
  ChannelTypePkey = 'channel_type_pkey'
}

/** input type for incrementing numeric columns in table "channel_type" */
export type Channel_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "channel_type" */
export type Channel_Type_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Channel_Type_Max_Fields = {
  __typename?: 'channel_type_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Channel_Type_Min_Fields = {
  __typename?: 'channel_type_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "channel_type" */
export type Channel_Type_Mutation_Response = {
  __typename?: 'channel_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel_Type>;
};

/** input type for inserting object relation for remote table "channel_type" */
export type Channel_Type_Obj_Rel_Insert_Input = {
  data: Channel_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Channel_Type_On_Conflict>;
};

/** on_conflict condition type for table "channel_type" */
export type Channel_Type_On_Conflict = {
  constraint: Channel_Type_Constraint;
  update_columns?: Array<Channel_Type_Update_Column>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "channel_type". */
export type Channel_Type_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: channel_type */
export type Channel_Type_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "channel_type" */
export enum Channel_Type_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "channel_type" */
export type Channel_Type_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Channel_Type_Stddev_Fields = {
  __typename?: 'channel_type_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Channel_Type_Stddev_Pop_Fields = {
  __typename?: 'channel_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Channel_Type_Stddev_Samp_Fields = {
  __typename?: 'channel_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "channel_type" */
export type Channel_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Channel_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Channel_Type_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Channel_Type_Sum_Fields = {
  __typename?: 'channel_type_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "channel_type" */
export enum Channel_Type_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Channel_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Channel_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Channel_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Channel_Type_Var_Pop_Fields = {
  __typename?: 'channel_type_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Channel_Type_Var_Samp_Fields = {
  __typename?: 'channel_type_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Channel_Type_Variance_Fields = {
  __typename?: 'channel_type_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "channel" */
export enum Channel_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelTypeId = 'channelTypeId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Channel_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Channel_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Channel_Set_Input>;
  /** filter the rows which have to be updated */
  where: Channel_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Channel_Var_Pop_Fields = {
  __typename?: 'channel_var_pop_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "channel" */
export type Channel_Var_Pop_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Channel_Var_Samp_Fields = {
  __typename?: 'channel_var_samp_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "channel" */
export type Channel_Var_Samp_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Channel_Variance_Fields = {
  __typename?: 'channel_variance_fields';
  channelTypeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "channel" */
export type Channel_Variance_Order_By = {
  channelTypeId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Clip used in book sections */
export type Clip = {
  __typename?: 'clip';
  /** fetch data from the table: "clip_media" */
  clip_media: Array<Clip_Media>;
  /** fetch aggregated fields from the table: "clip_media" */
  clip_media_aggregate: Clip_Media_Aggregate;
  content?: Maybe<Scalars['String']['output']>;
  contributor: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  organization: Organization;
  organizationId: Scalars['Int']['output'];
  publishStatus: Publish_Status_Enum;
  reviewStatus?: Maybe<Public_Review_Status_Enum>;
  title: Scalars['String']['output'];
  type: Clip_Type_Enum;
  updatedAt: Scalars['timestamptz']['output'];
};


/** Clip used in book sections */
export type ClipClip_MediaArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


/** Clip used in book sections */
export type ClipClip_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};

/** aggregated selection of "clip" */
export type Clip_Aggregate = {
  __typename?: 'clip_aggregate';
  aggregate?: Maybe<Clip_Aggregate_Fields>;
  nodes: Array<Clip>;
};

/** aggregate fields of "clip" */
export type Clip_Aggregate_Fields = {
  __typename?: 'clip_aggregate_fields';
  avg?: Maybe<Clip_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Clip_Max_Fields>;
  min?: Maybe<Clip_Min_Fields>;
  stddev?: Maybe<Clip_Stddev_Fields>;
  stddev_pop?: Maybe<Clip_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Clip_Stddev_Samp_Fields>;
  sum?: Maybe<Clip_Sum_Fields>;
  var_pop?: Maybe<Clip_Var_Pop_Fields>;
  var_samp?: Maybe<Clip_Var_Samp_Fields>;
  variance?: Maybe<Clip_Variance_Fields>;
};


/** aggregate fields of "clip" */
export type Clip_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clip_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Clip_Avg_Fields = {
  __typename?: 'clip_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "clip". All fields are combined with a logical 'AND'. */
export type Clip_Bool_Exp = {
  _and?: InputMaybe<Array<Clip_Bool_Exp>>;
  _not?: InputMaybe<Clip_Bool_Exp>;
  _or?: InputMaybe<Array<Clip_Bool_Exp>>;
  clip_media?: InputMaybe<Clip_Media_Bool_Exp>;
  clip_media_aggregate?: InputMaybe<Clip_Media_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  contributor?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  publishStatus?: InputMaybe<Publish_Status_Enum_Comparison_Exp>;
  reviewStatus?: InputMaybe<Public_Review_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Clip_Type_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "clip" */
export enum Clip_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClipPkey = 'clip_pkey'
}

/** input type for incrementing numeric columns in table "clip" */
export type Clip_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "clip" */
export type Clip_Insert_Input = {
  clip_media?: InputMaybe<Clip_Media_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  contributor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  publishStatus?: InputMaybe<Publish_Status_Enum>;
  reviewStatus?: InputMaybe<Public_Review_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Clip_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Clip_Max_Fields = {
  __typename?: 'clip_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  contributor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** Media used in clips */
export type Clip_Media = {
  __typename?: 'clip_media';
  clipId: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  type: Media_Type_Enum;
  updatedAt: Scalars['timestamptz']['output'];
  imageUrl: string;
  altText: string;
};

/** aggregated selection of "clip_media" */
export type Clip_Media_Aggregate = {
  __typename?: 'clip_media_aggregate';
  aggregate?: Maybe<Clip_Media_Aggregate_Fields>;
  nodes: Array<Clip_Media>;
};

export type Clip_Media_Aggregate_Bool_Exp = {
  count?: InputMaybe<Clip_Media_Aggregate_Bool_Exp_Count>;
};

export type Clip_Media_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Clip_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Clip_Media_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "clip_media" */
export type Clip_Media_Aggregate_Fields = {
  __typename?: 'clip_media_aggregate_fields';
  avg?: Maybe<Clip_Media_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Clip_Media_Max_Fields>;
  min?: Maybe<Clip_Media_Min_Fields>;
  stddev?: Maybe<Clip_Media_Stddev_Fields>;
  stddev_pop?: Maybe<Clip_Media_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Clip_Media_Stddev_Samp_Fields>;
  sum?: Maybe<Clip_Media_Sum_Fields>;
  var_pop?: Maybe<Clip_Media_Var_Pop_Fields>;
  var_samp?: Maybe<Clip_Media_Var_Samp_Fields>;
  variance?: Maybe<Clip_Media_Variance_Fields>;
};


/** aggregate fields of "clip_media" */
export type Clip_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clip_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "clip_media" */
export type Clip_Media_Aggregate_Order_By = {
  avg?: InputMaybe<Clip_Media_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Clip_Media_Max_Order_By>;
  min?: InputMaybe<Clip_Media_Min_Order_By>;
  stddev?: InputMaybe<Clip_Media_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Clip_Media_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Clip_Media_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Clip_Media_Sum_Order_By>;
  var_pop?: InputMaybe<Clip_Media_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Clip_Media_Var_Samp_Order_By>;
  variance?: InputMaybe<Clip_Media_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "clip_media" */
export type Clip_Media_Arr_Rel_Insert_Input = {
  data: Array<Clip_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Clip_Media_On_Conflict>;
};

/** aggregate avg on columns */
export type Clip_Media_Avg_Fields = {
  __typename?: 'clip_media_avg_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "clip_media" */
export type Clip_Media_Avg_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "clip_media". All fields are combined with a logical 'AND'. */
export type Clip_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Clip_Media_Bool_Exp>>;
  _not?: InputMaybe<Clip_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Clip_Media_Bool_Exp>>;
  clipId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Media_Type_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "clip_media" */
export enum Clip_Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClipMediaPkey = 'clip_media_pkey'
}

/** input type for incrementing numeric columns in table "clip_media" */
export type Clip_Media_Inc_Input = {
  clipId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "clip_media" */
export type Clip_Media_Insert_Input = {
  clipId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Media_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Clip_Media_Max_Fields = {
  __typename?: 'clip_media_max_fields';
  clipId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "clip_media" */
export type Clip_Media_Max_Order_By = {
  clipId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Clip_Media_Min_Fields = {
  __typename?: 'clip_media_min_fields';
  clipId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "clip_media" */
export type Clip_Media_Min_Order_By = {
  clipId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "clip_media" */
export type Clip_Media_Mutation_Response = {
  __typename?: 'clip_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clip_Media>;
};

/** on_conflict condition type for table "clip_media" */
export type Clip_Media_On_Conflict = {
  constraint: Clip_Media_Constraint;
  update_columns?: Array<Clip_Media_Update_Column>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "clip_media". */
export type Clip_Media_Order_By = {
  clipId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clip_media */
export type Clip_Media_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "clip_media" */
export enum Clip_Media_Select_Column {
  /** column name */
  ClipId = 'clipId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "clip_media" */
export type Clip_Media_Set_Input = {
  clipId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Media_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Clip_Media_Stddev_Fields = {
  __typename?: 'clip_media_stddev_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "clip_media" */
export type Clip_Media_Stddev_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Clip_Media_Stddev_Pop_Fields = {
  __typename?: 'clip_media_stddev_pop_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "clip_media" */
export type Clip_Media_Stddev_Pop_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Clip_Media_Stddev_Samp_Fields = {
  __typename?: 'clip_media_stddev_samp_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "clip_media" */
export type Clip_Media_Stddev_Samp_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "clip_media" */
export type Clip_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clip_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clip_Media_Stream_Cursor_Value_Input = {
  clipId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Media_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Clip_Media_Sum_Fields = {
  __typename?: 'clip_media_sum_fields';
  clipId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "clip_media" */
export type Clip_Media_Sum_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "clip_media" */
export enum Clip_Media_Update_Column {
  /** column name */
  ClipId = 'clipId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Source = 'source',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Clip_Media_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Clip_Media_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clip_Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clip_Media_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Clip_Media_Var_Pop_Fields = {
  __typename?: 'clip_media_var_pop_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "clip_media" */
export type Clip_Media_Var_Pop_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Clip_Media_Var_Samp_Fields = {
  __typename?: 'clip_media_var_samp_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "clip_media" */
export type Clip_Media_Var_Samp_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Clip_Media_Variance_Fields = {
  __typename?: 'clip_media_variance_fields';
  clipId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "clip_media" */
export type Clip_Media_Variance_Order_By = {
  clipId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Clip_Min_Fields = {
  __typename?: 'clip_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  contributor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "clip" */
export type Clip_Mutation_Response = {
  __typename?: 'clip_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clip>;
};

/** on_conflict condition type for table "clip" */
export type Clip_On_Conflict = {
  constraint: Clip_Constraint;
  update_columns?: Array<Clip_Update_Column>;
  where?: InputMaybe<Clip_Bool_Exp>;
};

/** Ordering options when selecting data from "clip". */
export type Clip_Order_By = {
  clip_media_aggregate?: InputMaybe<Clip_Media_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  contributor?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  publishStatus?: InputMaybe<Order_By>;
  reviewStatus?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clip */
export type Clip_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "clip" */
export enum Clip_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Contributor = 'contributor',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PublishStatus = 'publishStatus',
  /** column name */
  ReviewStatus = 'reviewStatus',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "clip" */
export type Clip_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  contributor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  publishStatus?: InputMaybe<Publish_Status_Enum>;
  reviewStatus?: InputMaybe<Public_Review_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Clip_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Clip_Stddev_Fields = {
  __typename?: 'clip_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Clip_Stddev_Pop_Fields = {
  __typename?: 'clip_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Clip_Stddev_Samp_Fields = {
  __typename?: 'clip_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "clip" */
export type Clip_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clip_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clip_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  contributor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  publishStatus?: InputMaybe<Publish_Status_Enum>;
  reviewStatus?: InputMaybe<Public_Review_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Clip_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Clip_Sum_Fields = {
  __typename?: 'clip_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** Clip type enum table */
export type Clip_Type = {
  __typename?: 'clip_type';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "clip_type" */
export type Clip_Type_Aggregate = {
  __typename?: 'clip_type_aggregate';
  aggregate?: Maybe<Clip_Type_Aggregate_Fields>;
  nodes: Array<Clip_Type>;
};

/** aggregate fields of "clip_type" */
export type Clip_Type_Aggregate_Fields = {
  __typename?: 'clip_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Clip_Type_Max_Fields>;
  min?: Maybe<Clip_Type_Min_Fields>;
};


/** aggregate fields of "clip_type" */
export type Clip_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clip_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "clip_type". All fields are combined with a logical 'AND'. */
export type Clip_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Clip_Type_Bool_Exp>>;
  _not?: InputMaybe<Clip_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Clip_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "clip_type" */
export enum Clip_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ClipTypePkey = 'clip_type_pkey'
}

export enum Clip_Type_Enum {
  /** Audio clip */
  Audio = 'AUDIO',
  /** Image clip */
  Image = 'IMAGE',
  /** Test clip */
  Text = 'TEXT',
  /** Video clip */
  Video = 'VIDEO'
}

/** Boolean expression to compare columns of type "clip_type_enum". All fields are combined with logical 'AND'. */
export type Clip_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Clip_Type_Enum>;
  _in?: InputMaybe<Array<Clip_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Clip_Type_Enum>;
  _nin?: InputMaybe<Array<Clip_Type_Enum>>;
};

/** input type for inserting data into table "clip_type" */
export type Clip_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Clip_Type_Max_Fields = {
  __typename?: 'clip_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Clip_Type_Min_Fields = {
  __typename?: 'clip_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "clip_type" */
export type Clip_Type_Mutation_Response = {
  __typename?: 'clip_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clip_Type>;
};

/** on_conflict condition type for table "clip_type" */
export type Clip_Type_On_Conflict = {
  constraint: Clip_Type_Constraint;
  update_columns?: Array<Clip_Type_Update_Column>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "clip_type". */
export type Clip_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clip_type */
export type Clip_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "clip_type" */
export enum Clip_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "clip_type" */
export type Clip_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "clip_type" */
export type Clip_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clip_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clip_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "clip_type" */
export enum Clip_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Clip_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clip_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clip_Type_Bool_Exp;
};

/** update columns of table "clip" */
export enum Clip_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Contributor = 'contributor',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PublishStatus = 'publishStatus',
  /** column name */
  ReviewStatus = 'reviewStatus',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Clip_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Clip_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clip_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clip_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Clip_Var_Pop_Fields = {
  __typename?: 'clip_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Clip_Var_Samp_Fields = {
  __typename?: 'clip_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Clip_Variance_Fields = {
  __typename?: 'clip_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Font family enum table */
export type Font_Family = {
  __typename?: 'font_family';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "font_family" */
export type Font_Family_Aggregate = {
  __typename?: 'font_family_aggregate';
  aggregate?: Maybe<Font_Family_Aggregate_Fields>;
  nodes: Array<Font_Family>;
};

/** aggregate fields of "font_family" */
export type Font_Family_Aggregate_Fields = {
  __typename?: 'font_family_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Font_Family_Max_Fields>;
  min?: Maybe<Font_Family_Min_Fields>;
};


/** aggregate fields of "font_family" */
export type Font_Family_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Font_Family_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "font_family". All fields are combined with a logical 'AND'. */
export type Font_Family_Bool_Exp = {
  _and?: InputMaybe<Array<Font_Family_Bool_Exp>>;
  _not?: InputMaybe<Font_Family_Bool_Exp>;
  _or?: InputMaybe<Array<Font_Family_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "font_family" */
export enum Font_Family_Constraint {
  /** unique or primary key constraint on columns "value" */
  FontFamilyPkey = 'font_family_pkey'
}

export enum Font_Family_Enum {
  /** https://fonts.google.com/specimen/ABeeZee */
  Abeezee = 'ABEEZEE',
  /** https://fonts.google.com/specimen/Roboto */
  Roboto = 'ROBOTO',
  /** https://fonts.google.com/specimen/Satisfy */
  Satisfy = 'SATISFY'
}

/** Boolean expression to compare columns of type "font_family_enum". All fields are combined with logical 'AND'. */
export type Font_Family_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Font_Family_Enum>;
  _in?: InputMaybe<Array<Font_Family_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Font_Family_Enum>;
  _nin?: InputMaybe<Array<Font_Family_Enum>>;
};

/** input type for inserting data into table "font_family" */
export type Font_Family_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Font_Family_Max_Fields = {
  __typename?: 'font_family_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Font_Family_Min_Fields = {
  __typename?: 'font_family_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "font_family" */
export type Font_Family_Mutation_Response = {
  __typename?: 'font_family_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Font_Family>;
};

/** on_conflict condition type for table "font_family" */
export type Font_Family_On_Conflict = {
  constraint: Font_Family_Constraint;
  update_columns?: Array<Font_Family_Update_Column>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};

/** Ordering options when selecting data from "font_family". */
export type Font_Family_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: font_family */
export type Font_Family_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "font_family" */
export enum Font_Family_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "font_family" */
export type Font_Family_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "font_family" */
export type Font_Family_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Font_Family_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Font_Family_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "font_family" */
export enum Font_Family_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Font_Family_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Font_Family_Set_Input>;
  /** filter the rows which have to be updated */
  where: Font_Family_Bool_Exp;
};

/** Language enum table */
export type Language = {
  __typename?: 'language';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "language" */
export type Language_Aggregate = {
  __typename?: 'language_aggregate';
  aggregate?: Maybe<Language_Aggregate_Fields>;
  nodes: Array<Language>;
};

/** aggregate fields of "language" */
export type Language_Aggregate_Fields = {
  __typename?: 'language_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Language_Max_Fields>;
  min?: Maybe<Language_Min_Fields>;
};


/** aggregate fields of "language" */
export type Language_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Language_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "language". All fields are combined with a logical 'AND'. */
export type Language_Bool_Exp = {
  _and?: InputMaybe<Array<Language_Bool_Exp>>;
  _not?: InputMaybe<Language_Bool_Exp>;
  _or?: InputMaybe<Array<Language_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "language" */
export enum Language_Constraint {
  /** unique or primary key constraint on columns "value" */
  LanguagePkey = 'language_pkey'
}

/** input type for inserting data into table "language" */
export type Language_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Language_Max_Fields = {
  __typename?: 'language_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Language_Min_Fields = {
  __typename?: 'language_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "language" */
export type Language_Mutation_Response = {
  __typename?: 'language_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Language>;
};

/** on_conflict condition type for table "language" */
export type Language_On_Conflict = {
  constraint: Language_Constraint;
  update_columns?: Array<Language_Update_Column>;
  where?: InputMaybe<Language_Bool_Exp>;
};

/** Ordering options when selecting data from "language". */
export type Language_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: language */
export type Language_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "language" */
export enum Language_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "language" */
export type Language_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "language" */
export type Language_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Language_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Language_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "language" */
export enum Language_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Language_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Language_Set_Input>;
  /** filter the rows which have to be updated */
  where: Language_Bool_Exp;
};

/** Media type enum table */
export type Media_Type = {
  __typename?: 'media_type';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "media_type" */
export type Media_Type_Aggregate = {
  __typename?: 'media_type_aggregate';
  aggregate?: Maybe<Media_Type_Aggregate_Fields>;
  nodes: Array<Media_Type>;
};

/** aggregate fields of "media_type" */
export type Media_Type_Aggregate_Fields = {
  __typename?: 'media_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Type_Max_Fields>;
  min?: Maybe<Media_Type_Min_Fields>;
};


/** aggregate fields of "media_type" */
export type Media_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "media_type". All fields are combined with a logical 'AND'. */
export type Media_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Type_Bool_Exp>>;
  _not?: InputMaybe<Media_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_type" */
export enum Media_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  MediaTypePkey = 'media_type_pkey'
}

export enum Media_Type_Enum {
  /** Audio media type */
  Audio = 'audio',
  /** Image media type */
  Image = 'image',
  /** Video media type */
  Video = 'video'
}

/** Boolean expression to compare columns of type "media_type_enum". All fields are combined with logical 'AND'. */
export type Media_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Media_Type_Enum>;
  _in?: InputMaybe<Array<Media_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Media_Type_Enum>;
  _nin?: InputMaybe<Array<Media_Type_Enum>>;
};

/** input type for inserting data into table "media_type" */
export type Media_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Media_Type_Max_Fields = {
  __typename?: 'media_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Media_Type_Min_Fields = {
  __typename?: 'media_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "media_type" */
export type Media_Type_Mutation_Response = {
  __typename?: 'media_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Type>;
};

/** on_conflict condition type for table "media_type" */
export type Media_Type_On_Conflict = {
  constraint: Media_Type_Constraint;
  update_columns?: Array<Media_Type_Update_Column>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "media_type". */
export type Media_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_type */
export type Media_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "media_type" */
export enum Media_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "media_type" */
export type Media_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "media_type" */
export type Media_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "media_type" */
export enum Media_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Media_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Create an S3 upload URL */
  createUploadUrl: UploadUrlResponse;
  /** delete data from the table: "channel" */
  delete_channel?: Maybe<Channel_Mutation_Response>;
  /** delete single row from the table: "channel" */
  delete_channel_by_pk?: Maybe<Channel>;
  /** delete data from the table: "channel_type" */
  delete_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** delete single row from the table: "channel_type" */
  delete_channel_type_by_pk?: Maybe<Channel_Type>;
  /** delete data from the table: "clip" */
  delete_clip?: Maybe<Clip_Mutation_Response>;
  /** delete single row from the table: "clip" */
  delete_clip_by_pk?: Maybe<Clip>;
  /** delete data from the table: "clip_media" */
  delete_clip_media?: Maybe<Clip_Media_Mutation_Response>;
  /** delete single row from the table: "clip_media" */
  delete_clip_media_by_pk?: Maybe<Clip_Media>;
  /** delete data from the table: "clip_type" */
  delete_clip_type?: Maybe<Clip_Type_Mutation_Response>;
  /** delete single row from the table: "clip_type" */
  delete_clip_type_by_pk?: Maybe<Clip_Type>;
  /** delete data from the table: "font_family" */
  delete_font_family?: Maybe<Font_Family_Mutation_Response>;
  /** delete single row from the table: "font_family" */
  delete_font_family_by_pk?: Maybe<Font_Family>;
  /** delete data from the table: "language" */
  delete_language?: Maybe<Language_Mutation_Response>;
  /** delete single row from the table: "language" */
  delete_language_by_pk?: Maybe<Language>;
  /** delete data from the table: "media_type" */
  delete_media_type?: Maybe<Media_Type_Mutation_Response>;
  /** delete single row from the table: "media_type" */
  delete_media_type_by_pk?: Maybe<Media_Type>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "organization_domain" */
  delete_organization_domain?: Maybe<Organization_Domain_Mutation_Response>;
  /** delete single row from the table: "organization_domain" */
  delete_organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** delete data from the table: "organization_theme" */
  delete_organization_theme?: Maybe<Organization_Theme_Mutation_Response>;
  /** delete single row from the table: "organization_theme" */
  delete_organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** delete data from the table: "public_review_status" */
  delete_public_review_status?: Maybe<Public_Review_Status_Mutation_Response>;
  /** delete single row from the table: "public_review_status" */
  delete_public_review_status_by_pk?: Maybe<Public_Review_Status>;
  /** delete data from the table: "publish_status" */
  delete_publish_status?: Maybe<Publish_Status_Mutation_Response>;
  /** delete single row from the table: "publish_status" */
  delete_publish_status_by_pk?: Maybe<Publish_Status>;
  /** delete data from the table: "subject" */
  delete_subject?: Maybe<Subject_Mutation_Response>;
  /** delete single row from the table: "subject" */
  delete_subject_by_pk?: Maybe<Subject>;
  /** delete data from the table: "subject_type" */
  delete_subject_type?: Maybe<Subject_Type_Mutation_Response>;
  /** delete single row from the table: "subject_type" */
  delete_subject_type_by_pk?: Maybe<Subject_Type>;
  /** insert data into the table: "channel" */
  insert_channel?: Maybe<Channel_Mutation_Response>;
  /** insert a single row into the table: "channel" */
  insert_channel_one?: Maybe<Channel>;
  /** insert data into the table: "channel_type" */
  insert_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** insert a single row into the table: "channel_type" */
  insert_channel_type_one?: Maybe<Channel_Type>;
  /** insert data into the table: "clip" */
  insert_clip?: Maybe<Clip_Mutation_Response>;
  /** insert data into the table: "clip_media" */
  insert_clip_media?: Maybe<Clip_Media_Mutation_Response>;
  /** insert a single row into the table: "clip_media" */
  insert_clip_media_one?: Maybe<Clip_Media>;
  /** insert a single row into the table: "clip" */
  insert_clip_one?: Maybe<Clip>;
  /** insert data into the table: "clip_type" */
  insert_clip_type?: Maybe<Clip_Type_Mutation_Response>;
  /** insert a single row into the table: "clip_type" */
  insert_clip_type_one?: Maybe<Clip_Type>;
  /** insert data into the table: "font_family" */
  insert_font_family?: Maybe<Font_Family_Mutation_Response>;
  /** insert a single row into the table: "font_family" */
  insert_font_family_one?: Maybe<Font_Family>;
  /** insert data into the table: "language" */
  insert_language?: Maybe<Language_Mutation_Response>;
  /** insert a single row into the table: "language" */
  insert_language_one?: Maybe<Language>;
  /** insert data into the table: "media_type" */
  insert_media_type?: Maybe<Media_Type_Mutation_Response>;
  /** insert a single row into the table: "media_type" */
  insert_media_type_one?: Maybe<Media_Type>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert data into the table: "organization_domain" */
  insert_organization_domain?: Maybe<Organization_Domain_Mutation_Response>;
  /** insert a single row into the table: "organization_domain" */
  insert_organization_domain_one?: Maybe<Organization_Domain>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "organization_theme" */
  insert_organization_theme?: Maybe<Organization_Theme_Mutation_Response>;
  /** insert a single row into the table: "organization_theme" */
  insert_organization_theme_one?: Maybe<Organization_Theme>;
  /** insert data into the table: "public_review_status" */
  insert_public_review_status?: Maybe<Public_Review_Status_Mutation_Response>;
  /** insert a single row into the table: "public_review_status" */
  insert_public_review_status_one?: Maybe<Public_Review_Status>;
  /** insert data into the table: "publish_status" */
  insert_publish_status?: Maybe<Publish_Status_Mutation_Response>;
  /** insert a single row into the table: "publish_status" */
  insert_publish_status_one?: Maybe<Publish_Status>;
  /** insert data into the table: "subject" */
  insert_subject?: Maybe<Subject_Mutation_Response>;
  /** insert a single row into the table: "subject" */
  insert_subject_one?: Maybe<Subject>;
  /** insert data into the table: "subject_type" */
  insert_subject_type?: Maybe<Subject_Type_Mutation_Response>;
  /** insert a single row into the table: "subject_type" */
  insert_subject_type_one?: Maybe<Subject_Type>;
  /** update data of the table: "channel" */
  update_channel?: Maybe<Channel_Mutation_Response>;
  /** update single row of the table: "channel" */
  update_channel_by_pk?: Maybe<Channel>;
  /** update multiples rows of table: "channel" */
  update_channel_many?: Maybe<Array<Maybe<Channel_Mutation_Response>>>;
  /** update data of the table: "channel_type" */
  update_channel_type?: Maybe<Channel_Type_Mutation_Response>;
  /** update single row of the table: "channel_type" */
  update_channel_type_by_pk?: Maybe<Channel_Type>;
  /** update multiples rows of table: "channel_type" */
  update_channel_type_many?: Maybe<Array<Maybe<Channel_Type_Mutation_Response>>>;
  /** update data of the table: "clip" */
  update_clip?: Maybe<Clip_Mutation_Response>;
  /** update single row of the table: "clip" */
  update_clip_by_pk?: Maybe<Clip>;
  /** update multiples rows of table: "clip" */
  update_clip_many?: Maybe<Array<Maybe<Clip_Mutation_Response>>>;
  /** update data of the table: "clip_media" */
  update_clip_media?: Maybe<Clip_Media_Mutation_Response>;
  /** update single row of the table: "clip_media" */
  update_clip_media_by_pk?: Maybe<Clip_Media>;
  /** update multiples rows of table: "clip_media" */
  update_clip_media_many?: Maybe<Array<Maybe<Clip_Media_Mutation_Response>>>;
  /** update data of the table: "clip_type" */
  update_clip_type?: Maybe<Clip_Type_Mutation_Response>;
  /** update single row of the table: "clip_type" */
  update_clip_type_by_pk?: Maybe<Clip_Type>;
  /** update multiples rows of table: "clip_type" */
  update_clip_type_many?: Maybe<Array<Maybe<Clip_Type_Mutation_Response>>>;
  /** update data of the table: "font_family" */
  update_font_family?: Maybe<Font_Family_Mutation_Response>;
  /** update single row of the table: "font_family" */
  update_font_family_by_pk?: Maybe<Font_Family>;
  /** update multiples rows of table: "font_family" */
  update_font_family_many?: Maybe<Array<Maybe<Font_Family_Mutation_Response>>>;
  /** update data of the table: "language" */
  update_language?: Maybe<Language_Mutation_Response>;
  /** update single row of the table: "language" */
  update_language_by_pk?: Maybe<Language>;
  /** update multiples rows of table: "language" */
  update_language_many?: Maybe<Array<Maybe<Language_Mutation_Response>>>;
  /** update data of the table: "media_type" */
  update_media_type?: Maybe<Media_Type_Mutation_Response>;
  /** update single row of the table: "media_type" */
  update_media_type_by_pk?: Maybe<Media_Type>;
  /** update multiples rows of table: "media_type" */
  update_media_type_many?: Maybe<Array<Maybe<Media_Type_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update data of the table: "organization_domain" */
  update_organization_domain?: Maybe<Organization_Domain_Mutation_Response>;
  /** update single row of the table: "organization_domain" */
  update_organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** update multiples rows of table: "organization_domain" */
  update_organization_domain_many?: Maybe<Array<Maybe<Organization_Domain_Mutation_Response>>>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "organization_theme" */
  update_organization_theme?: Maybe<Organization_Theme_Mutation_Response>;
  /** update single row of the table: "organization_theme" */
  update_organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** update multiples rows of table: "organization_theme" */
  update_organization_theme_many?: Maybe<Array<Maybe<Organization_Theme_Mutation_Response>>>;
  /** update data of the table: "public_review_status" */
  update_public_review_status?: Maybe<Public_Review_Status_Mutation_Response>;
  /** update single row of the table: "public_review_status" */
  update_public_review_status_by_pk?: Maybe<Public_Review_Status>;
  /** update multiples rows of table: "public_review_status" */
  update_public_review_status_many?: Maybe<Array<Maybe<Public_Review_Status_Mutation_Response>>>;
  /** update data of the table: "publish_status" */
  update_publish_status?: Maybe<Publish_Status_Mutation_Response>;
  /** update single row of the table: "publish_status" */
  update_publish_status_by_pk?: Maybe<Publish_Status>;
  /** update multiples rows of table: "publish_status" */
  update_publish_status_many?: Maybe<Array<Maybe<Publish_Status_Mutation_Response>>>;
  /** update data of the table: "subject" */
  update_subject?: Maybe<Subject_Mutation_Response>;
  /** update single row of the table: "subject" */
  update_subject_by_pk?: Maybe<Subject>;
  /** update multiples rows of table: "subject" */
  update_subject_many?: Maybe<Array<Maybe<Subject_Mutation_Response>>>;
  /** update data of the table: "subject_type" */
  update_subject_type?: Maybe<Subject_Type_Mutation_Response>;
  /** update single row of the table: "subject_type" */
  update_subject_type_by_pk?: Maybe<Subject_Type>;
  /** update multiples rows of table: "subject_type" */
  update_subject_type_many?: Maybe<Array<Maybe<Subject_Type_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootCreateUploadUrlArgs = {
  extension: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ChannelArgs = {
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Channel_TypeArgs = {
  where: Channel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ClipArgs = {
  where: Clip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clip_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Clip_MediaArgs = {
  where: Clip_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clip_Media_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Clip_TypeArgs = {
  where: Clip_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clip_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Font_FamilyArgs = {
  where: Font_Family_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Font_Family_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LanguageArgs = {
  where: Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Language_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_TypeArgs = {
  where: Media_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_DomainArgs = {
  where: Organization_Domain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Domain_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_ThemeArgs = {
  where: Organization_Theme_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Public_Review_StatusArgs = {
  where: Public_Review_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Public_Review_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Publish_StatusArgs = {
  where: Publish_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Publish_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubjectArgs = {
  where: Subject_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subject_TypeArgs = {
  where: Subject_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subject_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ChannelArgs = {
  objects: Array<Channel_Insert_Input>;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_OneArgs = {
  object: Channel_Insert_Input;
  on_conflict?: InputMaybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_TypeArgs = {
  objects: Array<Channel_Type_Insert_Input>;
  on_conflict?: InputMaybe<Channel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_Type_OneArgs = {
  object: Channel_Type_Insert_Input;
  on_conflict?: InputMaybe<Channel_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ClipArgs = {
  objects: Array<Clip_Insert_Input>;
  on_conflict?: InputMaybe<Clip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clip_MediaArgs = {
  objects: Array<Clip_Media_Insert_Input>;
  on_conflict?: InputMaybe<Clip_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clip_Media_OneArgs = {
  object: Clip_Media_Insert_Input;
  on_conflict?: InputMaybe<Clip_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clip_OneArgs = {
  object: Clip_Insert_Input;
  on_conflict?: InputMaybe<Clip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clip_TypeArgs = {
  objects: Array<Clip_Type_Insert_Input>;
  on_conflict?: InputMaybe<Clip_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clip_Type_OneArgs = {
  object: Clip_Type_Insert_Input;
  on_conflict?: InputMaybe<Clip_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Font_FamilyArgs = {
  objects: Array<Font_Family_Insert_Input>;
  on_conflict?: InputMaybe<Font_Family_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Font_Family_OneArgs = {
  object: Font_Family_Insert_Input;
  on_conflict?: InputMaybe<Font_Family_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LanguageArgs = {
  objects: Array<Language_Insert_Input>;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Language_OneArgs = {
  object: Language_Insert_Input;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_TypeArgs = {
  objects: Array<Media_Type_Insert_Input>;
  on_conflict?: InputMaybe<Media_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Type_OneArgs = {
  object: Media_Type_Insert_Input;
  on_conflict?: InputMaybe<Media_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_DomainArgs = {
  objects: Array<Organization_Domain_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Domain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Domain_OneArgs = {
  object: Organization_Domain_Insert_Input;
  on_conflict?: InputMaybe<Organization_Domain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_ThemeArgs = {
  objects: Array<Organization_Theme_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Theme_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Theme_OneArgs = {
  object: Organization_Theme_Insert_Input;
  on_conflict?: InputMaybe<Organization_Theme_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Public_Review_StatusArgs = {
  objects: Array<Public_Review_Status_Insert_Input>;
  on_conflict?: InputMaybe<Public_Review_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Public_Review_Status_OneArgs = {
  object: Public_Review_Status_Insert_Input;
  on_conflict?: InputMaybe<Public_Review_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Publish_StatusArgs = {
  objects: Array<Publish_Status_Insert_Input>;
  on_conflict?: InputMaybe<Publish_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Publish_Status_OneArgs = {
  object: Publish_Status_Insert_Input;
  on_conflict?: InputMaybe<Publish_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubjectArgs = {
  objects: Array<Subject_Insert_Input>;
  on_conflict?: InputMaybe<Subject_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_OneArgs = {
  object: Subject_Insert_Input;
  on_conflict?: InputMaybe<Subject_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_TypeArgs = {
  objects: Array<Subject_Type_Insert_Input>;
  on_conflict?: InputMaybe<Subject_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_Type_OneArgs = {
  object: Subject_Type_Insert_Input;
  on_conflict?: InputMaybe<Subject_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelArgs = {
  _inc?: InputMaybe<Channel_Inc_Input>;
  _set?: InputMaybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_By_PkArgs = {
  _inc?: InputMaybe<Channel_Inc_Input>;
  _set?: InputMaybe<Channel_Set_Input>;
  pk_columns: Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_ManyArgs = {
  updates: Array<Channel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_TypeArgs = {
  _inc?: InputMaybe<Channel_Type_Inc_Input>;
  _set?: InputMaybe<Channel_Type_Set_Input>;
  where: Channel_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Type_By_PkArgs = {
  _inc?: InputMaybe<Channel_Type_Inc_Input>;
  _set?: InputMaybe<Channel_Type_Set_Input>;
  pk_columns: Channel_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_Type_ManyArgs = {
  updates: Array<Channel_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ClipArgs = {
  _inc?: InputMaybe<Clip_Inc_Input>;
  _set?: InputMaybe<Clip_Set_Input>;
  where: Clip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_By_PkArgs = {
  _inc?: InputMaybe<Clip_Inc_Input>;
  _set?: InputMaybe<Clip_Set_Input>;
  pk_columns: Clip_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_ManyArgs = {
  updates: Array<Clip_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_MediaArgs = {
  _inc?: InputMaybe<Clip_Media_Inc_Input>;
  _set?: InputMaybe<Clip_Media_Set_Input>;
  where: Clip_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_Media_By_PkArgs = {
  _inc?: InputMaybe<Clip_Media_Inc_Input>;
  _set?: InputMaybe<Clip_Media_Set_Input>;
  pk_columns: Clip_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_Media_ManyArgs = {
  updates: Array<Clip_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_TypeArgs = {
  _set?: InputMaybe<Clip_Type_Set_Input>;
  where: Clip_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_Type_By_PkArgs = {
  _set?: InputMaybe<Clip_Type_Set_Input>;
  pk_columns: Clip_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clip_Type_ManyArgs = {
  updates: Array<Clip_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Font_FamilyArgs = {
  _set?: InputMaybe<Font_Family_Set_Input>;
  where: Font_Family_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Font_Family_By_PkArgs = {
  _set?: InputMaybe<Font_Family_Set_Input>;
  pk_columns: Font_Family_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Font_Family_ManyArgs = {
  updates: Array<Font_Family_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LanguageArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  where: Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Language_By_PkArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  pk_columns: Language_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Language_ManyArgs = {
  updates: Array<Language_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_TypeArgs = {
  _set?: InputMaybe<Media_Type_Set_Input>;
  where: Media_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Type_By_PkArgs = {
  _set?: InputMaybe<Media_Type_Set_Input>;
  pk_columns: Media_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Type_ManyArgs = {
  updates: Array<Media_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_DomainArgs = {
  _inc?: InputMaybe<Organization_Domain_Inc_Input>;
  _set?: InputMaybe<Organization_Domain_Set_Input>;
  where: Organization_Domain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Domain_By_PkArgs = {
  _inc?: InputMaybe<Organization_Domain_Inc_Input>;
  _set?: InputMaybe<Organization_Domain_Set_Input>;
  pk_columns: Organization_Domain_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Domain_ManyArgs = {
  updates: Array<Organization_Domain_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ThemeArgs = {
  _inc?: InputMaybe<Organization_Theme_Inc_Input>;
  _set?: InputMaybe<Organization_Theme_Set_Input>;
  where: Organization_Theme_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Theme_By_PkArgs = {
  _inc?: InputMaybe<Organization_Theme_Inc_Input>;
  _set?: InputMaybe<Organization_Theme_Set_Input>;
  pk_columns: Organization_Theme_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Theme_ManyArgs = {
  updates: Array<Organization_Theme_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Public_Review_StatusArgs = {
  _set?: InputMaybe<Public_Review_Status_Set_Input>;
  where: Public_Review_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Public_Review_Status_By_PkArgs = {
  _set?: InputMaybe<Public_Review_Status_Set_Input>;
  pk_columns: Public_Review_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Public_Review_Status_ManyArgs = {
  updates: Array<Public_Review_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Publish_StatusArgs = {
  _set?: InputMaybe<Publish_Status_Set_Input>;
  where: Publish_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Publish_Status_By_PkArgs = {
  _set?: InputMaybe<Publish_Status_Set_Input>;
  pk_columns: Publish_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Publish_Status_ManyArgs = {
  updates: Array<Publish_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubjectArgs = {
  _inc?: InputMaybe<Subject_Inc_Input>;
  _set?: InputMaybe<Subject_Set_Input>;
  where: Subject_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_By_PkArgs = {
  _inc?: InputMaybe<Subject_Inc_Input>;
  _set?: InputMaybe<Subject_Set_Input>;
  pk_columns: Subject_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_ManyArgs = {
  updates: Array<Subject_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_TypeArgs = {
  _inc?: InputMaybe<Subject_Type_Inc_Input>;
  _set?: InputMaybe<Subject_Type_Set_Input>;
  where: Subject_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Type_By_PkArgs = {
  _inc?: InputMaybe<Subject_Type_Inc_Input>;
  _set?: InputMaybe<Subject_Type_Set_Input>;
  pk_columns: Subject_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Type_ManyArgs = {
  updates: Array<Subject_Type_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Recustom Organization */
export type Organization = {
  __typename?: 'organization';
  bio: Scalars['String']['output'];
  /** An array relationship */
  channels: Array<Channel>;
  /** An aggregate relationship */
  channels_aggregate: Channel_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  emailAddress: Scalars['String']['output'];
  iamOrgId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  organization_domains: Array<Organization_Domain>;
  /** An aggregate relationship */
  organization_domains_aggregate: Organization_Domain_Aggregate;
  /** An object relationship */
  organization_theme?: Maybe<Organization_Theme>;
  phoneNumber: Scalars['String']['output'];
  subdomain: Scalars['String']['output'];
  /** An array relationship */
  subjects: Array<Subject>;
  /** An aggregate relationship */
  subjects_aggregate: Subject_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** Recustom Organization */
export type OrganizationChannelsArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationChannels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationOrganization_DomainsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationOrganization_Domains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


/** Recustom Organization */
export type OrganizationSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  channels?: InputMaybe<Channel_Bool_Exp>;
  channels_aggregate?: InputMaybe<Channel_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  emailAddress?: InputMaybe<String_Comparison_Exp>;
  iamOrgId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  logoUrl?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization_domains?: InputMaybe<Organization_Domain_Bool_Exp>;
  organization_domains_aggregate?: InputMaybe<Organization_Domain_Aggregate_Bool_Exp>;
  organization_theme?: InputMaybe<Organization_Theme_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  subjects?: InputMaybe<Subject_Bool_Exp>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "name" */
  OrganizationNameKey = 'organization_name_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'organization_pkey',
  /** unique or primary key constraint on columns "subdomain" */
  OrganizationSubdomainKey = 'organization_subdomain_key'
}

/** Custom domains for various organizations */
export type Organization_Domain = {
  __typename?: 'organization_domain';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organization: Organization;
  organizationId: Scalars['Int']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "organization_domain" */
export type Organization_Domain_Aggregate = {
  __typename?: 'organization_domain_aggregate';
  aggregate?: Maybe<Organization_Domain_Aggregate_Fields>;
  nodes: Array<Organization_Domain>;
};

export type Organization_Domain_Aggregate_Bool_Exp = {
  count?: InputMaybe<Organization_Domain_Aggregate_Bool_Exp_Count>;
};

export type Organization_Domain_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organization_Domain_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization_domain" */
export type Organization_Domain_Aggregate_Fields = {
  __typename?: 'organization_domain_aggregate_fields';
  avg?: Maybe<Organization_Domain_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Domain_Max_Fields>;
  min?: Maybe<Organization_Domain_Min_Fields>;
  stddev?: Maybe<Organization_Domain_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Domain_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Domain_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Domain_Sum_Fields>;
  var_pop?: Maybe<Organization_Domain_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Domain_Var_Samp_Fields>;
  variance?: Maybe<Organization_Domain_Variance_Fields>;
};


/** aggregate fields of "organization_domain" */
export type Organization_Domain_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organization_domain" */
export type Organization_Domain_Aggregate_Order_By = {
  avg?: InputMaybe<Organization_Domain_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Domain_Max_Order_By>;
  min?: InputMaybe<Organization_Domain_Min_Order_By>;
  stddev?: InputMaybe<Organization_Domain_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organization_Domain_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organization_Domain_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organization_Domain_Sum_Order_By>;
  var_pop?: InputMaybe<Organization_Domain_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organization_Domain_Var_Samp_Order_By>;
  variance?: InputMaybe<Organization_Domain_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization_domain" */
export type Organization_Domain_Arr_Rel_Insert_Input = {
  data: Array<Organization_Domain_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Domain_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_Domain_Avg_Fields = {
  __typename?: 'organization_domain_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "organization_domain" */
export type Organization_Domain_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_domain". All fields are combined with a logical 'AND'. */
export type Organization_Domain_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Domain_Bool_Exp>>;
  _not?: InputMaybe<Organization_Domain_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Domain_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_domain" */
export enum Organization_Domain_Constraint {
  /** unique or primary key constraint on columns "name" */
  OrganizationDomainNameKey = 'organization_domain_name_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationDomainPkey = 'organization_domain_pkey'
}

/** input type for incrementing numeric columns in table "organization_domain" */
export type Organization_Domain_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organization_domain" */
export type Organization_Domain_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Organization_Domain_Max_Fields = {
  __typename?: 'organization_domain_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "organization_domain" */
export type Organization_Domain_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Domain_Min_Fields = {
  __typename?: 'organization_domain_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "organization_domain" */
export type Organization_Domain_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organization_domain" */
export type Organization_Domain_Mutation_Response = {
  __typename?: 'organization_domain_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Domain>;
};

/** on_conflict condition type for table "organization_domain" */
export type Organization_Domain_On_Conflict = {
  constraint: Organization_Domain_Constraint;
  update_columns?: Array<Organization_Domain_Update_Column>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_domain". */
export type Organization_Domain_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_domain */
export type Organization_Domain_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organization_domain" */
export enum Organization_Domain_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organization_domain" */
export type Organization_Domain_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Domain_Stddev_Fields = {
  __typename?: 'organization_domain_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Domain_Stddev_Pop_Fields = {
  __typename?: 'organization_domain_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Domain_Stddev_Samp_Fields = {
  __typename?: 'organization_domain_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "organization_domain" */
export type Organization_Domain_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organization_domain" */
export type Organization_Domain_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Domain_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Domain_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Organization_Domain_Sum_Fields = {
  __typename?: 'organization_domain_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "organization_domain" */
export type Organization_Domain_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** update columns of table "organization_domain" */
export enum Organization_Domain_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Organization_Domain_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Domain_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Domain_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Domain_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Domain_Var_Pop_Fields = {
  __typename?: 'organization_domain_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "organization_domain" */
export type Organization_Domain_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Domain_Var_Samp_Fields = {
  __typename?: 'organization_domain_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "organization_domain" */
export type Organization_Domain_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Domain_Variance_Fields = {
  __typename?: 'organization_domain_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "organization_domain" */
export type Organization_Domain_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  channels?: InputMaybe<Channel_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  iamOrgId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_domains?: InputMaybe<Organization_Domain_Arr_Rel_Insert_Input>;
  organization_theme?: InputMaybe<Organization_Theme_Obj_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  subjects?: InputMaybe<Subject_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  iamOrgId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  iamOrgId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  bio?: InputMaybe<Order_By>;
  channels_aggregate?: InputMaybe<Channel_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  iamOrgId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logoUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_domains_aggregate?: InputMaybe<Organization_Domain_Aggregate_Order_By>;
  organization_theme?: InputMaybe<Organization_Theme_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  subjects_aggregate?: InputMaybe<Subject_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  IamOrgId = 'iamOrgId',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  iamOrgId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  iamOrgId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** Theming for the organization websites */
export type Organization_Theme = {
  __typename?: 'organization_theme';
  buttonRadius?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  errorColor?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Font_Family_Enum>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  infoColor?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['Int']['output'];
  primaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColor?: Maybe<Scalars['String']['output']>;
  successColor?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  warningColor?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "organization_theme" */
export type Organization_Theme_Aggregate = {
  __typename?: 'organization_theme_aggregate';
  aggregate?: Maybe<Organization_Theme_Aggregate_Fields>;
  nodes: Array<Organization_Theme>;
};

/** aggregate fields of "organization_theme" */
export type Organization_Theme_Aggregate_Fields = {
  __typename?: 'organization_theme_aggregate_fields';
  avg?: Maybe<Organization_Theme_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Theme_Max_Fields>;
  min?: Maybe<Organization_Theme_Min_Fields>;
  stddev?: Maybe<Organization_Theme_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Theme_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Theme_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Theme_Sum_Fields>;
  var_pop?: Maybe<Organization_Theme_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Theme_Var_Samp_Fields>;
  variance?: Maybe<Organization_Theme_Variance_Fields>;
};


/** aggregate fields of "organization_theme" */
export type Organization_Theme_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organization_Theme_Avg_Fields = {
  __typename?: 'organization_theme_avg_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organization_theme". All fields are combined with a logical 'AND'. */
export type Organization_Theme_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Theme_Bool_Exp>>;
  _not?: InputMaybe<Organization_Theme_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Theme_Bool_Exp>>;
  buttonRadius?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  errorColor?: InputMaybe<String_Comparison_Exp>;
  fontFamily?: InputMaybe<Font_Family_Enum_Comparison_Exp>;
  fontSize?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  infoColor?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  primaryColor?: InputMaybe<String_Comparison_Exp>;
  secondaryColor?: InputMaybe<String_Comparison_Exp>;
  successColor?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  warningColor?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_theme" */
export enum Organization_Theme_Constraint {
  /** unique or primary key constraint on columns "organizationId" */
  OrganizationThemeOrganizationIdKey = 'organization_theme_organizationId_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationThemePkey = 'organization_theme_pkey'
}

/** input type for incrementing numeric columns in table "organization_theme" */
export type Organization_Theme_Inc_Input = {
  buttonRadius?: InputMaybe<Scalars['Int']['input']>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organization_theme" */
export type Organization_Theme_Insert_Input = {
  buttonRadius?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  errorColor?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Font_Family_Enum>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  infoColor?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  successColor?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  warningColor?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Theme_Max_Fields = {
  __typename?: 'organization_theme_max_fields';
  buttonRadius?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  errorColor?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  infoColor?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColor?: Maybe<Scalars['String']['output']>;
  successColor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  warningColor?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Theme_Min_Fields = {
  __typename?: 'organization_theme_min_fields';
  buttonRadius?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  errorColor?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  infoColor?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColor?: Maybe<Scalars['String']['output']>;
  successColor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  warningColor?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_theme" */
export type Organization_Theme_Mutation_Response = {
  __typename?: 'organization_theme_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Theme>;
};

/** input type for inserting object relation for remote table "organization_theme" */
export type Organization_Theme_Obj_Rel_Insert_Input = {
  data: Organization_Theme_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Theme_On_Conflict>;
};

/** on_conflict condition type for table "organization_theme" */
export type Organization_Theme_On_Conflict = {
  constraint: Organization_Theme_Constraint;
  update_columns?: Array<Organization_Theme_Update_Column>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_theme". */
export type Organization_Theme_Order_By = {
  buttonRadius?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorColor?: InputMaybe<Order_By>;
  fontFamily?: InputMaybe<Order_By>;
  fontSize?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  infoColor?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  primaryColor?: InputMaybe<Order_By>;
  secondaryColor?: InputMaybe<Order_By>;
  successColor?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  warningColor?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_theme */
export type Organization_Theme_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organization_theme" */
export enum Organization_Theme_Select_Column {
  /** column name */
  ButtonRadius = 'buttonRadius',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorColor = 'errorColor',
  /** column name */
  FontFamily = 'fontFamily',
  /** column name */
  FontSize = 'fontSize',
  /** column name */
  Id = 'id',
  /** column name */
  InfoColor = 'infoColor',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryColor = 'primaryColor',
  /** column name */
  SecondaryColor = 'secondaryColor',
  /** column name */
  SuccessColor = 'successColor',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WarningColor = 'warningColor'
}

/** input type for updating data in table "organization_theme" */
export type Organization_Theme_Set_Input = {
  buttonRadius?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  errorColor?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Font_Family_Enum>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  infoColor?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  successColor?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  warningColor?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Theme_Stddev_Fields = {
  __typename?: 'organization_theme_stddev_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Theme_Stddev_Pop_Fields = {
  __typename?: 'organization_theme_stddev_pop_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Theme_Stddev_Samp_Fields = {
  __typename?: 'organization_theme_stddev_samp_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organization_theme" */
export type Organization_Theme_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Theme_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Theme_Stream_Cursor_Value_Input = {
  buttonRadius?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  errorColor?: InputMaybe<Scalars['String']['input']>;
  fontFamily?: InputMaybe<Font_Family_Enum>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  infoColor?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  successColor?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  warningColor?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Organization_Theme_Sum_Fields = {
  __typename?: 'organization_theme_sum_fields';
  buttonRadius?: Maybe<Scalars['Int']['output']>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "organization_theme" */
export enum Organization_Theme_Update_Column {
  /** column name */
  ButtonRadius = 'buttonRadius',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorColor = 'errorColor',
  /** column name */
  FontFamily = 'fontFamily',
  /** column name */
  FontSize = 'fontSize',
  /** column name */
  Id = 'id',
  /** column name */
  InfoColor = 'infoColor',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryColor = 'primaryColor',
  /** column name */
  SecondaryColor = 'secondaryColor',
  /** column name */
  SuccessColor = 'successColor',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WarningColor = 'warningColor'
}

export type Organization_Theme_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Theme_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Theme_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Theme_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Theme_Var_Pop_Fields = {
  __typename?: 'organization_theme_var_pop_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organization_Theme_Var_Samp_Fields = {
  __typename?: 'organization_theme_var_samp_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organization_Theme_Variance_Fields = {
  __typename?: 'organization_theme_variance_fields';
  buttonRadius?: Maybe<Scalars['Float']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  IamOrgId = 'iamOrgId',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Organization_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Review status of a clip/book that is set to public */
export type Public_Review_Status = {
  __typename?: 'public_review_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "public_review_status" */
export type Public_Review_Status_Aggregate = {
  __typename?: 'public_review_status_aggregate';
  aggregate?: Maybe<Public_Review_Status_Aggregate_Fields>;
  nodes: Array<Public_Review_Status>;
};

/** aggregate fields of "public_review_status" */
export type Public_Review_Status_Aggregate_Fields = {
  __typename?: 'public_review_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Public_Review_Status_Max_Fields>;
  min?: Maybe<Public_Review_Status_Min_Fields>;
};


/** aggregate fields of "public_review_status" */
export type Public_Review_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Public_Review_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "public_review_status". All fields are combined with a logical 'AND'. */
export type Public_Review_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Public_Review_Status_Bool_Exp>>;
  _not?: InputMaybe<Public_Review_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Public_Review_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "public_review_status" */
export enum Public_Review_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  PublicReviewStatusPkey = 'public_review_status_pkey'
}

export enum Public_Review_Status_Enum {
  /** The review is approved */
  Approved = 'APPROVED',
  /** The review is denied */
  Denied = 'DENIED',
  /** The review is pending */
  Pending = 'PENDING'
}

/** Boolean expression to compare columns of type "public_review_status_enum". All fields are combined with logical 'AND'. */
export type Public_Review_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Public_Review_Status_Enum>;
  _in?: InputMaybe<Array<Public_Review_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Public_Review_Status_Enum>;
  _nin?: InputMaybe<Array<Public_Review_Status_Enum>>;
};

/** input type for inserting data into table "public_review_status" */
export type Public_Review_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Public_Review_Status_Max_Fields = {
  __typename?: 'public_review_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Public_Review_Status_Min_Fields = {
  __typename?: 'public_review_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "public_review_status" */
export type Public_Review_Status_Mutation_Response = {
  __typename?: 'public_review_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Public_Review_Status>;
};

/** on_conflict condition type for table "public_review_status" */
export type Public_Review_Status_On_Conflict = {
  constraint: Public_Review_Status_Constraint;
  update_columns?: Array<Public_Review_Status_Update_Column>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "public_review_status". */
export type Public_Review_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: public_review_status */
export type Public_Review_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "public_review_status" */
export enum Public_Review_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "public_review_status" */
export type Public_Review_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "public_review_status" */
export type Public_Review_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Public_Review_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Public_Review_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "public_review_status" */
export enum Public_Review_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Public_Review_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Public_Review_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Public_Review_Status_Bool_Exp;
};

/** Clip/Book publishing status */
export type Publish_Status = {
  __typename?: 'publish_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "publish_status" */
export type Publish_Status_Aggregate = {
  __typename?: 'publish_status_aggregate';
  aggregate?: Maybe<Publish_Status_Aggregate_Fields>;
  nodes: Array<Publish_Status>;
};

/** aggregate fields of "publish_status" */
export type Publish_Status_Aggregate_Fields = {
  __typename?: 'publish_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Publish_Status_Max_Fields>;
  min?: Maybe<Publish_Status_Min_Fields>;
};


/** aggregate fields of "publish_status" */
export type Publish_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Publish_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "publish_status". All fields are combined with a logical 'AND'. */
export type Publish_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Publish_Status_Bool_Exp>>;
  _not?: InputMaybe<Publish_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Publish_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "publish_status" */
export enum Publish_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  PublishStatusPkey = 'publish_status_pkey'
}

export enum Publish_Status_Enum {
  /** Draft status */
  Draft = 'DRAFT',
  /** Private status */
  Private = 'PRIVATE',
  /** Public status */
  Public = 'PUBLIC'
}

/** Boolean expression to compare columns of type "publish_status_enum". All fields are combined with logical 'AND'. */
export type Publish_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Publish_Status_Enum>;
  _in?: InputMaybe<Array<Publish_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Publish_Status_Enum>;
  _nin?: InputMaybe<Array<Publish_Status_Enum>>;
};

/** input type for inserting data into table "publish_status" */
export type Publish_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Publish_Status_Max_Fields = {
  __typename?: 'publish_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Publish_Status_Min_Fields = {
  __typename?: 'publish_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "publish_status" */
export type Publish_Status_Mutation_Response = {
  __typename?: 'publish_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Publish_Status>;
};

/** on_conflict condition type for table "publish_status" */
export type Publish_Status_On_Conflict = {
  constraint: Publish_Status_Constraint;
  update_columns?: Array<Publish_Status_Update_Column>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "publish_status". */
export type Publish_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: publish_status */
export type Publish_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "publish_status" */
export enum Publish_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "publish_status" */
export type Publish_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "publish_status" */
export type Publish_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Publish_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Publish_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "publish_status" */
export enum Publish_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Publish_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Publish_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Publish_Status_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "channel_type" */
  channel_type: Array<Channel_Type>;
  /** fetch aggregated fields from the table: "channel_type" */
  channel_type_aggregate: Channel_Type_Aggregate;
  /** fetch data from the table: "channel_type" using primary key columns */
  channel_type_by_pk?: Maybe<Channel_Type>;
  /** fetch data from the table: "clip" */
  clip: Array<Clip>;
  /** fetch aggregated fields from the table: "clip" */
  clip_aggregate: Clip_Aggregate;
  /** fetch data from the table: "clip" using primary key columns */
  clip_by_pk?: Maybe<Clip>;
  /** fetch data from the table: "clip_media" */
  clip_media: Array<Clip_Media>;
  /** fetch aggregated fields from the table: "clip_media" */
  clip_media_aggregate: Clip_Media_Aggregate;
  /** fetch data from the table: "clip_media" using primary key columns */
  clip_media_by_pk?: Maybe<Clip_Media>;
  /** fetch data from the table: "clip_type" */
  clip_type: Array<Clip_Type>;
  /** fetch aggregated fields from the table: "clip_type" */
  clip_type_aggregate: Clip_Type_Aggregate;
  /** fetch data from the table: "clip_type" using primary key columns */
  clip_type_by_pk?: Maybe<Clip_Type>;
  /** fetch data from the table: "font_family" */
  font_family: Array<Font_Family>;
  /** fetch aggregated fields from the table: "font_family" */
  font_family_aggregate: Font_Family_Aggregate;
  /** fetch data from the table: "font_family" using primary key columns */
  font_family_by_pk?: Maybe<Font_Family>;
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** fetch data from the table: "media_type" */
  media_type: Array<Media_Type>;
  /** fetch aggregated fields from the table: "media_type" */
  media_type_aggregate: Media_Type_Aggregate;
  /** fetch data from the table: "media_type" using primary key columns */
  media_type_by_pk?: Maybe<Media_Type>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_domain" */
  organization_domain: Array<Organization_Domain>;
  /** fetch aggregated fields from the table: "organization_domain" */
  organization_domain_aggregate: Organization_Domain_Aggregate;
  /** fetch data from the table: "organization_domain" using primary key columns */
  organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** fetch data from the table: "organization_theme" */
  organization_theme: Array<Organization_Theme>;
  /** fetch aggregated fields from the table: "organization_theme" */
  organization_theme_aggregate: Organization_Theme_Aggregate;
  /** fetch data from the table: "organization_theme" using primary key columns */
  organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** fetch data from the table: "public_review_status" */
  public_review_status: Array<Public_Review_Status>;
  /** fetch aggregated fields from the table: "public_review_status" */
  public_review_status_aggregate: Public_Review_Status_Aggregate;
  /** fetch data from the table: "public_review_status" using primary key columns */
  public_review_status_by_pk?: Maybe<Public_Review_Status>;
  /** fetch data from the table: "publish_status" */
  publish_status: Array<Publish_Status>;
  /** fetch aggregated fields from the table: "publish_status" */
  publish_status_aggregate: Publish_Status_Aggregate;
  /** fetch data from the table: "publish_status" using primary key columns */
  publish_status_by_pk?: Maybe<Publish_Status>;
  /** fetch data from the table: "subject" */
  subject: Array<Subject>;
  /** fetch aggregated fields from the table: "subject" */
  subject_aggregate: Subject_Aggregate;
  /** fetch data from the table: "subject" using primary key columns */
  subject_by_pk?: Maybe<Subject>;
  /** fetch data from the table: "subject_type" */
  subject_type: Array<Subject_Type>;
  /** fetch aggregated fields from the table: "subject_type" */
  subject_type_aggregate: Subject_Type_Aggregate;
  /** fetch data from the table: "subject_type" using primary key columns */
  subject_type_by_pk?: Maybe<Subject_Type>;
};


export type Query_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Query_RootChannel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootChannel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Type_Order_By>>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};


export type Query_RootChannel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Type_Order_By>>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};


export type Query_RootChannel_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootClipArgs = {
  distinct_on?: InputMaybe<Array<Clip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Order_By>>;
  where?: InputMaybe<Clip_Bool_Exp>;
};


export type Query_RootClip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Order_By>>;
  where?: InputMaybe<Clip_Bool_Exp>;
};


export type Query_RootClip_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootClip_MediaArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


export type Query_RootClip_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


export type Query_RootClip_Media_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootClip_TypeArgs = {
  distinct_on?: InputMaybe<Array<Clip_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Type_Order_By>>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};


export type Query_RootClip_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Type_Order_By>>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};


export type Query_RootClip_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootFont_FamilyArgs = {
  distinct_on?: InputMaybe<Array<Font_Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Font_Family_Order_By>>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};


export type Query_RootFont_Family_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Font_Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Font_Family_Order_By>>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};


export type Query_RootFont_Family_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Query_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Query_RootLanguage_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootMedia_TypeArgs = {
  distinct_on?: InputMaybe<Array<Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Type_Order_By>>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};


export type Query_RootMedia_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Type_Order_By>>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};


export type Query_RootMedia_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganization_DomainArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Query_RootOrganization_Domain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Query_RootOrganization_Domain_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganization_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Query_RootOrganization_Theme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Query_RootOrganization_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPublic_Review_StatusArgs = {
  distinct_on?: InputMaybe<Array<Public_Review_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Public_Review_Status_Order_By>>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};


export type Query_RootPublic_Review_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Public_Review_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Public_Review_Status_Order_By>>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};


export type Query_RootPublic_Review_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPublish_StatusArgs = {
  distinct_on?: InputMaybe<Array<Publish_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publish_Status_Order_By>>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};


export type Query_RootPublish_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Publish_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publish_Status_Order_By>>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};


export type Query_RootPublish_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSubjectArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Query_RootSubject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Query_RootSubject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSubject_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subject_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Type_Order_By>>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};


export type Query_RootSubject_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Type_Order_By>>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};


export type Query_RootSubject_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** Refers to a sub-topic within the main topic (channel). Each channel can encompass numerous subjects, aiding in the organization and exploration of books, templates, and clips. */
export type Subject = {
  __typename?: 'subject';
  active: Scalars['Boolean']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  channelId: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  organizationId: Scalars['Int']['output'];
  subjectTypeId: Scalars['Int']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "subject" */
export type Subject_Aggregate = {
  __typename?: 'subject_aggregate';
  aggregate?: Maybe<Subject_Aggregate_Fields>;
  nodes: Array<Subject>;
};

export type Subject_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Subject_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Subject_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Subject_Aggregate_Bool_Exp_Count>;
};

export type Subject_Aggregate_Bool_Exp_Bool_And = {
  arguments: Subject_Select_Column_Subject_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subject_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subject_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Subject_Select_Column_Subject_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subject_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subject_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subject_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subject_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subject" */
export type Subject_Aggregate_Fields = {
  __typename?: 'subject_aggregate_fields';
  avg?: Maybe<Subject_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subject_Max_Fields>;
  min?: Maybe<Subject_Min_Fields>;
  stddev?: Maybe<Subject_Stddev_Fields>;
  stddev_pop?: Maybe<Subject_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subject_Stddev_Samp_Fields>;
  sum?: Maybe<Subject_Sum_Fields>;
  var_pop?: Maybe<Subject_Var_Pop_Fields>;
  var_samp?: Maybe<Subject_Var_Samp_Fields>;
  variance?: Maybe<Subject_Variance_Fields>;
};


/** aggregate fields of "subject" */
export type Subject_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subject_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subject" */
export type Subject_Aggregate_Order_By = {
  avg?: InputMaybe<Subject_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subject_Max_Order_By>;
  min?: InputMaybe<Subject_Min_Order_By>;
  stddev?: InputMaybe<Subject_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subject_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subject_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subject_Sum_Order_By>;
  var_pop?: InputMaybe<Subject_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subject_Var_Samp_Order_By>;
  variance?: InputMaybe<Subject_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subject" */
export type Subject_Arr_Rel_Insert_Input = {
  data: Array<Subject_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subject_On_Conflict>;
};

/** aggregate avg on columns */
export type Subject_Avg_Fields = {
  __typename?: 'subject_avg_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "subject" */
export type Subject_Avg_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subject". All fields are combined with a logical 'AND'. */
export type Subject_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Bool_Exp>>;
  _not?: InputMaybe<Subject_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  channelId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  subjectTypeId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "subject" */
export enum Subject_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubjectPkey = 'subject_pkey'
}

/** input type for incrementing numeric columns in table "subject" */
export type Subject_Inc_Input = {
  channelId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjectTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "subject" */
export type Subject_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjectTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Subject_Max_Fields = {
  __typename?: 'subject_max_fields';
  alias?: Maybe<Scalars['String']['output']>;
  channelId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  subjectTypeId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "subject" */
export type Subject_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subject_Min_Fields = {
  __typename?: 'subject_min_fields';
  alias?: Maybe<Scalars['String']['output']>;
  channelId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  subjectTypeId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "subject" */
export type Subject_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subject" */
export type Subject_Mutation_Response = {
  __typename?: 'subject_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subject>;
};

/** on_conflict condition type for table "subject" */
export type Subject_On_Conflict = {
  constraint: Subject_Constraint;
  update_columns?: Array<Subject_Update_Column>;
  where?: InputMaybe<Subject_Bool_Exp>;
};

/** Ordering options when selecting data from "subject". */
export type Subject_Order_By = {
  active?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  channelId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subject */
export type Subject_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "subject" */
export enum Subject_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  SubjectTypeId = 'subjectTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "subject_aggregate_bool_exp_bool_and_arguments_columns" columns of table "subject" */
export enum Subject_Select_Column_Subject_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "subject_aggregate_bool_exp_bool_or_arguments_columns" columns of table "subject" */
export enum Subject_Select_Column_Subject_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "subject" */
export type Subject_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjectTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Subject_Stddev_Fields = {
  __typename?: 'subject_stddev_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "subject" */
export type Subject_Stddev_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subject_Stddev_Pop_Fields = {
  __typename?: 'subject_stddev_pop_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "subject" */
export type Subject_Stddev_Pop_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subject_Stddev_Samp_Fields = {
  __typename?: 'subject_stddev_samp_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "subject" */
export type Subject_Stddev_Samp_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subject" */
export type Subject_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['Int']['input']>;
  subjectTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Subject_Sum_Fields = {
  __typename?: 'subject_sum_fields';
  channelId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  subjectTypeId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "subject" */
export type Subject_Sum_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** Master table for subject types that organizations can use to create subjects */
export type Subject_Type = {
  __typename?: 'subject_type';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "subject_type" */
export type Subject_Type_Aggregate = {
  __typename?: 'subject_type_aggregate';
  aggregate?: Maybe<Subject_Type_Aggregate_Fields>;
  nodes: Array<Subject_Type>;
};

/** aggregate fields of "subject_type" */
export type Subject_Type_Aggregate_Fields = {
  __typename?: 'subject_type_aggregate_fields';
  avg?: Maybe<Subject_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subject_Type_Max_Fields>;
  min?: Maybe<Subject_Type_Min_Fields>;
  stddev?: Maybe<Subject_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Subject_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subject_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Subject_Type_Sum_Fields>;
  var_pop?: Maybe<Subject_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Subject_Type_Var_Samp_Fields>;
  variance?: Maybe<Subject_Type_Variance_Fields>;
};


/** aggregate fields of "subject_type" */
export type Subject_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subject_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Subject_Type_Avg_Fields = {
  __typename?: 'subject_type_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "subject_type". All fields are combined with a logical 'AND'. */
export type Subject_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Type_Bool_Exp>>;
  _not?: InputMaybe<Subject_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Type_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "subject_type" */
export enum Subject_Type_Constraint {
  /** unique or primary key constraint on columns "label" */
  SubjectTypeLabelKey = 'subject_type_label_key',
  /** unique or primary key constraint on columns "id" */
  SubjectTypePkey = 'subject_type_pkey'
}

/** input type for incrementing numeric columns in table "subject_type" */
export type Subject_Type_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "subject_type" */
export type Subject_Type_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Subject_Type_Max_Fields = {
  __typename?: 'subject_type_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Subject_Type_Min_Fields = {
  __typename?: 'subject_type_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "subject_type" */
export type Subject_Type_Mutation_Response = {
  __typename?: 'subject_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subject_Type>;
};

/** on_conflict condition type for table "subject_type" */
export type Subject_Type_On_Conflict = {
  constraint: Subject_Type_Constraint;
  update_columns?: Array<Subject_Type_Update_Column>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "subject_type". */
export type Subject_Type_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subject_type */
export type Subject_Type_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "subject_type" */
export enum Subject_Type_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "subject_type" */
export type Subject_Type_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Subject_Type_Stddev_Fields = {
  __typename?: 'subject_type_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Subject_Type_Stddev_Pop_Fields = {
  __typename?: 'subject_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Subject_Type_Stddev_Samp_Fields = {
  __typename?: 'subject_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "subject_type" */
export type Subject_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Type_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Subject_Type_Sum_Fields = {
  __typename?: 'subject_type_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "subject_type" */
export enum Subject_Type_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Subject_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subject_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subject_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subject_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subject_Type_Var_Pop_Fields = {
  __typename?: 'subject_type_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Subject_Type_Var_Samp_Fields = {
  __typename?: 'subject_type_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Subject_Type_Variance_Fields = {
  __typename?: 'subject_type_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "subject" */
export enum Subject_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  ChannelId = 'channelId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  SubjectTypeId = 'subjectTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Subject_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subject_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subject_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subject_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subject_Var_Pop_Fields = {
  __typename?: 'subject_var_pop_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "subject" */
export type Subject_Var_Pop_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subject_Var_Samp_Fields = {
  __typename?: 'subject_var_samp_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "subject" */
export type Subject_Var_Samp_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subject_Variance_Fields = {
  __typename?: 'subject_variance_fields';
  channelId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  organizationId?: Maybe<Scalars['Float']['output']>;
  subjectTypeId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "subject" */
export type Subject_Variance_Order_By = {
  channelId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  subjectTypeId?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table in a streaming manner: "channel" */
  channel_stream: Array<Channel>;
  /** fetch data from the table: "channel_type" */
  channel_type: Array<Channel_Type>;
  /** fetch aggregated fields from the table: "channel_type" */
  channel_type_aggregate: Channel_Type_Aggregate;
  /** fetch data from the table: "channel_type" using primary key columns */
  channel_type_by_pk?: Maybe<Channel_Type>;
  /** fetch data from the table in a streaming manner: "channel_type" */
  channel_type_stream: Array<Channel_Type>;
  /** fetch data from the table: "clip" */
  clip: Array<Clip>;
  /** fetch aggregated fields from the table: "clip" */
  clip_aggregate: Clip_Aggregate;
  /** fetch data from the table: "clip" using primary key columns */
  clip_by_pk?: Maybe<Clip>;
  /** fetch data from the table: "clip_media" */
  clip_media: Array<Clip_Media>;
  /** fetch aggregated fields from the table: "clip_media" */
  clip_media_aggregate: Clip_Media_Aggregate;
  /** fetch data from the table: "clip_media" using primary key columns */
  clip_media_by_pk?: Maybe<Clip_Media>;
  /** fetch data from the table in a streaming manner: "clip_media" */
  clip_media_stream: Array<Clip_Media>;
  /** fetch data from the table in a streaming manner: "clip" */
  clip_stream: Array<Clip>;
  /** fetch data from the table: "clip_type" */
  clip_type: Array<Clip_Type>;
  /** fetch aggregated fields from the table: "clip_type" */
  clip_type_aggregate: Clip_Type_Aggregate;
  /** fetch data from the table: "clip_type" using primary key columns */
  clip_type_by_pk?: Maybe<Clip_Type>;
  /** fetch data from the table in a streaming manner: "clip_type" */
  clip_type_stream: Array<Clip_Type>;
  /** fetch data from the table: "font_family" */
  font_family: Array<Font_Family>;
  /** fetch aggregated fields from the table: "font_family" */
  font_family_aggregate: Font_Family_Aggregate;
  /** fetch data from the table: "font_family" using primary key columns */
  font_family_by_pk?: Maybe<Font_Family>;
  /** fetch data from the table in a streaming manner: "font_family" */
  font_family_stream: Array<Font_Family>;
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** fetch data from the table in a streaming manner: "language" */
  language_stream: Array<Language>;
  /** fetch data from the table: "media_type" */
  media_type: Array<Media_Type>;
  /** fetch aggregated fields from the table: "media_type" */
  media_type_aggregate: Media_Type_Aggregate;
  /** fetch data from the table: "media_type" using primary key columns */
  media_type_by_pk?: Maybe<Media_Type>;
  /** fetch data from the table in a streaming manner: "media_type" */
  media_type_stream: Array<Media_Type>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_domain" */
  organization_domain: Array<Organization_Domain>;
  /** fetch aggregated fields from the table: "organization_domain" */
  organization_domain_aggregate: Organization_Domain_Aggregate;
  /** fetch data from the table: "organization_domain" using primary key columns */
  organization_domain_by_pk?: Maybe<Organization_Domain>;
  /** fetch data from the table in a streaming manner: "organization_domain" */
  organization_domain_stream: Array<Organization_Domain>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "organization_theme" */
  organization_theme: Array<Organization_Theme>;
  /** fetch aggregated fields from the table: "organization_theme" */
  organization_theme_aggregate: Organization_Theme_Aggregate;
  /** fetch data from the table: "organization_theme" using primary key columns */
  organization_theme_by_pk?: Maybe<Organization_Theme>;
  /** fetch data from the table in a streaming manner: "organization_theme" */
  organization_theme_stream: Array<Organization_Theme>;
  /** fetch data from the table: "public_review_status" */
  public_review_status: Array<Public_Review_Status>;
  /** fetch aggregated fields from the table: "public_review_status" */
  public_review_status_aggregate: Public_Review_Status_Aggregate;
  /** fetch data from the table: "public_review_status" using primary key columns */
  public_review_status_by_pk?: Maybe<Public_Review_Status>;
  /** fetch data from the table in a streaming manner: "public_review_status" */
  public_review_status_stream: Array<Public_Review_Status>;
  /** fetch data from the table: "publish_status" */
  publish_status: Array<Publish_Status>;
  /** fetch aggregated fields from the table: "publish_status" */
  publish_status_aggregate: Publish_Status_Aggregate;
  /** fetch data from the table: "publish_status" using primary key columns */
  publish_status_by_pk?: Maybe<Publish_Status>;
  /** fetch data from the table in a streaming manner: "publish_status" */
  publish_status_stream: Array<Publish_Status>;
  /** fetch data from the table: "subject" */
  subject: Array<Subject>;
  /** fetch aggregated fields from the table: "subject" */
  subject_aggregate: Subject_Aggregate;
  /** fetch data from the table: "subject" using primary key columns */
  subject_by_pk?: Maybe<Subject>;
  /** fetch data from the table in a streaming manner: "subject" */
  subject_stream: Array<Subject>;
  /** fetch data from the table: "subject_type" */
  subject_type: Array<Subject_Type>;
  /** fetch aggregated fields from the table: "subject_type" */
  subject_type_aggregate: Subject_Type_Aggregate;
  /** fetch data from the table: "subject_type" using primary key columns */
  subject_type_by_pk?: Maybe<Subject_Type>;
  /** fetch data from the table in a streaming manner: "subject_type" */
  subject_type_stream: Array<Subject_Type>;
};


export type Subscription_RootChannelArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Order_By>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootChannel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<Channel_Bool_Exp>;
};


export type Subscription_RootChannel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Type_Order_By>>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};


export type Subscription_RootChannel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Channel_Type_Order_By>>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};


export type Subscription_RootChannel_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootChannel_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Channel_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Channel_Type_Bool_Exp>;
};


export type Subscription_RootClipArgs = {
  distinct_on?: InputMaybe<Array<Clip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Order_By>>;
  where?: InputMaybe<Clip_Bool_Exp>;
};


export type Subscription_RootClip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Order_By>>;
  where?: InputMaybe<Clip_Bool_Exp>;
};


export type Subscription_RootClip_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootClip_MediaArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


export type Subscription_RootClip_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Media_Order_By>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


export type Subscription_RootClip_Media_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootClip_Media_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clip_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Clip_Media_Bool_Exp>;
};


export type Subscription_RootClip_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clip_Stream_Cursor_Input>>;
  where?: InputMaybe<Clip_Bool_Exp>;
};


export type Subscription_RootClip_TypeArgs = {
  distinct_on?: InputMaybe<Array<Clip_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Type_Order_By>>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};


export type Subscription_RootClip_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clip_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clip_Type_Order_By>>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};


export type Subscription_RootClip_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootClip_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clip_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Clip_Type_Bool_Exp>;
};


export type Subscription_RootFont_FamilyArgs = {
  distinct_on?: InputMaybe<Array<Font_Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Font_Family_Order_By>>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};


export type Subscription_RootFont_Family_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Font_Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Font_Family_Order_By>>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};


export type Subscription_RootFont_Family_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootFont_Family_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Font_Family_Stream_Cursor_Input>>;
  where?: InputMaybe<Font_Family_Bool_Exp>;
};


export type Subscription_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootLanguage_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootLanguage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Language_Stream_Cursor_Input>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootMedia_TypeArgs = {
  distinct_on?: InputMaybe<Array<Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Type_Order_By>>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};


export type Subscription_RootMedia_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Type_Order_By>>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};


export type Subscription_RootMedia_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootMedia_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Type_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_DomainArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Subscription_RootOrganization_Domain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Domain_Order_By>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Subscription_RootOrganization_Domain_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_Domain_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Domain_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Domain_Bool_Exp>;
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Subscription_RootOrganization_Theme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Theme_Order_By>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Subscription_RootOrganization_Theme_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganization_Theme_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Theme_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Theme_Bool_Exp>;
};


export type Subscription_RootPublic_Review_StatusArgs = {
  distinct_on?: InputMaybe<Array<Public_Review_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Public_Review_Status_Order_By>>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};


export type Subscription_RootPublic_Review_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Public_Review_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Public_Review_Status_Order_By>>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};


export type Subscription_RootPublic_Review_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPublic_Review_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Public_Review_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Public_Review_Status_Bool_Exp>;
};


export type Subscription_RootPublish_StatusArgs = {
  distinct_on?: InputMaybe<Array<Publish_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publish_Status_Order_By>>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};


export type Subscription_RootPublish_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Publish_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publish_Status_Order_By>>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};


export type Subscription_RootPublish_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPublish_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Publish_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Publish_Status_Bool_Exp>;
};


export type Subscription_RootSubjectArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Subscription_RootSubject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Order_By>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Subscription_RootSubject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSubject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subject_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Bool_Exp>;
};


export type Subscription_RootSubject_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subject_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Type_Order_By>>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};


export type Subscription_RootSubject_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Type_Order_By>>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};


export type Subscription_RootSubject_Type_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSubject_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subject_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Type_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type GetOrganizationDomainsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOrganizationDomainsQuery = { __typename?: 'query_root', organization_by_pk?: { __typename?: 'organization', id: number, organization_domains: Array<{ __typename?: 'organization_domain', id: number, name: string }> } | null };

export type UpdateOrganizationByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  _set: Organization_Set_Input;
}>;


export type UpdateOrganizationByIdMutation = { __typename?: 'mutation_root', update_organization_by_pk?: { __typename?: 'organization', id: number } | null };


export const GetOrganizationDomainsDocument = gql`
    query getOrganizationDomains($id: Int!) {
  organization_by_pk(id: $id) {
    id
    organization_domains {
      id
      name
    }
  }
}
    `;
export const UpdateOrganizationByIdDocument = gql`
    mutation updateOrganizationById($id: Int!, $_set: organization_set_input!) {
  update_organization_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getOrganizationDomains(variables: GetOrganizationDomainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrganizationDomainsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrganizationDomainsQuery>(GetOrganizationDomainsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrganizationDomains', 'query', variables);
    },
    updateOrganizationById(variables: UpdateOrganizationByIdMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOrganizationByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOrganizationByIdMutation>(UpdateOrganizationByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOrganizationById', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;