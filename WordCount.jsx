// import React from "react";

// class WordCount extends React.Component {
//   state = { value: '', length: 0 }

//   render() {
//     console.log(this.state.length)

//     return (
//       <div>
//         <h1>Word Count</h1>
//         <textarea value={this.state.value} onChange={(e) => {
//           this.setState({ value: e.target.value })
//           this.setState({ length: e.target.value.split(' ').length })
//         }}></textarea>
//       </div>
//     )
//   }
// }

// export default WordCount


import { useState, useEffect } from 'react';

function WordCount() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);

  return (
    <div className='container'>
      <h2>Word Count</h2>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='What is on your mind?'
        ></textarea>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
          <p className='char-count'>
            Character Count (Including Whitespaces): {charCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WordCount;