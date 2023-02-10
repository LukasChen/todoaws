/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onCreateAlbum(filter: $filter, owner: $owner) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      photos {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onUpdateAlbum(filter: $filter, owner: $owner) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      photos {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onDeleteAlbum(filter: $filter, owner: $owner) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      photos {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto(
    $filter: ModelSubscriptionPhotoFilterInput
    $owner: String
  ) {
    onCreatePhoto(filter: $filter, owner: $owner) {
      id
      createdAt
      UpdatedAt
      albumID
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto(
    $filter: ModelSubscriptionPhotoFilterInput
    $owner: String
  ) {
    onUpdatePhoto(filter: $filter, owner: $owner) {
      id
      createdAt
      UpdatedAt
      albumID
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto(
    $filter: ModelSubscriptionPhotoFilterInput
    $owner: String
  ) {
    onDeletePhoto(filter: $filter, owner: $owner) {
      id
      createdAt
      UpdatedAt
      albumID
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
