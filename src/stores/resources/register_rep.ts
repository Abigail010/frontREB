import { defineStore } from 'pinia';
import { router } from '@/router';
import siibApi from "@/api/siibApi"

const userLogged = JSON.parse(localStorage.getItem('user') || '').cedula_identidad

export const useRegisterRStore = defineStore({
  id: 'RegisterR',
  actions: {

    // OBTENER LISTA DE DELITOS
    async getRegisterRs () {
      try {
        const { data } = await siibApi.get('register/getRegisters')
        return data
      } catch (error: any) {
        const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
        return { ok: false, message: message }
      }
    },

     // OBTENER INFORMACION DE DELITO POR ID
     async RegisterR (id: any) {
      try {
        console.log(id)
        const { data } = await siibApi.get('register/Register/' + id)
        return data
      } catch (error: any) {
        const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
        return { ok: false, message: message }
      }
    },
     // OBTENER INFORMACION DE DELITO POR ID
     async infoR (id: any) {
        try {
          console.log(id)
          const { data } = await siibApi.get('register/info/' + id)
          return data
        } catch (error: any) {
          const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
          return { ok: false, message: message }
        }
      },

    // CREAR DELITO
    async createRegisterR(form: any) {
      try {
        const { data } = await siibApi.post('register/create_Register/' + userLogged, form)
        router.push({ name: 'registerList' });
        return { ok: true, message: data.message }
      } catch (error: any) {
        const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
        return { ok: false, message: message }
      }
    },
    async updateInfo(form: any) {
        try {
          const { data } = await siibApi.post('register/update_info/' + userLogged, form)
         // router.push({ name: 'registerList' });
          return {
            ok: true,
            message: data.message,
          }
        } catch (error: any) {
          const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
          return { ok: false, message: message, id: 0}
        }
      },
    // ACTUALIZAR DELITO
    async updateRegisterR(form: any) {
      try {
        const { data } = await siibApi.post('register/update_Register/' + userLogged, form)
        router.push({ name: 'registerList' });
        return {
          ok: true,
          message: data.message,
          
        }
      } catch (error: any) {
        const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
        return { ok: false, message: message, id: 0}
      }
    },

    // ELIMINAR DELITO
    async deleteRegisterR(form: any) {
      try {
        const { data } = await siibApi.post('register/delete_RegisteR/' + userLogged, form)
        router.push({ name: 'registerList' });
        return {
          ok: true,
          message: data.message,
          id: data.id
        }
      } catch (error: any) {
        const message = (error.response.data ? error.response.data.message : 'error: sin conexion')
        return { ok: false, message: message, id: 0}
      }
    },

  }

});