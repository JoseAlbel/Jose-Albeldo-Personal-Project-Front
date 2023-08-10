import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Register from "./Register";
import { store } from "../../../core/store";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../hooks/use.users", () => ({
  useUsers: jest.fn().mockReturnValue({
    handleRegisterUser: jest.fn(),
  }),
}));

describe("Given the Register component", () => {
  describe("When register form is rendered", () => {
    const navigateMock = jest.fn();
    beforeEach(() => {
      (useNavigate as jest.Mock).mockReturnValue(navigateMock);

      render(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      );
    });

    // test("should render register form", () => {
    //   const form = screen.getByRole("heading", { name: "Get registered" });

    //   expect(form).toBeInTheDocument();
    // });

    test("Then the user should fill in the form and click on the 'Sign Up' button", async () => {
      const signUpButton = screen.getByText("Sign Up");
      const inputs = screen.getAllByRole("textbox");

      await act(async () => {
        await userEvent.type(inputs[0], "Felicidad");
        expect(inputs[0]).toHaveValue("Felicidad");
        await userEvent.type(inputs[1], "felicidad@gmail.com");
        expect(inputs[1]).toHaveValue("felicidad@gmail.com");
        await fireEvent.change(inputs[2], {
          target: { value: "mama" },
        });
        expect(inputs[2]).toHaveValue("mama");

        await userEvent.click(signUpButton);
        expect(signUpButton).toBeInTheDocument();
        expect(navigateMock).toHaveBeenCalled();
      });
    });
  });
});
