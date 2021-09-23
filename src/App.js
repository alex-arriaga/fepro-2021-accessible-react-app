import RegisterSpectrum from "./components/RegisterSpectrum/RegisterSpectrum";
import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import Search from "./components/Search/Search";
import talks from "./data/talks.json"

function App() {
    return (
        <div className="App container mt-4">
            <header>
                <Search/>
            </header>
            <main id="content">
                <Schedule talks={talks}/>
                <Register/>
                <RegisterSpectrum/>
            </main>
        </div>
    );
}

export default App;
