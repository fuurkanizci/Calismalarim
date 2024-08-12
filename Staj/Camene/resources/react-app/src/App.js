import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import "./App.css";
import { store } from "./utils/store/store";
import { Provider } from "react-redux";
function App() {
    return (
        <div className="over overflow-hidden">
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoute />
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
