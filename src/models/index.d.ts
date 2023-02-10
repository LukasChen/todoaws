import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type EagerS3Object = {
  readonly region: string;
  readonly bucket: string;
  readonly key: string;
}

type LazyS3Object = {
  readonly region: string;
  readonly bucket: string;
  readonly key: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerGPS = {
  readonly latitude: string;
  readonly longitude: string;
  readonly altitude: number;
}

type LazyGPS = {
  readonly latitude: string;
  readonly longitude: string;
  readonly altitude: number;
}

export declare type GPS = LazyLoading extends LazyLoadingDisabled ? EagerGPS : LazyGPS

export declare const GPS: (new (init: ModelInit<GPS>) => GPS)



type PhotoMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerAlbum = {
  readonly id: string;
  readonly owner: string;
  readonly ownerId: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly photos?: (Photo | null)[] | null;
}

type LazyAlbum = {
  readonly id: string;
  readonly owner: string;
  readonly ownerId: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly photos: AsyncCollection<Photo>;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

type EagerPhoto = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly UpdatedAt?: string | null;
  readonly album?: Album | null;
  readonly fullsize: S3Object;
  readonly thumbnail?: S3Object | null;
  readonly contentType?: string | null;
  readonly gps?: GPS | null;
  readonly height?: number | null;
  readonly width?: number | null;
  readonly size?: number | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly UpdatedAt?: string | null;
  readonly album: AsyncItem<Album | undefined>;
  readonly fullsize: S3Object;
  readonly thumbnail?: S3Object | null;
  readonly contentType?: string | null;
  readonly gps?: GPS | null;
  readonly height?: number | null;
  readonly width?: number | null;
  readonly size?: number | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo, PhotoMetaData>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo, PhotoMetaData>) => MutableModel<Photo, PhotoMetaData> | void): Photo;
}