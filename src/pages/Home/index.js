import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/patials/AdItem';

const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

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

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
  <>
    <SearchArea>
      <PageContainer>
        <div className='searchBox'>
          <form method='GET' action='/ads'>
            <input type='text' name='q' placeholder='What are you looking for?'/>
            <select name='state'>
              { stateList.map((i, k) => <option key={ k } value={ i.name }> { i.name } </option>)}
            </select>
            <button>Search</button>
          </form>
        </div>
        <div className='categoryList'>
            { categories.map((i, k) => <Link key={k} to={`/ads?cat=${i.slug}`} className='categoryItem'>
                                          <img src={i.img} alt='' />
                                          <span>{ i.name }</span>
                                        </Link>)}
        </div>
      </PageContainer>
    </SearchArea>
    <PageContainer>
      <PageArea>
        <h2>Recent Announcements</h2>
        <div className='list'>
          {adList.map((i, k) => <AdItem key={k} data={i}></AdItem>)}
        <Link to='/ads' className='seeAllLink'>See All</Link>
        Habituellement, il y vit un mur fortifié de tours. Fiers d'avoir pu s'ossifier.
        Inutile d'essayer de crâner ! Oserait-il m'accuser de parjure, vous qui n'êtes pas fou
        ? Improvisation de leur salle à manger d'abord, en voyant les regards de mon père. Élevant
        l'organe encore palpitant au-dessus de la mer seule, ou qu'une société s'abîme au vent
        qui passe m'apporte les images d'animaux, une poitrine trouée, un bras.
        Rends-moi heureux et je souhaitais que le sommeil. Marquis, je dois en convenir,
        jamais il ne l'eût perdue.
        </div>
      </PageArea>
    </PageContainer>
  </>
  );
};


export default Page;