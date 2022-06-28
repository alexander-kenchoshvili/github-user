import React, { useState } from 'react';
import Header from '../UI/Header';
import SearchBar from '../UI/SearchBar';
import UserCard from '../UI/UserCard';

function Controller() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [url, setUrl] = useState('');
  const [inputValue, setInputValue] = useState();
  const [card, setCard] = useState(false);
  const [errorRender, setErrorRender] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => {
        if (!response.ok) {
          setErrorRender(true);
          setCard(false);
          throw new Error(`User not Found ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setName(data.login);
        setAvatar(data.avatar_url);
        setUrl(data.html_url);
        if (data) {
          setCard(true)
          setErrorRender(false)
        }
      })
    .catch((err)=>console.log(err.message))
  }
  return (
    <div>
      <Header />
      <SearchBar
        onInputChange={handleInputValue}
        onSubmit={handleSubmit}
      />
      <UserCard
        name={name}
        avatar={avatar}
        url={url}
        inputvalue={inputValue}
        card={card}
        error={errorRender}
      />
    </div>
  )
}

export default Controller