import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import talks from "./data/talks.json"
import RegisterSpectrum from "./components/RegisterSpectrum/RegisterSpectrum";

function App() {
    return (
        <div className="App container mt-4">
            <Schedule talks={talks}/>
            <Register/>
            <RegisterSpectrum/>
        </div>
    );
}

export default App;
