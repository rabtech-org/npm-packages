import { fireEvent, render, screen } from "@testing-library/react";
import MyButton from "./MyButton";

// <> Preparation & Cleanup
// beforeAll(() => {})
// afterEach(() => {})
// afterAll(() => {})

describe("MyButton", () => {
  test("Button loads with correct text", async () => {
    // Arrange
    const btnText = "Click Me!";
    render(<MyButton>{btnText}</MyButton>);

    // Act
    const btnEl = await screen.findByText(btnText);

    // Assert
    expect(btnEl).toBeDefined();
    expect(btnEl).toHaveTextContent(btnText);
  });

  test("onClick fires correctly", async () => {
    // Arrange
    const btnText = "Click Me!";
    const newBtnText = `I changed...`;
    render(
      <MyButton
        onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
          // eslint-disable-next-line no-param-reassign
          ev.currentTarget.innerHTML = newBtnText;
        }}
      >
        {btnText}
      </MyButton>
    );

    // Act
    const btnEl = await screen.findByText(btnText);
    fireEvent.click(btnEl);

    // Assert
    expect(btnEl).toBeDefined();
    expect(btnEl).toHaveTextContent(newBtnText);
  });
});
