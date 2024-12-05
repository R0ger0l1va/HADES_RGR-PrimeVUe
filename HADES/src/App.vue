<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/no-multi-spaces -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-indent -->



<script setup>

const text = ref("")
function toogleDarkMode(){
  document.documentElement.classList.toggle('my-app-dark');
}
import { ref, reactive, onMounted } from 'vue';
const showLogin = ref(false);

const toggleForm = () => {
  showLogin.value = !showLogin.value;
};

</script>

<template>
  <div class="flex flex-wrap gap-6 card">
    <InputText v-model="text" />
    <Button>HELLO</Button>
    <Chip label="LOVE" />
    <Chip label="YOU" />
    <Button
      label="Toogle Dark Mode"
      @click="toogleDarkMode"
    />
  </div>

  <div class="flex flex-wrap gap-2 card">
    <Chip label="Action" />
    <Chip label="Comedy" />
    <Chip label="Mystery" />
    <Chip
      label="Thriller"
      removable
    />
  </div>

  <div class="flex flex-wrap justify-center gap-4 card">
    <Button
      label="Primary"
      rounded
      variant="text"
    />
    <Button
      label="Secondary"
      severity="secondary"
      variant="text"
      raised
    />
    <Button
      label="Success"
      severity="success"
      variant="outlined"
    />
    <Button
      label="Search"
      rounded=""
      severity="info"
      icon="pi pi-search"
      aria-label="Search"
    />
    <Button
      v-slot="slotProps"
      as-child
    >
      <button
        v-bind="slotProps.a11yAttrs"
        class="px-6 py-3 font-bold text-white transition-all border-none rounded-lg cursor-pointer bg-gradient-to-tr from-black to-primary-700 active:from-primary-700 active:to-primary-900 hover:ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary"
      >
        SIGN UP
      </button>
    </Button>
    <Button variant="outlined" rounded severity="danger">
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
        <path
            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
            fill="black"
        />
        <path
            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
            fill="red"
        />
    </svg>
    </Button>
    
    <Button
      label="Warn"
      severity="warn"
    />
    <Button
      label="Help"
      severity="help"
    />
    <Button
      label="Danger"
      severity="danger"
    />
    <Button
      label="Contrast"
      severity="contrast"
    />
  </div>

  <div class="auth-container">
    <div class="flex min-h-screen align-items-center justify-content-center">
      <div class="w-full p-4 surface-card shadow-2 border-round lg:w-8">
        <Card class="p-0">
          <template #content>
            <div class="flex flex-column md:flex-row">
              <div class="w-full p-4 overflow-hidden md:w-8">
                <div class="form-container" :class="{ 'slide': showLogin }">
                  <!-- Registro Form -->
                  <div class="w-full register-form">
                    <h1 class="mb-4 text-4xl text-center">Crear Cuenta</h1>
                    <form @submit.prevent>
                      <div class="grid formgrid">
                        <div class="field col-12 md:col-6">
                          <label for="nombre_usuario" class="block">Nombre</label>
                          <InputText id="nombre_usuario" class="w-full" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="apellido_cliente" class="block">Apellido (Opcional)</label>
                          <InputText id="apellido_cliente" class="w-full" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="id_pais" class="block">País</label>
                          <Dropdown id="id_pais" class="w-full" placeholder="Seleccione un país" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="id_sexo" class="block">Sexo</label>
                          <Dropdown id="id_sexo" class="w-full" placeholder="Seleccione un sexo" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="edad" class="block">Edad</label>
                          <InputNumber id="edad" class="w-full" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="direccion_postal" class="block">Dirección Postal (Opcional)</label>
                          <InputText id="direccion_postal" class="w-full" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="telefono" class="block">Teléfono (Opcional)</label>
                          <InputText id="telefono" class="w-full" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="correo_electronico" class="block">Correo Electrónico</label>
                          <InputText id="correo_electronico" class="w-full" type="email" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="contrasenna" class="block">Contraseña</label>
                          <Password id="contrasenna" class="w-full" :feedback="false" :toggleMask="true" />
                        </div>
                        <div class="field col-12 md:col-6">
                          <label for="carnet_identidad" class="block">Carnet de Identidad (Opcional)</label>
                          <Password id="carnet_identidad" class="w-full" :feedback="false" :toggleMask="true" />
                        </div>
                      </div>
                      <Button label="Registrarse" type="submit" class="w-full mt-4" />
                    </form>
                  </div>
                  
                  <!-- Login Form -->
                  <div class="w-full login-form">
                    <h1 class="mb-4 text-4xl text-center">Iniciar Sesión</h1>
                    <form @submit.prevent>
                      <div class="field">
                        <label for="login_nombre_usuario" class="block">Nombre de Usuario</label>
                        <InputText id="login_nombre_usuario" class="w-full" />
                      </div>
                      <div class="mt-4 field">
                        <label for="login_contrasenna" class="block">Contraseña</label>
                        <Password id="login_contrasenna" class="w-full" :feedback="false" :toggleMask="true" />
                      </div>
                      <div class="flex mt-4 align-items-center justify-content-between">
                        <a class="font-medium no-underline cursor-pointer text-primary">¿Olvidaste tu contraseña?</a>
                      </div>
                      <Button label="Iniciar Sesión" type="submit" class="w-full mt-4" />
                    </form>
                  </div>
                </div>
              </div>
              <div class="flex w-full p-4 md:w-4 bg-primary flex-column align-items-center justify-content-center">
                <div class="text-center" :class="{'hidden': showLogin}">
                  <h2 class="mb-4 text-4xl text-white">¡Bienvenido!</h2>
                  <p class="mb-4 text-white">¿Ya tienes una cuenta?</p>
                  <Button label="Iniciar Sesión" class="p-button-outlined p-button-secondary" @click="toggleForm" />
                </div>
                <div class="text-center" :class="{'hidden': !showLogin}">
                  <h2 class="mb-4 text-4xl text-white">¡Hola, amigo!</h2>
                  <p class="mb-4 text-white">¿No tienes una cuenta?</p>
                  <Button label="Registrarse" class="p-button-outlined p-button-secondary" @click="toggleForm" />
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <Toast />
  </div>
</template>


<style scoped>
.auth-container {
  background: var(--surface-ground);
}

.bg-primary {
  background: linear-gradient(to right, var(--primary-color), var(--primary-color), #4caf50);
}

.form-container {
  display: flex;
  width: 200%;
  transition: transform 0.3s ease-in-out;
}

.register-form, .login-form {
  width: 100%;
}

.form-container.slide {
  transform: translateX(-50%);
}

.hidden {
  display: none;
}

@media screen and (max-width: 768px) {
  .form-container {
    width: 100%;
  }

  .register-form, .login-form {
    width: 100%;
  }

  .form-container.slide {
    transform: translateX(-100%);
  }
}
</style>