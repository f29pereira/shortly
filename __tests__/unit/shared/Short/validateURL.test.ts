import { validateUrl } from "@/app/components/shared/ShortUrlForm/Short.utils";

/**
 * Unit tests for the function: isUrlValid
 */
describe("isUrlValid", () => {
  it("returns 'Please add a link' error message when url is empty string", () => {
    expect(validateUrl("")).toBe("Please add a link");
  });

  it("returns 'Please enter a valid link' error message when url is invalid", () => {
    expect(validateUrl("http")).toBe("Please enter a valid link");
    expect(validateUrl("https")).toBe("Please enter a valid link");
    expect(validateUrl("http://")).toBe("Please enter a valid link");
    expect(validateUrl("http://wwww.")).toBe("Please enter a valid link");
    expect(validateUrl("http://wwww.f")).toBe("Please enter a valid link");
    expect(validateUrl("http://wwww.@")).toBe("Please enter a valid link");
    expect(validateUrl("http://wwww.frontendmentor")).toBe(
      "Please enter a valid link"
    );
    expect(validateUrl("http://wwww.frontendmentor.")).toBe(
      "Please enter a valid link"
    );
    expect(validateUrl("http://wwww.frontendmentor./")).toBe(
      "Please enter a valid link"
    );
  });

  it("returns empty error message when url is valid", () => {
    expect(validateUrl("http://wwww.frontendmentor.io")).toBe("");
    expect(validateUrl("https://wwww.frontendmentor.io")).toBe("");
    expect(validateUrl("https://twitter.com/frontendmentor")).toBe("");
    expect(
      validateUrl("https://www.linkedin.com/company/frontend-mentor")
    ).toBe("");
  });
});
