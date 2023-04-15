import { Input } from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

export const AddMovies = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputUrl, setInputUrl] = useState("");
  function getInputValue(e) {
    setInputText(e.target.value);
  }
  //   console.log(inputText);
  function getInputNumber(e) {
    setInputNumber(e.target.value);
  }
  function getInputUrl(e) {
    setInputUrl(e.target.value);
  }

  function submitHandler() {
    const newMovie = {
      titile: inputText,
      price: inputNumber,
      img: inputUrl,
    };
    onSubmit(newMovie);
  }
  return (
    <div style={{ height: "250px" }} onSubmit={submitHandler}>
      <div className="container">
        <div className="containertwo">
          <Input
            id="1"
            children="Movies Name"
            type="text"
            placeholder="text"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            id="3"
            children="Url"
            type="url"
            placeholder="url"
            value={inputUrl}
            onChange={getInputUrl}
          />
        </div>
        <Input
          id="2"
          children="Rating"
          type="number"
          placeholder="number"
          value={inputNumber}
          onChange={getInputNumber}
        />
      </div>
      <div className="button">
        <Button userTitle={"Отмена"} onClick={onClick} />
        <Button userTitle={"Добавить"} onClick={onClick} />
      </div>
    </div>
  );
};
