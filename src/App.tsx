import React, { useState } from 'react';
import { CheckBox } from './components/CheckBox/CheckBox';
import { Gradient } from './components/Gradient/Gradient';
import { NameInput } from './components/NameInput/NameInput';
import { OutputBox } from './components/OutputBox/OutputBox';

function App() {

  let [coloured, setColoured] = useState(false)
  let [underlined, setUnderlined] = useState(false)
  let [bold, setBold] = useState(false)
  let [italicized, setItalicized] = useState(false)
  let [strikethrough, setStrikethrough] = useState(false)
  let [name, setName] = useState("");

  let [colours, setColour] = useState(["",""])


  return (
    <div className="App">
      <header>
        <div>
        <NameInput name={name} setName={setName} />
        </div>
        <div>
        <CheckBox checkBoxName="Colour" checked={coloured} setChecked={setColoured}/>
        <CheckBox checkBoxName="Underline" checked={underlined} setChecked={setUnderlined}/>
        <CheckBox checkBoxName="Bold" checked={bold} setChecked={setBold}/>
        <CheckBox checkBoxName="Italics" checked={italicized} setChecked={setItalicized}/>
        <CheckBox checkBoxName="Strikethrough" checked={strikethrough} setChecked={setStrikethrough}/>
        </div>
        <div>

        <Gradient colorCodes={colours} setColours={setColour}/>
      
        
        <p>{colours[0]}</p>
        <p>{colours[1]}</p>
        <p>{colours[2]}</p>
         
        {/*
        
        Gradient kode her lol
        
        */}

        </div>
        <div>
        <OutputBox 
        coloured={coloured}
        colours={colours}
        name={name}
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
