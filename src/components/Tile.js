import styled from 'styled-components';

export default styled.li`
grid-column: span ${(props)=>props.colSpan||1};
grid-row: span ${(props)=>props.rowSpan||1};
border-color: #dddddd;
border-width: 1px;
border-style: dotted;
padding: 0.3em;
`;