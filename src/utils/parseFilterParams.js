const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) {
    return undefined;
  }
  return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'boolean') return isFavourite;

  if (typeof isFavourite === 'string') {
    if (isFavourite.toLowerCase() === 'true') return true;
    if (isFavourite.toLowerCase() === 'false') return false;
  }
  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
