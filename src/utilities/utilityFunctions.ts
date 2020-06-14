type className = string | undefined | null;

export const makeCleanClassName = (classNames: className[]): string => {
  const CLASSES_SEPARATOR = ' ';
  // Filter with "Boolean" deleting empty values
  return classNames.filter(Boolean).join(CLASSES_SEPARATOR);
};
