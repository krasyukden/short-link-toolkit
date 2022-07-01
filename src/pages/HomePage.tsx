import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputField from '../components/InputField'
import MainComponent from '../components/MainComponent';
import { addInputValue } from '../redux/inputValueSlice';
import { sendLinksRequest } from '../redux/linkSlice';
import { useAppDispatch } from '../redux/redux-hook';
import { useAuth } from '../redux/use-auth';
import styles from '../components/homePage.module.css'

function HomePage() {

  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  const createShortLink = () => {
    if (inputValue.trim().length) {
      dispatch(sendLinksRequest({ inputValue }));
      dispatch(addInputValue(inputValue));

      setInputValue('');
    } else {
      alert('The input field is empty')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div >
        <Header />
        <InputField inputValue={inputValue} handleInput={setInputValue} handleSubmit={createShortLink} />
        <MainComponent />
        <Footer />
      </div>
    </div>

  )
}

export default HomePage