// src/App.jsx
import 'src/global.css';
import { Router } from 'src/routes/sections';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from 'src/locales';
import { ThemeProvider } from 'src/theme/theme-provider';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';


export default function App() {



  return (
    <LocalizationProvider>
      <SettingsProvider settings={defaultSettings}>
        <ThemeProvider>
          <MotionLazy>
            <ProgressBar />
            <SettingsDrawer />
            <Router />
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
}
