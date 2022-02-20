import { render, screen } from "@testing-library/react";
import PostsList from "../index";

describe("PostsList", () => {
  it('should render posts list', () => {
    render(<PostsList />);
    const pulpFiction = screen.findByText("Pulp Fiction: Tempo de Violência");
    expect(pulpFiction).toBeIntTheDocument();
  })
})
