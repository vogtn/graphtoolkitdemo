import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";
import Button from "@material-ui/core/Button";

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
            <h2>Demo Area</h2>
            <div
              className="demoSpace"
              dangerouslySetInnerHTML={{ __html: this.state.renderCode }}
            />
          </div>
        </div>
        <div className="editorContainer">
          <div className="controlButtons">
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadLoginComponent}
            >
              Login Component
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadAgendaComponent}
            >
              Agenda Component
            </Button>
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
