export interface Info{
    nombre      : string,
    titulo      : string,
    descripcion : string,
    imagen      : string,
    enlace      : string,
    codigo      : number
}
export interface Menu{
    seccion     : string
    categoria   : Array<string>, 
    imagenes    : Array<string>
}
export interface Footer{
    titulo : string,
    enlace : string
}
