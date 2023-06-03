import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";

test("renders questionnaire", () => {
  render(
    <Router>
  <App />
  </Router>);
  const linkElement = screen.getByText(/Teste tes connaissances/i);
  expect(linkElement).toBeInTheDocument();
});
