export type UsuarioDevagram = {
    [x: string]: any
    _id: string,
    nome: string,
    email: string,
    avatar: string,
    seguidores: Array<string>,
    seguindo: Array<string>,
    publicacoes: number
}