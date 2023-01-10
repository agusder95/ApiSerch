import Header from "./components/header";
import SerchSection from "./components/serchSection";
import ApiSerch from "./components/Api";
import Footer from "./components/footer";
import { AppWrapper } from "./AppStyle";

import './styles/fonts/fonts.css'
import './styles/fonts/get_schwifty.ttf'


function App() {
  
  var api = ApiSerch()

  return (
    <AppWrapper>
      <Header />
      <SerchSection data = {api} show/> {/* show for ture */}
      <Footer />
    </AppWrapper>
  );
}

export default App;
