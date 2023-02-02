
import { AppWrapper } from "./AppStyle";
import Footer from "./components/footer";
import Header from "./components/header";
import SectSerch from "./components/sectionSerch";
import { NameContextProvider } from "./context/NameContext";

import './styles/fonts/fonts.css'
import './styles/fonts/get_schwifty.ttf'

function App() {

  return (
    <NameContextProvider>
        <AppWrapper>
          <Header />
          <SectSerch />
          <Footer />
        </AppWrapper>
    </NameContextProvider>
  );
}

export default App;
