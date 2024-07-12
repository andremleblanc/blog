import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'posts'>, itemB: CollectionEntry<'posts'>) {
  const dateA = new Date(itemA.data.publishedDate).getTime();
  const dateB = new Date(itemB.data.publishedDate).getTime();

  return dateB - dateA;
}
