import { useState } from 'react';

function FormSearch({ onSubmit }) {
  const [searchWord, setSearchWord] = useState('batman');
  const onChangeHandel = e => {
    // console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(searchWord);
        }}
      >
        <label>
          <input
            type="text"
            placeholder="Write find word"
            onChange={onChangeHandel}
            value={searchWord}
          />
        </label>
        <button type="submit">Find</button>
      </form>
    </>
  );
}

export default FormSearch;
