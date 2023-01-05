import React from 'react';
import { Button } from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { FormControl } from '@mui/material/core/FormControl';
import { TextField } from '@mui/material/core/TextField';
import { FormHelperText } from '@mui/material/core/FormHelperText';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    height:30,
    padding: "0 10px",
    whitespace:'nowrap',
    margin: '15px 0 0 20px',
  },
  label: {
    width: '80%'}
})

// const formInput = () => {
//   return (
//     <div>formInput</div>
//   )
// }

const TodoCreator = ({theme, todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit 
}) =>{
  const classes = useStyles();
  return (
    <div className="form__input">
      <ThemeProvider theme={theme}>
        <FormControl className={classes.label}>
          <TextField id="outlined-basic" label="Enter your TASK Here" value={todo} variant= "outlined" 
          onChange={(e) => setTodo(e.target.value)}
          onFocus={clearInput}
          ref={inputRef}
          aria-describedby="component-error-text"
          onKeyPress={preventSubmit}
          />
          {isInputEmpty && <FormHelperText id="component-error-text">Please enter a task</FormHelperText>}
          </FormControl> 
          <Button
            type="submit"
            alt="add-note"
            className={classes.root}
            onKeyPress= {preventSubmit}
          >
            Add task
          </Button>
          </ThemeProvider>
    </div>
)}

export default TodoCreator;