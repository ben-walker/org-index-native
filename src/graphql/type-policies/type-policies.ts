import { StrictTypedTypePolicies } from "../../generated/apollo";
import { mergeCursorPagination } from "./utils";

export const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      organizations: {
        keyArgs: false,
        merge: mergeCursorPagination,
      },
    },
  },
};
