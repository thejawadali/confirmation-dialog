import { defineStore } from 'pinia'


export const useConfirmationStore = defineStore( {
  id: 'confirmationStore',
  state: () => {
    return {
      show: false,
      resolveFn: null,
      title: "",
      detail: "",
      confirmBtn: "",
      denyBtn: ""
    }
  },
  actions: {
    openDialog ( { title, detail, confirmBtn = "Yes", denyBtn = "No" } ) {
      this.title = title
      this.detail = detail
      this.show = true
      this.confirmBtn = confirmBtn
      this.denyBtn = denyBtn
      return new Promise( ( resolve ) => {
        this.resolveFn = resolve
      } )
    },
    confirm () {
      this.resolveFn( true )
      this.show = false
    },
    cancel () {
      this.resolveFn( false )
      this.show = false
    }
  }
} )