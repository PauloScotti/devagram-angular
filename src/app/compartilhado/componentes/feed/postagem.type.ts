import { ComentarioPostagem } from "./comentario-postagem.type"

export type Postagem = {
    _id: string,
    idUsuario: string,
    usuario?: {
        nome: string,
        avatar: string
    },
    descricao: string,
    foto: string,
    data: Date,
    likes: Array<string>,
    comentarios: Array<ComentarioPostagem>,
    estaCurtido?: boolean,
    quantidadeCurtidas?: number
}