import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

vi.mock('@mui/icons-material', () => ({
  Brightness4: () => React.createElement('svg', { 'data-testid': 'Brightness4Icon' }),
  Brightness7: () => React.createElement('svg', { 'data-testid': 'Brightness7Icon' }),
  FormatSize: () => React.createElement('svg', { 'data-testid': 'FormatSizeIcon' }),
  ViewModule: () => React.createElement('svg', { 'data-testid': 'ViewModuleIcon' }),
  ViewList: () => React.createElement('svg', { 'data-testid': 'ViewListIcon' }),
  default: () => React.createElement('svg', { 'data-testid': 'DefaultIcon' }),
}));

// Mock MUI components to avoid unnecessary rendering complexity in tests
vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material');
  return {
    ...actual,
    CircularProgress: () => React.createElement('div', { 'data-testid': 'circular-progress' }),
  };
});
