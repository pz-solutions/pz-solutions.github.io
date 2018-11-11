import styled from 'styled-components';

export default styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
  padding: 0;
  grid-auto-flow: dense;
`;