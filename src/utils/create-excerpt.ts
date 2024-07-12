import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export const createExcerpt = (body: string) => {
  return parser
    .render(body)
    .split('\n')
    .slice(0, 6)
    .map((str: string) => {
      return str.replace(/<\/?[^>]+(>|$)/g, '').split('\n');
    })
    .flat()
    .join(' ')
    .substring(0, 280)
    .trimEnd();
};
