import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PageArea from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/patials/AdItem';

let timer;

const Page = () => {
  const api = useApi();
  const history = useHistory();
  const useQueryString = () => new URLSearchParams(useLocation().search);

  const query = useQueryString();

  const [q, setQ] = useState(query.get('q') !== null ? query.get('q') : '');
  const [cat, setCat] = useState(query.get('cat') !== null ? query.get('cat') : '');
  const [getState, setGetState] = useState(query.get('state') !== null ? query.get('state') : '');

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  const [resultOpacity, setResultOpacity] = useState(1);

  const getAdsList = async () => {
    const json = await api.getAds({
      sort: 'desc',
      limit: 9,
      q,
      cat,
      state: getState,
    });
    setAdList(json.ads);
    setResultOpacity(1);
  };

  useEffect(() => {
    const queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    }
    if (cat) {
      queryString.push(`cat=${cat}`);
    }
    if (getState) {
      queryString.push(`state=${getState}`);
    }

    history.replace({
      search: `?${queryString.join('&')}`,
    });

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(getAdsList, 1500);
    setResultOpacity(0.3);
  }, [q, cat, getState]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await api.getStates();
      setStateList(sList);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const sList = await api.getCategories();
      setCategories(sList);
    };
    getCategories();
  }, []);


  return (
    <PageContainer>
      <PageArea>
        <div className='leftSide'>
          <form method='GET'>
            <input
              type='text'
              name='q'
              value={q}
              placeholder='What are you looking for?'
              onChange={(e => setQ(e.target.value))}
            />

            <div className='filterName'>Estado:</div>
            <select name='state' value={getState} onChange={(e => setGetState(e.target.value))}>
              <option></option>
              {stateList.map((i, k) => (
                <option key={k} value={i.name}>{i.name}</option>
              ))}
            </select>

            <div className='filterName'>Categoria:</div>
            <ul>
                {categories.map((i, k) => (
                  <li
                    key={k}
                    className={cat === i.slug ? 'categoryItem active' : 'categoryItem'}
                    onClick={(e => setCat(i.slug))}
                  >
                    <img src={i.img} alt=''/>
                    <span>{i.name}</span>
                  </li>
                ))}
            </ul>
          </form>
        </div>
        <div className='rightSide'>
          <h2>Resultados</h2>
          <div className='list' style={{ opacity: resultOpacity }}>
            {adList.map((i, k) => <AdItem key={k} data={i} />)}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};


export default Page;