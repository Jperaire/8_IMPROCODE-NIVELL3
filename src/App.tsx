import { Navbar } from "./components";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
};

export default App;
