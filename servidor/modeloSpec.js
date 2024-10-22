const modelo=require('./modelo.js');

describe('El sistema', function() { 
  let sistema; 

  beforeEach(function() { 
    sistema=new modelo.Sistema(); 
  });
  
  it("inicialmente no tiene usuarios",function(){
    let res=sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
  });
  it("comprobamos agregar usuario con nick",function(){
    expect(sistema.numeroUsuarios().num).toEqual(0);
    sistema.agregarUsuario("Pepe");
    let res=sistema.numeroUsuarios();
    expect(res.num).toEqual(1);
    res=sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(true);
  });
  it("comprobamos eliminar usuario",function(){
    sistema.agregarUsuario("Pepe");
    let res=sistema.eliminarUsuario("Pepe");
    expect(res.eliminado).toEqual(true);
    res=sistema.eliminarUsuario("Pepe");
    expect(res.eliminado).toEqual(false);
  });
  it("comprobar usuario activo",function(){
    let res=sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(false);
    sistema.agregarUsuario("Pepe");
    res=sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(true);
  });
  it("comprobar el método número de usuarios",function(){
    let res=sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
    sistema.agregarUsuario("Pepe");
    res=sistema.numeroUsuarios();
    expect(res.num).toEqual(1);
  });

});