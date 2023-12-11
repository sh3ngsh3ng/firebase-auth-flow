import './App.css';
import { connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { app, auth } from "./firebase.js"

function App() {

  connectAuthEmulator(auth, "http://localhost:9099")

  const login = async () => {
    const email = "testing@gmailfaw.com"
    const password = "testing"

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
    } catch (e) {
      console.log(e)
    }
  }


  const createUser = async () => {
    const email = "faw@gmail.com"
    const password = "afwefwe"

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => createUser()}>Create</button>
    </div>
  );
}

export default App;
