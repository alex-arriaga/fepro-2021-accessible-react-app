import Schedule from "./components/Schedule/Schedule";
import talks from "./data/talks.json"

function App() {
    return (
        <div className="App">
            <Schedule talks={talks}/>
        </div>
    );
}

export default App;
