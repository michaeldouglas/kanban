import { Link } from "react-router-dom";
import Markdown from 'marked-react';
import styled from "styled-components";
import media from "styled-media-query";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ContainersButtons from './Buttons/ContainersButtons';

const ContainerComments = styled.div`
  text-align: right;
  font-size: 14px;
  cursor: pointer;
  color: rgb(85, 85, 199);
  ${media.lessThan("small")`
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  `}
  &:hover {
    text-decoration: underline;
  }
`;

const renderer = {
  code(snippet, lang) {
    return <SyntaxHighlighter key={this.elementId} language={lang} style={dark}>
      {snippet}
    </SyntaxHighlighter>;
  },
};

const ShowItem = ({ item, task, socket }) => {
  return (
    <>
      <p>{item.title}</p>

      <Markdown breaks={true}
        value={item?.content} renderer={renderer} />

      <ContainersButtons status={task[0]} item={item} socket={socket} />

      {task[0] !== 'done' && <ContainerComments>
        <Link
          to={`/comments/${task[1].title}/${item.id}`}
        >
          {item.comments.length > 0
            ? `Ver os comentários`
            : "Adicionar comentário"}
        </Link>
      </ContainerComments>}

    </>
  )
}

export default ShowItem;
