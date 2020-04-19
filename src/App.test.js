import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/챔피언 로테이션/i)
  expect(headerElement).toBeInTheDocument()
})
