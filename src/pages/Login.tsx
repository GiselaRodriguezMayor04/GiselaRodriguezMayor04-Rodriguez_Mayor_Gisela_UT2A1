import { Typography, Button, Card, Box, TextField, IconButton } from '@mui/material';
import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [data, setData] = useState({ nombre: '', contraseña: '', corresponden: 0 });

  const bduser = 'Gisela';
  const bdpasswd = '1234';

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (data.nombre === bduser && data.contraseña === bdpasswd) {
      setData({ ...data, corresponden: 1 });
      console.log(`Usuario: ${data.nombre}, Contraseña: ${data.contraseña}`);
      
      navigate("/Home");

      dispatch(authActions.login({ nombreUsuario: data.nombre, rol: 'administrador' }));
    } else {
      setData({ ...data, corresponden: 2 });
      console.log(`Usuario: ${data.nombre}, Contraseña: ${data.contraseña}`);
    }
  };

  return (
    <>
      <Card elevation={3} square sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h5">Sistema de acceso</Typography>
        <IconButton>
          <LockIcon />
        </IconButton>
      </Card>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={data.nombre}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
          fullWidth
          required
          sx={{ mb: 2 }}
        />

        <TextField
          label="Contraseña"
          variant="outlined"
          value={data.contraseña}
          onChange={(e) => setData({ ...data, contraseña: e.target.value })}
          type="password"
          fullWidth
          required
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth type="submit">
          Acceder
        </Button>

        {data.corresponden !== 0 && (
          <Alert severity={data.corresponden === 1 ? "success" : "error"} sx={{ mt: 2 }}>
            {data.corresponden === 1 ? "Acceso concedido" : "Usuario y/o contraseña incorrecta"}
          </Alert>
        )}
      </Box>
    </>
  );
}

export default Login;
