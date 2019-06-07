import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PlayerHand from "../components/PlayerHand";

afterEach(cleanup);

describe("PlayerHand", () => {
  it("should change the radio input value", () => {
    const { getByLabelText } = render(<PlayerHand />);

    const radio = getByLabelText("Rock");
    fireEvent.change(radio, { target: { value: "Paper" } });
    expect(radio.value).toBe("Paper");
  });
});
