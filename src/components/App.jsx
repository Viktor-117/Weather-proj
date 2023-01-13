import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
