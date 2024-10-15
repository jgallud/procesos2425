const modelo=require('./modelo.js');

describe('El sistema', function() { 
  let sistema; 

  beforeEach(function() { 
    sistema=new modelo.Sistema(); 
  });
  
  it("inicialmente no tiene usuarios",function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
  });
  it("comprobamos agregar usuario con nick",function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.numeroUsuarios()).toEqual(1);
    expect(sistema.usuarioActivo("Pepe")).toEqual(true);
  });
  xit("comprobamos eliminar usuario",function(){
    //comprobar que no hay usuarios
    //agregamos un usuario
    //comprobamos que el usuario creado está en el sistema
    //eliminamos el usuario
    //comprobamos que el usuario eliminado no está en el sistema
  });
  xit("comprobar usuario activo",function(){
    //comprobar que no hay usuarios
    //agregamos un usuario
    //comprobamos que el usuario creado está en el sistema
    //comprobar un usuario que no existe
  });
  xit("comprobar el método número de usuarios",function(){
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor por numeroUsuarios() es igual anterior
  });

});