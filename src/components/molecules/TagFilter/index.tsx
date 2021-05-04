import React from 'react';
import { useTags } from '../../../hooks/useTags';
import { TagFilter as Presentational } from './TagFilter';

export const TagFilter: React.VFC = () => {
  const { selectedTag, popularTags, handleSelect } = useTags();

  return (
    <Presentational
      selectedTag={selectedTag}
      popularTags={popularTags}
      handleSelect={handleSelect}
    />
  );
};
