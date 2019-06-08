import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SelectOpponent from "../components/SelectOpponent";

afterEach(cleanup);

describe("SelectOpponent", () => {
  it("should change the radio input value", () => {
    const { getByLabelText } = render(<SelectOpponent />);

    const radio = getByLabelText("Computer");
    fireEvent.change(radio, { target: { value: "Human" } });
    expect(radio.value).toBe("Human");
  });
});
