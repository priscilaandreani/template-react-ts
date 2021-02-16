import React, { FC } from 'react';

const FirstPage: FC<{ title?: string }> = ({ title }) => (
  <p>first page works! {title}</p>
);

export { FirstPage };
