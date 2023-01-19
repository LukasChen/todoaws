import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPosts = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly publish_date?: string | null;
  readonly authorsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosts = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly publish_date?: string | null;
  readonly authorsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts, PostsMetaData>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

type EagerAuthors = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthors = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly Posts: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Authors = LazyLoading extends LazyLoadingDisabled ? EagerAuthors : LazyAuthors

export declare const Authors: (new (init: ModelInit<Authors, AuthorsMetaData>) => Authors) & {
  copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}