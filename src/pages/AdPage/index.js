import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import {
  PageArea, Fake, OthersArea, BreadChumb,
} from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/patials/AdItem';

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  useEffect(() => {
    const getAdInfo = async (id) => {
      const json = await api.getAd(id, true);
      setAdInfo(json);
      setLoading(false);
    };

    getAdInfo(id);
  }, []);


  const formatDate = (date) => {
    const cDate = new Date(date);

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const cDay = cDate.getDate();
    const cMonth = cDate.getMonth();
    const cYear = cDate.getFullYear();

    return `${cDay} de ${months[cMonth]} de ${cYear}`;
  };

  return (
  <PageContainer>
    {adInfo.category && <BreadChumb>
      <Link to='/'>Home</Link>
      /
      <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
      /
      <Link to={`/ads?state=${adInfo.stateName}&car${adInfo.category.slug}`}>{adInfo.category.name}</Link>
      / {adInfo.title}
    </BreadChumb>}
    <PageArea>
      <div className='leftSide'>
        <div className='box'>
          <div className='adImage'>
            {loading && <Fake height={300} />}
            {adInfo.images && <Slide>
                {adInfo.images.map((img, k) => <div key={k} className="each-fade">
                    <div className="image-container">
                      <img src={img} />
                    </div>
                  </div>)}
              </Slide>}
          </div>
          <div className='adInfo'>
            <div className='adName'>
              {loading && <Fake height={20} />}
              {adInfo.title && <h2>{adInfo.title}</h2>}
              {adInfo.dateCreated && <small>{formatDate(adInfo.dateCreated)}</small>}
            </div>
            <div className='adDescription'>
              {loading && <Fake height={100}/>}
              {adInfo.description}
              <hr/>
              {adInfo.views && <small>Views {adInfo.views}</small>}
            </div>
          </div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='box box--padding'>
          {loading && <Fake height={20} />}
          {adInfo.priceNegotiable && 'Negotiable'}
          {!adInfo.priceNegotiable && adInfo.price && <div className='price'>
            Price: <span>${adInfo.price}</span>
          </div>}
        </div>
        {loading && <Fake height={50} />}
        {adInfo.userInfo && <div>
          <a href={`mailto:${adInfo.userInfo.email}`} target='_blank' className='contactSellerLink'>Contact Seller</a>
          <div className='createdby box box--padding'>
            <strong>{adInfo.userInfo.name}</strong>
            <small>E-mail: {adInfo.userInfo.email}</small>
            <small>State: {adInfo.stateName}</small>
          </div>
        </div>}
      </div>
    </PageArea>
    <OthersArea>
      {adInfo.others && <>
          <h2>Other offers</h2>
          <div className='list'>
            {adInfo.others.map((i, k) => <AdItem key={k} data={i}/>)}
          </div>
        </>}
    </OthersArea>
  </PageContainer>
  );
};


export default Page;