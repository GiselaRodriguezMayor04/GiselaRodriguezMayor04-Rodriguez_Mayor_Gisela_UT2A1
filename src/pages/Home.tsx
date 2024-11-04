import { Button, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Mensaje simplificado */}
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Esta es la página home de Gisela
      </Typography>
      <Button sx={{ width: '20px' }} onClick={handleClick} variant="outlined" fullWidth>
        Salir
      </Button>
    </Container>
  );
}

export default Home;
