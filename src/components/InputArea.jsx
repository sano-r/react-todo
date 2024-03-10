import { Grid, TextField, Button } from "@mui/material";

export const InputArea = (props) => {
  const { inputTodo, onChange, onClick, disabled } = props;
  console.log(props);
  return (
    <Grid
      container
      spacing={2}
      // justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={4}>
        <TextField
          type="text"
          placeholder="TODOを追加"
          value={inputTodo}
          onChange={onChange}
          fullWidth
          disabled={disabled}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={onClick} disabled={disabled}>
          追加
        </Button>
      </Grid>
    </Grid>
  );
};
