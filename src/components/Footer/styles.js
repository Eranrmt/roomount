import styled from 'styled-components';
import { Pane, minorScale } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export const Outer = styled(Pane).attrs(({ theme }) => ({
  background: theme.palette.blue.dark,
    color: 'white',
    cursor: 'pointer' 
}))`
width:100%;
position: sticky;
top: 0;
/* background: white; */
z-index: 10;
`;

export const FooterLink = styled(Link)`
margin-left:${minorScale(2)}px;

display: table-cell;

`;

export const BlogLink = styled(Link)`
margin-left:${minorScale(2)}px;
color: red !important;
display: table-cell;

`;

export const Wrapper = styled(Pane)`
width: calc(100% - 8em);
margin:auto;
display: table;
text-align: center;
height:60px;
align-items:center;
a,span  {
color:white;
}
span[id="a"] {
   color: red
}
`;
