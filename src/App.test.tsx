import { render } from "@testing-library/react";
import App from "./App";
import { ReduxWrapper } from "test-utils/redux-test-utils";

describe("<App />", () => {
  test("renders learn react link", () => {
    render(
      <ReduxWrapper>
        <App />
      </ReduxWrapper>
    );
  });

  // test("toggle theme", () => {
  //   render(
  //     <ReduxWrapper>
  //       <App />
  //     </ReduxWrapper>
  //   );

  //   expect(themereducer(initialState, setMode("dark"))).toEqual({
  //     mode: "dark",
  //   });
  // });
});
