import React, { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
setData(onLoadTextarea);
  }, []);

  
  const onLoadTextarea = `
  # Header 1
  ## Header 2

  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

  <dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
  </dl>

  \`This is an example of inlinecode\`

  \`\`\`
  function name() {
    return ;
  }
  \`\`\`

    <html>
      <head>
      </head>
    </html>

  1. First item
  2. Second item
  3. Third item
  4. Forth item

  > This is an example of block quote

  ![Philadelphia's Magic Gardens. This place was so cool!](/assets/images/philly-magic-gardens.jpg "Philadelphia's Magic Gardens")

  I just love __bold text__.

  <b> bold Html </b>
  `;

  console.log(data);
  return (
    <div className="App container">
      <div>
        <textarea id="editor"  placeholder="Enter markdown" onChange={(val) => setData(val.target.value)}>{onLoadTextarea}</textarea>
        
      </div>
      <div>
        <h1>Markdown Output</h1>
        <div id="preview">
        <ReactMarkdown source={data}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
