import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import './App.css';
import ButtonsSection from './pages/Buttons';
import DiscountSection from './pages/Discount';
import EntrySection from './pages/EntrySection';
import ModulesButtons from './pages/ModulesButtons';
import Navbar from './pages/Navbar';
import ResultsSection from './pages/result';
import theme from './theme';

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


