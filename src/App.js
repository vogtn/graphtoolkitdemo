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
import { ReactComponent as ComponentListArrowIcon } from "./ComponentListArrowIcon.svg";
import { jsxElement } from "@babel/types";
var Remarkable = require("remarkable");
var md = new Remarkable("full");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
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
      renderCode: "<h2>Hello</h2>",
      markdown: "",
      activeComponent: "",
      activeIcon: jsxElement
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
    window.scrollTo(0, this.editorRef.current.offsetTop);
    this.setState({
      activeComponent: "mgt-login",
      activeIcon: <LoginComponentIcon />
    });
    let getMarkdown = () => {
      const request = new Request(
        "https://raw.githubusercontent.com/microsoftgraph/microsoft-graph-toolkit/master/docs/components/login.md"
      );
      return fetch(request)
        .then(response => response.text())
        .then(responsetext => this.renderMarkDown(responsetext));
    };
    getMarkdown();
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
    window.scrollTo(0, this.editorRef.current.offsetTop);
    this.setState({
      activeComponent: "mgt-agenda",
      activeIcon: <AgendaComponentIcon />
    });
    let getMarkdown = () => {
      const request = new Request(
        "https://raw.githubusercontent.com/microsoftgraph/microsoft-graph-toolkit/master/docs/components/agenda.md"
      );
      return fetch(request)
        .then(response => response.text())
        .then(responsetext => this.renderMarkDown(responsetext));
    };
    getMarkdown();
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

  renderMarkDown(markdown) {
    if (markdown) {
      this.setState({ markdown: md.render(markdown) });
    }
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
                <div className="GiraffeHeroTitleText">
                  Microsoft Graph Toolkit
                </div>
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
              <div className="ComponentBox" onClick={this.loadAgendaComponent}>
                <AgendaComponentIcon />
                <div className="ComponentBoxTitle">mgt-agenda</div>
                <div className="ComponentBoxText">
                  The mgt-agenda web component is used to represent events in a
                  user or group calender.
                </div>
                <div className="ComponentListArrowIcon">
                  <ComponentListArrowIcon />
                </div>
              </div>
              <div className="ComponentBox" onClick={this.loadLoginComponent}>
                <LoginComponentIcon />
                <div className="ComponentBoxTitle">mgt-login</div>
                <div className="ComponentBoxText">
                  A Login Component is a button and flyout control to facilitate
                  Microsoft Identity authentication.
                </div>
                <div className="ComponentListArrowIcon">
                  <ComponentListArrowIcon />
                </div>
              </div>
              <div className="ComponentBox">
                <PeopleComponentIcon />
                <div className="ComponentBoxTitle">mgt-people</div>
                <div className="ComponentBoxText">
                  The mgt-people web component can be used to display a group of
                  people or contacts by using their photos or initials.
                </div>
                <div className="ComponentListArrowIcon">
                  <ComponentListArrowIcon />
                </div>
              </div>
              <div className="ComponentBox">
                <PersonComponentIcon />
                <div className="ComponentBoxTitle">mgt-person</div>
                <div className="ComponentBoxText">
                  The person component is used to display a person or contact by
                  using their photo, name, and/or email address.
                </div>
                <div className="ComponentListArrowIcon">
                  <ComponentListArrowIcon />
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
                <div className="ComponentListArrowIcon">
                  <ComponentListArrowIcon />
                </div>
              </div>
            </div>

            <div className="ProvidersList">
              <p>The Microsoft Graph Toolkit Providers</p>
              <p className="ProvidersListSecondaryText">
                Use the providers to enable authentication and graph access for
                the Microsoft Graph Toolkit components{" "}
              </p>
            </div>

            <div className="ProvidersArea">
              <div className="ProviderSection">
                <a href="#" className="ProviderTitle">
                  mgt-msal-provider
                </a>
                <div className="ProviderSecondary">
                  Use msal.js to enable authentication and graph access for the
                  Microsoft Graph Toolkit components.
                </div>
                <a href="#" className="ProviderTitle">
                  SharePointProvider
                </a>
                <div className="ProviderSecondary">
                  Use msal.js to enable authentication and graph access for the
                  Microsoft Graph Toolkit components.
                </div>
              </div>
              <div className="ProviderSection">
                <a href="#" className="ProviderTitle">
                  SimpleProvider
                </a>
                <div className="ProviderSecondary">
                  Create custom provider to enable authentication and graph
                  access for the Microsoft Graph Toolkit components
                </div>
                <a href="#" className="ProviderTitle">
                  mgt-teams-provider
                </a>
                <div className="ProviderSecondary">
                  Use msals.js to enable authentication and graph access for the
                  Microsoft Graph Toolkit components.
                </div>
              </div>
            </div>
          </div>
          <div className="sidenav">
            <div className="sidenavText">Components:</div>
            <a href="#">
              <span className="sidenavIcon">
                <AgendaComponentIcon />
              </span>
              mgt-agenda
            </a>
            <a href="#">
              <span className="sidenavIcon">
                <LoginComponentIcon />
              </span>
              mgt-login
            </a>
            <a href="#">
              <span className="sidenavIcon">
                <PeopleComponentIcon />
              </span>
              mgt-people
            </a>
            <a href="#">
              <span className="sidenavIcon">
                <PersonComponentIcon />
              </span>
              mgt-person
            </a>
            <a href="#">
              <span className="sidenavIcon">
                <TaskComponentIcon />
              </span>
              mgt-tasks
            </a>
            <div className="sidenavText">Providers:</div>
            <a href="#">mgt-msal-provider</a>
            <a href="#">SharePointProvider</a>
            <a href="#">SimpleProvider</a>
            <a href="#">mgt-teams-provider</a>
          </div>
          <div className="main">
            <div className="editorContainer">
              <div className="controlButtons" />
              <div className="editorIcon">
                {this.state.activeIcon}
                <span ref={this.editorRef} id="editorText">
                  {this.state.activeComponent
                    ? this.state.activeComponent
                    : "editor"}
                </span>
              </div>
              <MonacoEditor
                width="90%"
                height="400"
                language="javascript"
                theme="vs-light"
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
              />
            </div>
            <h2>Preview:</h2>
            <div
              className="demoSpace"
              dangerouslySetInnerHTML={{ __html: this.state.renderCode }}
            />
          </div>
        </div>
        <div
          className="markdownArea"
          dangerouslySetInnerHTML={{ __html: this.state.markdown }}
        />
      </div>
    );
  }
}

export default App;
