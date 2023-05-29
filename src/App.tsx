import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, InfoOfferPage } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offer/:id" element={<InfoOfferPage />} />
          </Routes>
        </BrowserRouter>
      );
}