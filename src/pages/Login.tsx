
import { Typography, Container, Button } from '@mui/material';

function Login() {
  return (
    <Container>
      <header>
        <Typography variant="h1" color="primary">
          Página de Gisela Rodriguez Mayor
        </Typography>
      </header>

      <main>
        <Typography variant="h2" color="secondary">
          Página de Gisela Rodriguez Mayor
        </Typography>
        <Typography variant="h3" color="error">
          Página de Gisela Rodriguez Mayor
        </Typography>
        <Typography variant="subtitle1" color="success">
          Página de Gisela Rodriguez Mayor
        </Typography>
        <Typography variant="body1" color="text.primary">
          Página de Gisela Rodriguez Mayor
        </Typography>
        <Typography variant="caption" color="primary">
          Página de Gisela Rodriguez Mayor
        </Typography>

        <Button variant="text" color="primary">Text Button</Button>
        <Button variant="contained" color="secondary">Contained Button</Button>
        <Button variant="outlined" color="error">Outlined Button</Button>
      </main>

      <footer>
        <Typography variant="body2" color="text.secondary">
          © 2024 Gisela Rodriguez Mayor
        </Typography>
      </footer>
    </Container>
  );
}

export default Login;