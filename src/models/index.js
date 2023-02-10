// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Album, Photo, S3Object, GPS } = initSchema(schema);

export {
  Album,
  Photo,
  S3Object,
  GPS
};