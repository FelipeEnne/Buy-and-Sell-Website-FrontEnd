import React, { useState, useEffect } from 'react';
import PageArea from './styled';

import useApi from '../../helpers/BSAPI';
import { PageContainer, PageTitle, ErroMessage } from '../../components/MainComponents';
import { doLogin } from '../../helpers/authHandler';

const Page = () => {
  const api = useApi();

  const [name, setName] = useState('');
  const [stateLoc, setStateLoc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');

    if (password !== confirmPassword) {
      setError('They are not the same passwords');
      setDisabled(false);
      return;
    }


    const json = await api.register(name, email, password, stateLoc);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = '/';
    }

    setDisabled(false);
  };

  return (
  <PageContainer>
    <PageTitle>Sign</PageTitle>
    <PageArea>
      {error
        && <ErroMessage>{error}</ErroMessage>
      }
      <form onSubmit={handleSubmit}>
        <label className='area'>
           <div className='area--title'>Name</div>
           <div className='area--input'>
             <input
              type='text'
              disabled={disabled}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>State</div>
           <div className='area--input'>
            <select value={stateLoc} onChange={e => setStateLoc(e.target.value)} required>
              <option></option>

              {stateList.map((i, k) => <option key={k} value={i.id}>
                  {i.name}
                </option>)}

            </select>
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>E-mail</div>
           <div className='area--input'>
             <input
              type='email'
              disabled={disabled}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Password</div>
           <div className='area--input'>
             <input
              type='password'
              disabled={disabled}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'>Confirm Password</div>
           <div className='area--input'>
             <input
              type='password'
              disabled={disabled}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
           </div>
        </label>
        <label className='area'>
           <div className='area--title'></div>
           <div className='area--input'>
             <button disabled={disabled} >Sign</button>
           </div>
        </label>
      </form>
    </PageArea>
  </PageContainer>
  );
};


export default Page;