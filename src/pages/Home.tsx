import React from 'react';
import { Button, Typography, Container} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Home() {
  const userData = useSelector((state: RootState) => state.authenticator)
  console.log(userData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(authActions.logout())
    navigate('/')
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
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Home de Gisela Rodríguez: Soy el usuario {userData.userName} y tengo el rol de {userData.userRol}
      </Typography>
      <Button sx={{ width: '20px' }} onClick={handleClick} variant="outlined" fullWidth>
        Salir
      </Button>
    </Container>
  );
}

export default Home;