import RegisterSpectrum from "./components/RegisterSpectrum/RegisterSpectrum";
import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import Search from "./components/Search/Search";
import talks from "./data/talks.json"

function App() {
    return (
        <div className="App container mt-4">
            <header>
                <h1>¡Vamos a crear una verdadera Web inclusiva!</h1>
                <h2 className="mt-4 mb-3">Empezando por nuestros proyectos...</h2>
                <Search/>
            </header>
            <main id="content" className="mt-4">
                <Schedule talks={talks}/>
                <Register/>
                <RegisterSpectrum/>
            </main>
        </div>
    );
}

export default App;
