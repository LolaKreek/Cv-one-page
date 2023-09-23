import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () =>{
    const {i18n} = useTranslation();
    const language = localStorage.getItem("language")
    const [active, setActive] = useState(language ? language :'en');
    
    useEffect(() => {
      i18n.changeLanguage(active);
    }, []);

    const onClickLanguageChange = (e:any) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        setActive(e.target.value);
        localStorage.setItem("language", e.target.value);
    }

        return( 
          <FormControl style={{ height: 32, width: 32, maxWidth: 32, maxHeight: 32, minHeight: 32, minWidth: 32,}}> 
              <Select 
              value={active} 
              onChange={onClickLanguageChange} 
              inputProps={{ role: "select" ,IconComponent: () => null }} 
              style={{padding:0,}}
              sx={{height: 32, width: 32, maxWidth: 32, maxHeight: 32, minHeight: 32, minWidth: 32,
                textAlign:'center',
                '& .MuiMenuItem-root': {padding: 0},
                ".MuiOutlinedInput-notchedOutline": {border: 0},
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {border: 0},
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {border: 0},
                "& .MuiInputBase-input": {
                    padding: 0, height: 32, width: 32, maxWidth: 32, maxHeight: 32, minHeight: 32, minWidth: 32, marginTop: 1.3
                },
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding:0
                },
              }}
            >
                <MenuItem value='pl'>
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3C1 1.89543 1.89543 1 3 1H23C24.1046 1 25 1.89543 25 3V10H1V3Z" fill="white"/>
                        <path d="M1 10H25V17C25 18.1046 24.1046 19 23 19H3C1.89543 19 1 18.1046 1 17V10Z" fill="#DF0B0B"/>
                    </svg>
                </MenuItem>
                <MenuItem value='en'>
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_626_5281)">
                            <g clipPath="url(#clip1_626_5281)">
                                <path d="M-2.33301 0.900146V18.9001H27.667V0.900146H-2.33301Z" fill="#012169"/>
                                <path d="M-2.33301 0.900146L27.667 18.9001L-2.33301 0.900146ZM27.667 0.900146L-2.33301 18.9001L27.667 0.900146Z" fill="black"/>
                                <path d="M-2.33301 0.900146L27.667 18.9001M27.667 0.900146L-2.33301 18.9001" stroke="white" strokeWidth="3.63996"/>
                                <mask id="mask0_626_5281" maskUnits="userSpaceOnUse" x="-3" y="0" width="31" height="19">
                                    <path d="M12.667 9.90015H27.667V18.9001L12.667 9.90015ZM12.667 9.90015V18.9001H-2.33301L12.667 9.90015ZM12.667 9.90015H-2.33301V0.900146L12.667 9.90015ZM12.667 9.90015V0.900146H27.667L12.667 9.90015Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_626_5281)">
                                    <path d="M-2.33301 0.900146L27.667 18.9001L-2.33301 0.900146ZM27.667 0.900146L-2.33301 18.9001L27.667 0.900146Z" fill="black"/>
                                    <path d="M-2.33301 0.900146L27.667 18.9001M27.667 0.900146L-2.33301 18.9001" stroke="#C8102E" strokeWidth="2.42664"/>
                                </g>
                                <path d="M-2.93359 7.50005H10.2664V0.300049H15.0664V7.50005H28.2664V12.3H15.0664V19.5H10.2664V12.3H-2.93359V7.50005Z" fill="#C8102E" stroke="white" strokeWidth="1.21332"/>
                            </g>
                        </g>
                    </svg>
                </MenuItem>
                <MenuItem value='ru'>
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <g clipPath="url(#clip0_503_2726)"> 
                                <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" strokeWidth="0.5"></rect> 
                                <mask id="mask0_503_2726" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> 
                                    <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"></rect> 
                                </mask> 
                                <g mask="url(#mask0_503_2726)"> 
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"></path> 
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"></path> 
                                </g> 
                            </g> 
                            <defs> 
                                <clipPath id="clip0_503_2726"> 
                                    <rect width="28" height="20" rx="2" fill="white"></rect> 
                                </clipPath> 
                            </defs> 
                        </g>
                    </svg>
                </MenuItem>
              </Select>
            </FormControl>
            )
        }

export default ChangeLanguage;