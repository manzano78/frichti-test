import React from 'react';
import PropTypes from 'prop-types';

import menuContent from '../../../constants/mocks/menu.json';

import Styled from './menu.styled';

/**
 * MenuPage component
 *
 * USER STORY 1 - Search products by name
 * @todo: add search bar
 * USER STORY 3 - Filter products without some allergens
 * @todo: add filter bar
 */
const Menu = ({ className }) => {
  const menuBlocks = Object.keys(menuContent);
  return (
    <Styled className={className}>
      {menuBlocks.map((block) => {
        const { id, label, items } = menuContent[block];
        return (
          <Styled.block
            blockId={block}
            key={id}
            title={label}
            products={items}
          />
        );
      })}
    </Styled>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: undefined,
};

export default Menu;
