import React from 'react';
import { Button } from 'semantic-ui-react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../redux/actions';

const Footer = () => (
  <Button.Group>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </Button.Group>
);

export default Footer;
