import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { store } from "../appRedux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
