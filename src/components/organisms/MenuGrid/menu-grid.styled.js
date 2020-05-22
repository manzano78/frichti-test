import styled from 'styled-components';

import SIZES from '../../../styles/constants/sizes';

const Styled = styled.article`
  width: 100%;
`;

Styled.container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${SIZES.gutter};

  > * {
    flex: 0 0 calc(25% - ${SIZES.gutter} - ${SIZES.gutter});
    margin: ${SIZES.gutter};
  }
`;

export default Styled;
