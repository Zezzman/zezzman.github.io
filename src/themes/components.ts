/* 
  background-color: #e0e0e0;
  -webkit-text-decoration: none;
  text-decoration: none;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
 */
import { Theme } from '@mui/material/styles';
import { themeParams } from "./theme";

export default function componentStyleOverrides(theme: typeof themeParams): Theme["components"] {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: theme.palette.paper,
        },
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          
          ">span": {
            lineHeight: 1,
          }
        }
      }
    }
  };
}