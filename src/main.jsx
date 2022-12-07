import React , {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./components/I18next"
import "../node_modules/flag-icon-css/css/flag-icons.min.css";

const LoadingMarkup = () => {
  <div className="py-4 text-center">
    Loading...
  </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={LoadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
