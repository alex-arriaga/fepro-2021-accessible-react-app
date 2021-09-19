import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import talks from "./data/talks.json"

function App() {
    return (
        <div className="App container mt-4">
            <Schedule talks={talks}/>
            <Register/>
        </div>
    );
}

export default App;
