import { getFeature } from "@/app/utils/utils";
import {
  getRecognitionFeature,
  getDetailFeature,
  getCustomizableFeature,
} from "../../fixtures/shortly.fixture";

/**
 * Unit test for function: getFeature
 */
describe("getFeature function", () => {
  it("returns the brand recognition feature data", () => {
    expect(getFeature("recognition")).toStrictEqual(getRecognitionFeature());
  });

  it("returns the details records feature data", () => {
    expect(getFeature("records")).toStrictEqual(getDetailFeature());
  });

  it("returns the fully customizable feature data", () => {
    expect(getFeature("customizable")).toStrictEqual(getCustomizableFeature());
  });
});
