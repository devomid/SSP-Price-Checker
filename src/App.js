import { Box, Button, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import EntrySection from './pages/EntrySection';
import DiscountSection from './pages/Discount';
import ButtonsSection from './pages/Buttons';
import Navbar from './pages/Navbar'
import theme from './theme';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import MenuDrawer from './dialogs/MenuDrawer';
import { useState } from 'react';
import ResultsSection from './pages/result';
import ModulesButtons from './pages/ModulesButtons';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {



  return (
    <CacheProvider value={cacheRtl}>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className='App' >
          <Navbar />

          <Stack direction="row">

            <Stack direction="column">
              <ResultsSection />
              <ButtonsSection />
            </Stack>

            {/* <Stack direction="column">
              <ModulesButtons />
            </Stack> */}


            <Stack direction="row">
              <DiscountSection />

              <Stack direction="column">
                <EntrySection />
                <ModulesButtons />
              </Stack>

            </Stack>

          </Stack>

        </div>
      </ThemeProvider>
    </CacheProvider >
  )
}

export default App;


