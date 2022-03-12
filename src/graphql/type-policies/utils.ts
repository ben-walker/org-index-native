import { FieldMergeFunction, StoreObject } from "@apollo/client";
import { ReadFieldFunction } from "@apollo/client/cache/core/types/common";

import { FIELD_ID } from "./constants";

export const offsetFromCursor = (
  items: StoreObject[],
  cursor: unknown,
  readField: ReadFieldFunction
) => {
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    if (readField(FIELD_ID, item) === cursor) {
      return i + 1;
    }
  }

  return -1;
};

export const mergeCursorPagination: FieldMergeFunction = (
  existing: StoreObject[] | undefined,
  incoming: StoreObject[],
  { readField, args }
) => {
  const { cursor } = args || {};
  const merged = existing ? existing.slice(0) : [];
  let offset = offsetFromCursor(merged, cursor, readField);

  if (offset < 0) {
    offset = merged.length;
  }

  for (let i = 0; i < incoming.length; i++) {
    merged[offset + i] = incoming[i];
  }

  return merged;
};
