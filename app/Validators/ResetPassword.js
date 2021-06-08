'use strict'

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
}

module.exports = ResetPassword
