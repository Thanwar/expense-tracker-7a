import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import firebase from "./firebase";

// Components
import { Header         } from "./components/Header";
import { Balance        } from "./components/Balance";
import { AmountSummary  } from "./components/AmountSummary";
import { History        } from "./components/History";
import { AddTransaction } from "./components/AddTransaction";

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken();
  }).then((token)=>{
    console.log('token',token);
    
  })




  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AmountSummary />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
