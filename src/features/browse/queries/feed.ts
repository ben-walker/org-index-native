import { Selector } from "../../../zeus";

export const feedQuery = Selector("Query")({
  organizations: [{}, { createdAt: true, id: true, name: true }],
});
