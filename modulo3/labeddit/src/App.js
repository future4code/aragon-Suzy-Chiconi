import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { createGlobalStyle } from "styled-components";

const GlobalStile = createGlobalStyle`
body {
  text-align: center;
  background-color: #928a86;
  padding: 20px;
}

input {
  margin: 0.3%;
}

button{
  position:relative;
  display:inline-block;
  margin:20px;
}

button a{
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size:36px;
  text-align: center;
  text-decoration:none;
  display:block;
  position:relative;
  padding:20px 40px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

button a:active{
  top:10px;
  background-color:#F78900;
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.posts {
  background-image: url(https://jul10l1r4.github.io/artigo/background-em-texto/papel.jpeg);
  opacity: 1;
  background-size: cover;
  background-attachment: fixed;
  font-size: 120%;
}
`

function App() {
  return (
    <>
      <GlobalStile />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;