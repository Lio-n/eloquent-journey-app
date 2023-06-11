import { ArticleThumbnailInfo } from "@/models/article.model";
import { Link } from "react-router-dom";
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
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 697px) {
    li {
      /* max-height: 13rem; */
      width: initial;
    }
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
    & {
      width: 20rem;
      height: 24rem;
    }
  }

  .article_thumbnail {
    max-height: 13rem;

    margin-bottom: var(--typography-spacing-vertical);
  }

  .article_title {
    margin-bottom: 1rem;
    word-break: break-word;
  }

  .article_title,
  .article_description {
    width: fit-content;

    a {
      text-decoration: underline;
    }
  }

  .article_date {
    text-align: end;
    width: 100%;
    display: block;
  }
`;

const ListOfArticles = ({ articles }: { articles: ArticleThumbnailInfo[] }) => {
  return (
    <Ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`article/${article.id}`}>
            <Card>
              <img className="article_thumbnail" src={article.thumbnail.url} alt={article.thumbnail.name} />
              <h4 className="article_title" dangerouslySetInnerHTML={{ __html: article.title }} />
              <p className="article_description" dangerouslySetInnerHTML={{ __html: article.description }} />
              <small className="article_date">{article.createdAt}</small>
            </Card>
          </Link>
        </li>
      ))}
    </Ul>
  );
};

export default ListOfArticles;
