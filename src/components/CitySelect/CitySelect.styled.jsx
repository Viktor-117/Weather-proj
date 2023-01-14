import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export const City = styled(MenuItem)`
  display: flex;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled(Box)`
  position: absolute;
  border-radius: 3px;
  box-shadow: 0px 7px 11px 1px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  margin-left: 7px;
  color: black;
`;

export const CityInfo = styled.p`
  margin: 0 6px;
`;
