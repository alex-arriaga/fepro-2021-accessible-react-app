import Schedule from "./components/Schedule/Schedule";
import talks from "./data/talks.json"

function App() {
    return (
        <div className="App container mt-4">
            <Schedule talks={talks}/>
        </div>
    );
}

export default App;
