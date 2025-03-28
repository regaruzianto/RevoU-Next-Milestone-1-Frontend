import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ViewMoreReviewsPage from "./pages/ViewMoreReviewsPage"; // File baru

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reviews" element={<ViewMoreReviewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import "./App.css";
// import MainPage from "./pages/MainPage";

// function App() {

//   return (
//     <div>
//       <MainPage />
//     </div>
//   );
// }

// export default App;
