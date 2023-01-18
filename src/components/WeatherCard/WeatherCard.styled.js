import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 20px;
  background-color: #e7ebf0;
`;

export const Pic = styled.img`
  display: block;
  text-align: center;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  width: 120px;
`;

export const Time = styled(Typography)`
  text-align: center;
  padding-top: 15px;
`;
