import React, { useState } from 'react';
import CheckBox from './components/CheckBox/CheckBox';
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
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <h1>Minecraft Hex Nick name generator</h1>

          <div>
            <NameInput name={name} setName={setName} />
          </div>


          <div style={{ position: "relative", left: 15 }}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: "900px", margin: "auto" }}>
          <GradientProvider isChecked={coloured} colorCodes={colour} setColours={setColour} amount={Amount} setAmount={setAmount} />        </div>


        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: "500px", margin: "auto" }}>
          <OutputBox
            coloured={coloured}
            colours={colour}
            name={name}
            amount={Amount}
            underlined={underlined}
            bold={bold}
            italicized={italicized}
            strikethrough={strikethrough} />
        </div>
      </header>
    </div>
  );
}

export default App;
