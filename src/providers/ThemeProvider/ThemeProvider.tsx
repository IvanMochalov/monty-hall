import { COLORS } from '@/constants/ColorVariables'
import { CssBaseline } from '@mui/material'
import {
  ComponentsOverrides,
  ThemeProvider as MUIThemeProvider,
  Theme,
  createTheme,
} from '@mui/material/styles'
import React, { FC, ReactNode, useMemo } from 'react'

const getMuiCssBaseline = (): {
  styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline']
} => {
  return {}
}

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: COLORS.Black100,
            contrastText: COLORS.White100,
          },
          secondary: {
            main: COLORS.Black40,
            contrastText: COLORS.White100,
          },
          success: {
            main: COLORS.Green100,
            contrastText: COLORS.White100,
          },
          error: {
            main: COLORS.Red100,
            contrastText: COLORS.White100,
          },
        },
        typography: {
          fontFamily: ['"CirceLight"', '"CirceBold"', '"CirceRegular"', 'sans-serif'].join(','),
          body1: {
            color: COLORS.Black100,
            fontFamily: 'CirceRegular',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
          },
          body2: {
            color: COLORS.Black100,
            fontFamily: 'CirceRegular',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '1.25',
          },
          h1: {
            fontFamily: 'CirceBold',
            fontWeight: 700,
            fontSize: '48px',
            textTransform: 'uppercase',
          },
          h5: {
            fontFamily: 'CirceBold',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '43px',
          },
          h6: {
            fontFamily: 'CirceRegular',
            fontWeight: 400,
            fontSize: '18px',
          },
          subtitle1: {
            fontFamily: 'CirceLight',
            fontWeight: 350,
            fontSize: '36px',
          },
          subtitle2: {
            fontFamily: 'CirceBold',
            fontSize: '40px',
            color: COLORS.Black40,
            textTransform: 'uppercase',
          },
        },
        components: {
          MuiCssBaseline: getMuiCssBaseline(),
          MuiGrid: {
            styleOverrides: {
              root: {
                '& .MuiGrid-root': {
                  margin: '0',
                },
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                '& .MuiLink-root': {
                  color: '#0096EB',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              outlinedPrimary: {
                color: COLORS.White100,
                borderColor: COLORS.White100,
                backgroundColor: 'transparent',
              },
              outlinedSecondary: {
                borderColor: COLORS.Black100,
                backgroundColor: 'transparent',
                color: COLORS.Black100,
                '&.MuiButtonBase-root:hover': {
                  opacity: 0.6,
                },
              },
              colorPrimary: {
                backgroundColor: COLORS.White100,
                color: COLORS.Black40,
              },
              colorSuccess: {
                color: COLORS.Black40,
                backgroundColor: COLORS.Black10,
                borderColor: COLORS.Black10,
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: COLORS.Black20,
                },
              },

              colorSecondary: {
                borderColor: COLORS.Laf100,
                backgroundColor: COLORS.Laf100,
                color: COLORS.White100,
              },
              colorInfo: {
                color: COLORS.Black100,
                backgroundColor: COLORS.White100,
                borderColor: COLORS.White100,
              },
              colorError: {
                backgroundColor: COLORS.Red10,
                color: COLORS.Red100,
                borderColor: COLORS.Red10,
              },
              colorWarning: {
                backgroundColor: COLORS.Laf10,
                color: COLORS.Laf100,
                borderColor: COLORS.Laf10,
              },
            },
          },
          MuiBackdrop: {
            styleOverrides: {
              root: {
                '&.MuiModal-backdrop': {
                  backgroundColor: '#F4F4F4',
                },
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              container: {
                overflowY: 'auto',
              },
              paper: {
                maxWidth: '500px',
                flexGrow: '1',
                overflowY: 'hidden',
                maxHeight: 'none',
                borderRadius: '10px',
              },
            },
            defaultProps: {},
          },
          MuiButtonBase: {
            styleOverrides: {
              root: {
                '&.MuiChip-root': {
                  transition: 'all .3s ease-in-out',
                  '&.MuiChip-filledSecondary:hover': {
                    backgroundColor: COLORS.Laf100,
                    opacity: 0.6,
                  },
                },
                '&.MuiButton-root': {
                  borderRadius: '7px',
                  fontSize: '18px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  fontFamily: 'CirceRegular',
                  padding: '16px 30px 14px 30px',
                  letterSpacing: '0',
                  textTransform: 'none',
                },
                '&.MuiIconButton-root': {
                  '& .MuiSvgIcon-root ': {
                    height: '24px',
                    width: '24px',
                  },
                },
              },
            },
          },
          MuiPopover: {
            styleOverrides: {
              root: {
                '&.MuiMenu-root': {
                  '& .MuiModal-backdrop': {
                    backgroundColor: 'transparent',
                  },
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                '&.MuiMenu-paper': {},
              },
            },
          },
          MuiFormControl: {
            styleOverrides: {
              root: {
                '& legend': {
                  display: 'none',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  top: 0,
                },
                '&[aria-invalid="false"]': {
                  '& .MuiInputBase-root': {
                    '&.Mui-focused': {
                      backgroundColor: COLORS.Green10,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: COLORS.Green100,
                    },
                  },
                },
                '&:has(.MuiInputLabel-shrink)': {
                  '& .MuiInputBase-root': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: COLORS.Black80,
                    },
                    '& .MuiSelect-icon': {
                      color: COLORS.Black80,
                    },
                    '& .MuiInputAdornment-root': {
                      '& .MuiButtonBase-root': {
                        color: COLORS.Black60,
                      },
                      '& .MuiButtonBase-root.Mui-disabled': {
                        color: COLORS.Black40,
                      },
                    },
                  },
                },
                '& .MuiInputAdornment-root': {
                  height: '100%',
                  width: '20px',
                },
                '& .MuiInputAdornment-root .MuiButtonBase-root': {
                  padding: '5px',
                  color: COLORS.Black40,
                },
                '& .MuiInputAdornment-root .MuiButtonBase-root .MuiSvgIcon-root': {
                  width: '20px',
                  height: '20px',
                },
                '& .MuiInputBase-root': {
                  backgroundColor: 'transparent',
                  borderRadius: '7px',
                  '&.MuiInputBase-multiline': {
                    padding: 0,
                  },
                  color: COLORS.Black80,
                  '& .MuiInputBase-input': {
                    padding: '14px 17px',
                    fontSize: '18px',
                  },
                  '& .MuiSelect-icon': {
                    color: COLORS.Black40,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '7px',
                    borderColor: COLORS.Black40,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: COLORS.Blue100,
                  },
                  '&:hover .MuiSelect-icon': {
                    color: COLORS.Black80,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: COLORS.Blue100,
                    borderWidth: '1px',
                  },
                  '&.Mui-focused .MuiSelect-icon': {
                    color: COLORS.Black80,
                  },
                  '&.Mui-error ': {
                    backgroundColor: COLORS.Red10,
                  },
                  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: COLORS.Red100,
                  },
                  '&.Mui-disabled': {
                    backgroundColor: COLORS.Black20,
                  },
                  '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    borderColor: COLORS.Black20,
                  },
                },
                '& .MuiFormHelperText-root': {
                  marginLeft: 0,
                  marginTop: '5px',
                  '&.Mui-error': {
                    fontFamily: 'CirceBold',
                    fontSize: '14px',
                    lineHeight: '20px',
                  },
                },

                '& .MuiFormLabel-root': {
                  color: COLORS.Black40,
                  fontFamily: 'CirceLight',
                  // fontFamily: 'CirceRegular',
                },
                '&:has(.MuiInputBase-root.Mui-error) .MuiFormLabel-root': {
                  // display: 'none',
                  color: COLORS.Black40,
                  '& .MuiFormLabel-asterisk': {
                    display: 'none',
                  },
                },
                '&:has(.MuiInputBase-root .MuiOutlinedInput-input.Mui-disabled) .MuiFormLabel-root':
                  {
                    color: COLORS.Black40,
                  },
                '& .MuiFormLabel-root.MuiInputLabel-shrink': {
                  display: 'none',
                },
                // '&:has(.MuiInputBase-root .MuiOutlinedInput-input.Mui-disabled) .MuiFormLabel-root .MuiFormLabel-asterisk':
                //   {
                //     display: 'none',
                //     '& .MuiFormLabel-root .MuiFormLabel-asterisk': {
                //       display: 'none',
                //     },
                //   },
                '& .MuiFormLabel-root.Mui-focused': {
                  display: 'none',
                },
                '& .MuiFormLabel-root.Mui-error': {
                  color: COLORS.Black80,
                },
                '& .MuiFormLabel-root .MuiFormLabel-asterisk': {
                  color: COLORS.Red100,
                },
              },
            },
          },
        },
      }),
    []
  )

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
