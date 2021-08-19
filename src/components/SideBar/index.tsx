import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Recomendados pra você"
            elements={[
              <FollowSuggestion name="Mariana Ramos" nickname="@marii_dr" />,
              <FollowSuggestion name="Gabriel Furlan" nickname="@gafurlas" />,
              <FollowSuggestion name="Matheus Cardoso" nickname="@rei.delas" />,
            ]}
          />

          <List
            title="Recomendados pra você"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Recomendados pra você"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Recomendados pra você"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Recomendados pra você"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
