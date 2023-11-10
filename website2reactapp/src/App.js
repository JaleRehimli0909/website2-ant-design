import "./App.css";
import { Layout } from "antd";
import HeaderApp from "./components/HeaderApp";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderApp />
      </Header>
      <Content>
    
          <Home />
          <About />
          <Features />
          <Works />
          <Faq />
          <Pricing />
          <Contact />
    
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
