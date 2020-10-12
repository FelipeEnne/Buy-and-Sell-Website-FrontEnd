import React, { useState, useRef } from 'react';
import PageArea from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer, PageTitle, ErroMessage } from '../../components/MainComponents';
import { doLogin } from '../../helpers/authHandler';

const Page = () => {
  const api = useApi();
  const fileField = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState('');

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');
    // eslint-disable-next-line spaced-comment
    /*const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }*/

    setDisabled(false);
  };

  return (
  <PageContainer>
    <PageTitle>Post ad</PageTitle>
    <PageArea>
      {error
        && <ErroMessage>{error}</ErroMessage>
      }
      <form onSubmit={handleSubmit}>
        <label className='area'>
           <div className='area--title'>Title</div>
           <div className='area--input'>
             <input
              type='texy'
              disabled={disabled}
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Category</div>
           <div className='area--input'>
             <select>

             </select>
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Price</div>
           <div className='area--input'>
            ...
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Negotiable</div>
           <div className='area--input'>
            <input
              type='checkbox'
              disabled={disabled}
              checked={priceNegotiable}
              onChange={e => setPriceNegotiable(!priceNegotiable)}
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Description</div>
           <div className='area--input'>
            <textarea
              disabled={disabled}
              value={desc}
              onChange={ e => setDesc(e.target.value) }
            ></textarea>
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Image</div>
           <div className='area--input'>
           <input
              type='file'
              disabled={disabled}
              multiple
              ref={fileField}
              checked={priceNegotiable}
              onChange={e => setPriceNegotiable(!priceNegotiable)}
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'></div>
           <div className='area--input'>
             <button disabled={disabled} >Add ad</button>
           </div>
        </label>
      </form>
    </PageArea>
  </PageContainer>
  );
};


export default Page;