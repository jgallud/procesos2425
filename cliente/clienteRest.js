function ClienteRest(){
    
    this.agregarUsuario=function(nick){
        let cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            console.log(data);
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick ya está ocupado");
            }
        });
    }
    this.agregarUsuario2=function(nick){
        //TODO
    }
    this.obtenerUsuarios=function(){
        let cli=this;
        $.getJSON("/obtenerUsuarios",function(lista){
            console.log(lista)
        });
    }
    this.numeroUsuarios=function(){
        let cli=this;
        $.getJSON("/numeroUsuarios",function(respuesta){
            console.log("Numero usuarios: "+respuesta.num);
        });
    }
    this.usuarioActivo=function(nick){
        let cli=this;
        $.getJSON("/usuarioActivo/"+nick,function(data){
            if (!data.activo){
                console.log("Usuario "+nick+" no está activo")
            }
            else{
                console.log("Usuario "+nick+" está activo")
            }
        });
    }
    this.eliminarUsuario=function(nick){
        let cli=this;
        $.getJSON("/eliminarUsuario/"+nick,function(data){
            if (!data.eliminado){
                console.log("Usuario "+nick+" no ha sido eliminado")
            }
            else{
                console.log("Usuario "+nick+" ha sido eliminado")
            }
        });
    }
}
    