import { useEffect, useState } from "react";
// @ts-ignore
import editorjsHTML from "editorjs-html";
import styled from "styled-components";
import ArticleInfo from "@/models/article.model";
import { getArticleByIdApi } from "@/services/public/article.service";
import { useNavigate, useParams } from "react-router-dom";
import { OutputBlockData } from "@editorjs/editorjs";
import ProgressBar from "@/ui/ProgressBar";

const parseJsonToHtml = (jsonData: { blocks: OutputBlockData[] }) => {
  const edjsParser = editorjsHTML();
  const edjsParser_html = edjsParser.parse(jsonData);

  const modifiedHtml = edjsParser_html.join("");

  return modifiedHtml;
};

const Root = styled.div`
  margin: 0 auto;
  padding: 3rem 1rem;
  max-width: 48rem;
  display: grid;

  ul,
  ol {
    margin-left: 3rem;
  }

  li {
    list-style-type: unset !important;
    margin-bottom: 0.5rem;
  }

  h1 {
    text-align: center;
  }

  img {
    border-radius: 5px;
    margin: 1rem 0;
    width: 100%;
    max-height: 20rem;
    object-fit: contain;
  }

  .article_date {
    text-align: end;
    margin-top: 2rem;
  }
`;

const ArticleById = () => {
  const [articleHtml, setArticleHtml] = useState<string | null>(null);
  const { article_id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleInfo>();

  useEffect(() => {
    if (article_id) {
      const dataApi = getArticleByIdApi({ id: parseInt(article_id), hasToken: true });

      if (!dataApi) navigate("/");

      const articleAsHtml = parseJsonToHtml({ blocks: dataApi.blocks });

      setArticleHtml(articleAsHtml);
      setArticle(dataApi);
    }
  }, [article_id]);

  return (
    <Root>
      <ProgressBar />

      {articleHtml && <div style={{ display: "grid", gap: "1rem" }} dangerouslySetInnerHTML={{ __html: articleHtml }} />}
      {article && <h3 className="article_date">{article.createdAt}</h3>}
    </Root>
  );
};

export default ArticleById;
