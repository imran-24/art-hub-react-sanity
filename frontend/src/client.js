// connect frontend with sanity database 

// yarn add @sanity/client
// yarn add @sanity/image-url

//   REACT_APP_SANITY_PROJECT_ID (projectId is found in the project manage page )
//   REACT_APP_SANITY_TOKEN (projectToken is found in the project manage page )

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-11-10',
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

