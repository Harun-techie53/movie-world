import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

function App() {
  return (
    <main className="bg-gradient-to-r from-[#0f2235] to-black w-full min-h-screen">
      <div className="min-h-screen">
        <Header />
        <div className="mt-20">
          <Routes>
            <Route path="/movies/:id" element={<MovieDetailsScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
