import * as Contentful from 'contentful';

export interface TypeBlogPostFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  heroImage: Contentful.Asset;
  description: Contentful.EntryFields.Text;
  body: Contentful.EntryFields.Text;
  author?: Contentful.Entry<Record<string, any>>;
  publishDate: Contentful.EntryFields.Date;
  tags?: ('general' | 'javascript' | 'static-sites')[];
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;

export interface TypePersonFields {
  name: Contentful.EntryFields.Symbol;
  title?: Contentful.EntryFields.Symbol;
  company?: Contentful.EntryFields.Symbol;
  shortBio: Contentful.EntryFields.Text;
  email?: Contentful.EntryFields.Symbol;
  phone?: Contentful.EntryFields.Symbol;
  facebook?: Contentful.EntryFields.Symbol;
  twitter?: Contentful.EntryFields.Symbol;
  github?: Contentful.EntryFields.Symbol;
  image?: Contentful.Asset;
}

export type TypePerson = Contentful.Entry<TypePersonFields>;

export interface TypeProjectsFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  heroImage: Contentful.Asset;
  description: Contentful.EntryFields.Text;
  body: Contentful.EntryFields.Text;
  author?: Contentful.Entry<Record<string, any>>;
  startDate: Contentful.EntryFields.Date;
  endDate?: Contentful.EntryFields.Date;
  tags?: Contentful.EntryFields.Symbol[];
  repoUrl?: Contentful.EntryFields.Symbol;
  demoUrl?: Contentful.EntryFields.Symbol;
}

export type TypeProjects = Contentful.Entry<TypeProjectsFields>;
