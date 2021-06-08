'use strict'

const Antl = use('Antl')
class ResetPassword {
  get validateAll () {
    return true;
  }
  
  get rules () {
    return {
      email: 'required',
      redirect_url: 'required|confirmed',
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
