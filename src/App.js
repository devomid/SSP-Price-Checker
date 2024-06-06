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

          <Stack direction="row" >
            <Stack direction="column">
              <ResultsSection />
              <ButtonsSection />
            </Stack>


            <Stack direction="row">
              <DiscountSection />
              <EntrySection />
            </Stack>

          </Stack>

        </div>
      </ThemeProvider>
    </CacheProvider >
  )
}

export default App;


