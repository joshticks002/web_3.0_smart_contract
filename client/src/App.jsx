import {
  Homepage,
  NavigationBar,
  Footer,
  Services,
  Transactions,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavigationBar />
        <Homepage />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
