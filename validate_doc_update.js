function (newDoc, oldDoc, userCtx) {
  function forbidden(message) {    
    throw({forbidden : message});
  };
  
  function unauthorized(message) {
    throw({unauthorized : message});
  };

  if (userCtx.roles.indexOf('_admin') == -1) {
    // only admins can edit or add anything...
      forbidden("You may not edit this database.");     
  }
};
