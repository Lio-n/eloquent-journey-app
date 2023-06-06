import ArticleInfo from "@/models/article.model";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  li {
    list-style-type: none;
  }
`;

const Card = styled.article`
  padding: 0.5rem;
  cursor: pointer;
  margin: 0;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 697px) {
    .article_thumbnail {
      max-height: 22rem;
    }
    & {
      max-width: 20rem;
    }
  }

  .article_thumbnail {
    max-height: 22rem;

    margin-bottom: var(--typography-spacing-vertical);
  }

  .article_title {
    margin-bottom: 1rem;
  }

  .article_title,
  .article_description {
    width: fit-content;
  }

  .article_date {
    text-align: end;
    width: 100%;
    display: block;
  }
`;

const ListOfArticles = ({ articles }: { articles: ArticleInfo[] }) => {
  return (
    <Ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Card>
            <img className="article_thumbnail" src={article.thumbnail.url} alt={article.thumbnail.name} />
            <h4 className="article_title" dangerouslySetInnerHTML={{ __html: article.title }} />
            <p className="article_description" dangerouslySetInnerHTML={{ __html: article.description }} />
            <small className="article_date">{article.createdAt}</small>
          </Card>
        </li>
      ))}
    </Ul>
  );
};

export default ListOfArticles;
