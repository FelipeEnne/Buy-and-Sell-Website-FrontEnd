import React, { useState } from 'react';
import { PageArea, SearchArea } from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();

  return (
  <>
    <SearchArea>
      <PageContainer>
        <div className='searchBox'>
          <form method='GET' action='/ads'>
            <input type='text' name='q' placeholder='What are you looking for?'/>
            <select name='state'>

            </select>
            <button>Search</button>
          </form>
        </div>
        <div className='categoryList'>

        </div>
      </PageContainer>
    </SearchArea>
    <PageContainer>
      <PageArea>
        ...
      </PageArea>
    </PageContainer>
  </>
  );
};


export default Page;