import { Grid, Button } from "@mui/material";

export const CompletedTodo = (props) => {
  const { todos, onClick } = props;
  return (
    <Grid>
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <Grid
                container
                alignItems={"center"}
                // justifyContent={"center"}
                spacing={1}
                // key={index}
              >
                <p item style={{ paddingLeft: "10px" }}>
                  {todo}
                </p>
                <Button
                  item
                  xs={2}
                  variant="contained"
                  sx={{ ml: 1 }}
                  onClick={() => onClick(index)}
                >
                  戻す
                </Button>
              </Grid>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};
