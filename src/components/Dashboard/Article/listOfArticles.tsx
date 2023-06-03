import { useEffect, useState } from "react";
import { getListOfArticlesApi } from "@/services/private/article.service";
import styled from "styled-components";
import { ArticleListInfo } from "@/models/article.model";
import { useNavigate } from "react-router-dom";
import Pagination from "@/ui/Pagination";

const Figure = styled.figure`
  width: 100%;

  .--private {
    color: var(--range-thumb-active-color);
  }

  .--public {
  }

  tbody {
    tr {
      cursor: pointer;

      td,
      th {
        max-width: 20rem;
      }

      &:hover {
        td,
        th {
          background-color: var(--table-row-stripped-background-color);
        }
      }
    }
  }
`;

const ListItems = ({ articles }: { articles: ArticleListInfo[] }) => {
  const navigate = useNavigate();

  return (
    <>
      {articles.map((article, index) => (
        <tr key={index} onClick={() => navigate(`/dashboard/articles/${article.id}/edit`, { replace: true })}>
          <th scope="row">{article.id}</th>
          <td>
            <strong>{article.title}</strong>
          </td>
          <td className={article.isPrivate ? "--private" : "--public"}>
            <strong>{article.isPrivate ? "Private" : "Public"}</strong>
          </td>
          <td>{article.createdAt}</td>
        </tr>
      ))}
    </>
  );
};

const ListOfArticles = () => {
  const [articles, setArticles] = useState<QueryResponse<ArticleListInfo>>({ hits: [], pagination: { total: 0, limit: 0, offset: 0 } });

  useEffect(() => {
    const query: QueryOptions = { limit: 7, offset: 0, order: "desc" };

    const res = getListOfArticlesApi(query);

    setArticles(res);
  }, []);

  const handleLoadDataFromPagination = (newData: QueryResponse<ArticleListInfo>) => setArticles(newData);

  return (
    <>
      <Figure>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">State</th>
              <th scope="col">CreatedAt</th>
            </tr>
          </thead>

          <tbody>{articles.hits.length > 0 && <ListItems articles={articles.hits} />}</tbody>

          {articles.hits.length > 0 && (
            <tfoot>
              <tr>
                <th scope="col"></th>
                <td scope="col"></td>
                <td scope="col"></td>
                <td scope="col">
                  <div>
                    <Pagination setNewData={handleLoadDataFromPagination} fetcher={getListOfArticlesApi} />
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </Figure>
    </>
  );
};

export default ListOfArticles;
