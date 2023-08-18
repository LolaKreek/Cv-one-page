const styleContactMeInput = {
    color: '#8a7474',
    fontWeight: 'normal',
    fontSize: '20px',
    padding: '0 3% 0 20px',
    margin: '10px 0 15px 0'
}

const styleContactMeTextarea = {
    color: '#8a7474',
    fontWeight: 'normal',
    fontSize: '20px',
    margin: '0 0 0 5px'
}

const styleContactMeLabels = {
    color: '#aaa',
    fontWeight: 'normal',
    fontSize: "18px",
    margin: '0 0 0 -3px'
}

const styleContactMeTextareaLabels = {
    color: '#aaa',
    fontWeight: 'normal',
    fontSize: "18px",
    margin: '0 0 0 -2px'
}

export const allInputs = {
    input: styleContactMeInput, 
    label: styleContactMeLabels, 
    margin: "0 0 2% 0", 
    "& .MuiOutlinedInput-root": {
        "& > fieldset": { borderColor: "white", borderRadius: '8px', transition: 'all .5s' },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": { borderColor: "#8a7474" }
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": { borderColor: "#aaa", transition: 'all .5s' }
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: '#8a7474'
    },
    "& .MuiFormHelperText-root": {
        textAlign: 'center'
    }
}

export const textAreas ={
    textarea: styleContactMeTextarea, 
    label: styleContactMeTextareaLabels, 
    margin: "0 0 3% 0",
    "& .MuiOutlinedInput-root": {
        "& > fieldset": { borderColor: "white", borderRadius: '8px', transition: 'all .5s' },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": { borderColor: "#8a7474" }
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": { borderColor: "#aaa", transition: "all .5s" }
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: '#8a7474'
    },
    "& .MuiFormHelperText-root": {
        textAlign: 'center'
    }
}