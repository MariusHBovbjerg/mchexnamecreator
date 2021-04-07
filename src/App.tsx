import React, { useState } from 'react';
import { CheckBox } from './components/CheckBox/CheckBox';
import { GradientProvider } from './components/Gradient/GradientProvider';
import { NameInput } from './components/NameInput/NameInput';
import { OutputBox } from './components/OutputBox/OutputBox';

function App() {

  let [coloured, setColoured] = useState(false)
  let [underlined, setUnderlined] = useState(false)
  let [bold, setBold] = useState(false)
  let [italicized, setItalicized] = useState(false)
  let [strikethrough, setStrikethrough] = useState(false)
  let [name, setName] = useState("");

  let [colour, setColour] = useState([""])
  let [Amount, setAmount] = useState(0);

  return (
    <div className="App">
      <header>

        <div>
          <NameInput name={name} setName={setName} />
        </div>


        <div>
          <CheckBox 
          checkBoxName="Colours" 
          checked={coloured} 
          setChecked={setColoured}
          />

          <CheckBox 
          checkBoxName="Underline" 
          checked={underlined} 
          setChecked={setUnderlined}
          />

          <CheckBox 
          checkBoxName="Bold" 
          checked={bold} 
          setChecked={setBold}
          />

          <CheckBox 
          checkBoxName="Italics" 
          checked={italicized} 
          setChecked={setItalicized}
          />

          <CheckBox 
          checkBoxName="Strikethrough"
           checked={strikethrough} 
           setChecked={setStrikethrough}
           />
        </div>

        <div style={{display:'flex',flexDirection:'row'}}>
          <GradientProvider IsChecked={coloured} colorCodes={colour} setColours={setColour} Amount={Amount} setAmount={setAmount}/>
        </div>


        <div>
          <OutputBox 
          coloured={coloured}
          colours={colour}
          name={name}
          amount={Amount}
          underlined={underlined}
          bold={bold}
          italicized={italicized}
          strikethrough={strikethrough}/>
        </div>
      </header>
    </div>
  );
}

export default App;
