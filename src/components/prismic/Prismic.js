import { previewCookie } from 'prismic-javascript';
import PrismicConfig from './prismic-configuration.json';

export const PREVIEW_COOKIE = previewCookie;

export const linkResolver = (doc) => {
  if (doc.type === 'homepage') {
    return '/';
  }
  if (doc.type === 'products') {
    return '/products';
  }
  if (doc.type === 'product') {
    return `/products/${doc.uid}`;
  }
  if (doc.type === 'blog_home') {
    return '/blog';
  }
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`;
  }
  return '/';
};

export const Setup = Object.assign({}, {
  endpoint: PrismicConfig.endpoint,
  linkResolver,
}, PrismicConfig.accessToken ? { apiOptions: { accessToken: PrismicConfig.accessToken } } : {});
