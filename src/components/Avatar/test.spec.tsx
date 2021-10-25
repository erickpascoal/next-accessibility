import { render } from "@testing-library/react";
import axe from "@axe-helper";
import { Avatar } from "@components/Avatar";

describe("<Avatar />", () => {
  it("should not have accessibility errors", async () => {
    const { container } = render(<Avatar />);

    const axeResult = await axe(container);

    expect(axeResult).toHaveNoViolations();
  });
});
