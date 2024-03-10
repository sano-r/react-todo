import { Grid, Button } from "@mui/material";

export const UncompletedTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <Grid>
      <p>未完了のTODO</p>
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
                <p style={{ paddingLeft: "10px" }}>{todo}</p>
                <Button
                  item
                  xs={2}
                  variant="contained"
                  sx={{ ml: 1 }}
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </Button>
                <Button
                  item
                  xs={2}
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1 }}
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </Button>
              </Grid>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};
