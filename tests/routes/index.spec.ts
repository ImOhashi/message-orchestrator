import supertest from "supertest";

import app from "../../src/app";
import { IDetails } from "../../src/interfaces";

describe("Route /details", () => {
  test("GET - /details", async () => {
    const expectedBody: IDetails = {
      version: process.env.npm_package_version,
      author: process.env.npm_package_author_name,
      email: process.env.npm_package_author_email,
      repository_url: process.env.npm_package_repository_url,
    };

    const response = await supertest(app).get("/details");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedBody);
  });
});
