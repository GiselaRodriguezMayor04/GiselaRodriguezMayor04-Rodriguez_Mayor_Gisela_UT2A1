import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  Autenticado: boolean;
  nombreUsuario: string;
  Rol: string;
}

const initialAuthState: AuthState = {
  Autenticado: false,
  nombreUsuario: '',
  Rol: ''
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      const { nombreUsuario, rol } = action.payload;
      state.Autenticado = true;
      state.nombreUsuario = nombreUsuario;
      state.Rol = rol;
    },
    logout: (state) => {
      state.Autenticado = false;
      state.nombreUsuario = '';
      state.Rol = '';
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
