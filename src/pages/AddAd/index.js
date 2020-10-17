/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import PageArea from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer, PageTitle, ErroMessage } from '../../components/MainComponents';


const Page = () => {
  const api = useApi();
  const fileField = useRef();

  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState('');

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);

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

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThosandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: '.',
  });

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
              type='text'
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
             <select
                disabled={disabled}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option></option>
                {categories && categories.map(i => <option
                  key={i._id}
                  value={i._id}
                  >{i.name}</option>)}
             </select>
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Price</div>
           <div className='area--input'>
           <MaskedInput
                mask={priceMask}
                placeholder='R$ '
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
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