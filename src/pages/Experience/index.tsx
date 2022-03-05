import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import catchFashion from "./catch-fashion.md";

const data = [
  {
    id: "catch-fashion",
    title: "스마일벤처스 커리어 상세 페이지 입니다.",
    detail: catchFashion,
  },
];

const detailMap = new Map(
  data.map(({ id, title, detail }) => [id, { title, detail }])
);

export function Experience() {
  const { id } = useParams<{ id: string }>();
  const { title, detail } = React.useMemo(() => detailMap.get(id)!, [id]);
  return (
    <Container>
      <p className="title">{title}</p>
      <Markdown>{detail}</Markdown>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    margin: 1.5rem 0 2.5rem;
  }
`;

const Markdown = styled(ReactMarkdown)`
  a {
    color: var(--green2);
    font-weight: 500;
    transition: color 0.1s;

    &:hover {
      color: var(--green3);
    }
  }

  ul {
    margin: 0.8rem 0;

    > li {
      margin: 0.4rem 0;
    }
  }
`;