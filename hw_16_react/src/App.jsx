import { useState } from 'react';
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function App() {
  const [openDialogWindow, setopenDialogWindow] = useState(false);
  const changeStateDialogWindow = () => {
    setopenDialogWindow((prev) => !prev);
  };
  return (
    <div>
      <AppBar position="static" style={{ marginBottom: '40px' }}>
        <Typography style={{ padding: '20px' }}>Material UI Task</Typography>
      </AppBar>

      <Container
        style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Typography>Добро пожаловать!</Typography>
        <Button
          style={{ width: '20%' }}
          onClick={() => changeStateDialogWindow()}
          variant="contained">
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog
        open={openDialogWindow}
        keepMounted
        // onClose={changeStateDialogWindow}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{'Boo! Dialog window!)'}</DialogTitle>
        <DialogActions>
          <Button onClick={changeStateDialogWindow}>Disagree</Button>
          <Button onClick={changeStateDialogWindow}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
