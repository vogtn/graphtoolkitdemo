import React from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code..."
    };
    this.start = this.start.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log("onChange", newValue, e);
  }
  start() {
    this.setState({
      code: `<!DOCTYPE html>
    <html>
      <head>
      <title>Microsoft Graph Toolkit Demo</title>
      </head>
      <body>
      </body>
    </html>`
    });
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
          <Button variant="contained" color="primary" onClick={this.start}>
            Get Started
          </Button>
          <div>
            <h2>Demo Area</h2>
            <div className="demoSpace" />
          </div>
        </div>
        <div className="editorContainer">
          <Button variant="contained" color="primary" onClick={this.start}>
            Login Component
          </Button>
          <h2>Editor</h2>
          <MonacoEditor
            width="500"
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
