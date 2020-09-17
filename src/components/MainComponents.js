import styled from 'styled-components';

const Template = styled.div``;

const PageContainer = styled.div`
  max-width:1000px;
  margin:auto;
`;

const PageTitle = styled.h1`
  font-size:27px;
`;

const PageBody = styled.div``;

const ErroMessage = styled.div`
  margin:10px 0;
  background-color:#FFCACA;
  color:#000;
  border:2px solid #FF0000;
  padding:10px;
`;

export {
  Template, PageContainer, PageTitle, PageBody, ErroMessage,
};