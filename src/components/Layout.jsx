import styled from 'styled-components';
import SearchAppBar from 'components/SearchAppBar';
import { RotatingLines } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Box = styled.div``;

export default function Layout() {
  return (
    <Box>
      <SearchAppBar />
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <RotatingLines strokeColor="#1976D2" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
}
