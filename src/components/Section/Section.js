import React from 'react';
import { Section, Title } from './StyledComponents';
import PropTypes from 'prop-types';

export default function SectionBlock({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

SectionBlock.propTypes = {
  title: PropTypes.string,
};
