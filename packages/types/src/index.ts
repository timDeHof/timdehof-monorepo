export type Blog = {
  id: string;
  title: string;
  content: string;
}

export interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export interface PostPageProps {
  params: {
    slug: string[];
  };
}
