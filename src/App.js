import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";
import { ReactComponent as MicrosoftIcon } from "./MicrosoftIcon.svg";
import { ReactComponent as GiraffeHero } from "./GiraffeHero.svg";
import { ReactComponent as AgendaComponentIcon } from "./AgendaComponentIcon.svg";
import { ReactComponent as LoginComponentIcon } from "./LoginComponentIcon.svg";
import { ReactComponent as PeopleComponentIcon } from "./PeopleComponentIcon.svg";
import { ReactComponent as PersonComponentIcon } from "./PersonComponentIcon.svg";
import { ReactComponent as TaskComponentIcon } from "./TaskComponentIcon.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `<!DOCTYPE html>
    <html>
      <head>
      <title>Microsoft Graph Toolkit Demo</title>
      //Necessary library to load components
      <script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>
      </head>

      <body>
        <h2>Hello</h2>
      </body>
    </html>`,
      renderCode: "<h2>Hello</h2>"
    };
    this.loadLoginComponent = this.loadLoginComponent.bind(this);
    this.loadAgendaComponent = this.loadAgendaComponent.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    let edits = newValue.slice(
      newValue.indexOf("<body>") + 6,
      newValue.indexOf("</body>")
    );
    this.setState({ renderCode: edits, code: newValue });
  }
  loadLoginComponent() {
    let loginHTML = `<!DOCTYPE html>
    <html>
      <head>
      <title>Microsoft Graph Toolkit Demo</title>
      //Necessary library to load components
      <script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>
      </head>

      <body>
      <h2>Hello</h2>
      <mgt-mock-provider></mgt-mock-provider>
      <mgt-login></mgt-login>
      </body>
    </html>`;
    this.onChange(loginHTML);
  }
  loadAgendaComponent() {
    let loginHTML = `<!DOCTYPE html>
    <html>
      <head>
      <title>Microsoft Graph Toolkit Demo</title>
      //Necessary library to load components
      <script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>
      </head>

      <body>
      <h2>Hello</h2>
      <mgt-mock-provider></mgt-mock-provider>
      <mgt-agenda></mgt-agenda>
      </body>
    </html>`;
    this.onChange(loginHTML);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      bracketMatching: true
    };
    return (
      <div>
        <div>
          <div>
            <div className="MicrosoftIconContainer">
              <MicrosoftIcon />
            </div>
            <div className="GiraffeHero">
              <div className="GiraffeHeroImage">
                <GiraffeHero />
              </div>
              <div className="GiraffeHeroText">
                <h2 className="GiraffeHeroTitleText">
                  Microsoft Graph Toolkit
                </h2>
                <div className="GiraffeHeroSubtextOne">
                  Collection of web components powered by the Microsoft Graph
                </div>
                <div className="GiraffeHeroSubtextTwo">
                  Components are functional and work automatically with the
                  Microsoft Graph
                </div>
                <div className="GiraffeHeroSubtextTwo">
                  Components work with any web framework and on all modern
                  browsers.
                </div>
                <div className="GiraffeHeroSubtextTwo">
                  IE 11 is also supported.
                </div>
                <button className="GiraffeHeroButton">Getting Started</button>
              </div>
            </div>
            <div className="ComponentList">
              <p>The toolkit currently includes the following components:</p>
            </div>
            <div className="ComponentBoxList">
              <div className="ComponentBox">
                <AgendaComponentIcon />
                <div className="ComponentBoxTitle">mgt-agenda</div>
                <div className="ComponentBoxText">
                  The mgt-agenda web component is used to represent events in a
                  user or group calender.
                </div>
              </div>
              <div className="ComponentBox">
                <LoginComponentIcon />
                <div className="ComponentBoxTitle">mgt-login</div>
                <div className="ComponentBoxText">
                  A Login Component is a button and flyout control to facilitate
                  Microsoft Identity authentication.
                </div>
              </div>
              <div className="ComponentBox">
                <PeopleComponentIcon />
                <div className="ComponentBoxTitle">mgt-people</div>
                <div className="ComponentBoxText">
                  The mgt-people web component can be used to display a group of
                  people or contacts by using their photos or initials.
                </div>
              </div>
              <div className="ComponentBox">
                <PersonComponentIcon />
                <div className="ComponentBoxTitle">mgt-person</div>
                <div className="ComponentBoxText">
                  The person component is used to display a person or contact by
                  using their photo, name, and/or email address.
                </div>
              </div>
              <div className="ComponentBox">
                <TaskComponentIcon />
                <div className="ComponentBoxTitle">mgt-tasks</div>
                <div className="ComponentBoxText">
                  The Tasks Component enables the user to view, add, remove,
                  complete, or edit tasks. It works with any tasks in Microsoft
                  Planner or Microsoft To-Do.
                </div>
              </div>
            </div>

            <div className="ComponentList">
              <p>The Microsoft Graph Toolkit Providers</p>
            </div>

            <div
              className="demoSpace"
              dangerouslySetInnerHTML={{ __html: this.state.renderCode }}
            />
          </div>
        </div>
        <div className="editorContainer">
          <div className="controlButtons">
            <button onClick={this.loadLoginComponent}>Login Component</button>
            <button onClick={this.loadAgendaComponent}>Agenda Component</button>
          </div>
          <h2>Editor</h2>
          <MonacoEditor
            width="700"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </div>
      </div>
    );
  }
}

export default App;
