import { url } from 'inspector'
import React from 'react'
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { InputValue } from '../redux/inputValueSlice';
import { ILinks, toggleCopyComplete } from '../redux/linkSlice';
import { useAppDispatch } from '../redux/redux-hook';
import { RootState } from "../redux/store";
import styles from './inputField.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey } from '@mui/material/colors';

interface InputProps {
  inputValue: string,
  handleInput: (targetValue: string/* e: React.ChangeEvent<HTMLInputElement> */) => void;
  handleSubmit: () => void;

}

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

const InputField: FC<InputProps> = ({ inputValue, handleInput, handleSubmit }) => {

  const linkItems = useSelector((state: RootState) => state.links.links)
  const inputItems = useSelector((state: RootState) => state.inputValues.inputValues)

  const dispatch = useAppDispatch();

  return (
    <div className={styles.inputFieldWrapper}>
      <div className={styles.inputField}>
        <label className={styles.labelField}>

          <input type='text' placeholder='Shorten a link here...' value={inputValue} onChange={e => {
            let targetValue = e.target.value;
            handleInput(targetValue)
          }} />
          <Button /* className={styles.buttonShort} */ variant="contained" sx={{ height: 55, width: 150, marginTop: -1 }} onClick={handleSubmit}>Shorten it!</Button>
        </label>
      </div>

      <div className={styles.linkWrapper}>
        <div>{inputItems.map((inputItem: InputValue) => {
          return <div key={inputItem.id} className={styles.inputItem}>{inputItem.inputValue}</div>
        })}</div>
        <div className={styles.buttonLinkWrap}>
          {linkItems.map((linkItem: ILinks) => {
            return <div className={styles.buttonLink}>
              <div key={linkItem.id} className={styles.linkItem}>
                {linkItem.link}
              </div>
              {linkItem.copied ?
                <Button variant="contained" sx={{ height: 30, width: 100, marginTop: 1 }} color="secondary" onClick={() => {
                  navigator.clipboard.writeText(linkItem.link);
                  dispatch(toggleCopyComplete(linkItem.id));

                }} >Copied! </Button> :
                <Button variant="contained" sx={{ height: 30, width: 100, marginTop: 1 }} onClick={() => {
                  navigator.clipboard.writeText(linkItem.link);
                  dispatch(toggleCopyComplete(linkItem.id));

                }} >Copy </Button>}
            </div>
          }
          )}
        </div>
      </div>
   
    </div>
  )
}

export default InputField