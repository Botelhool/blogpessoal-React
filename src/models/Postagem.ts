import type Tema from "./Tema"; //quando tiver type no import significa que você está importando dados
import type Usuario from "./Usuario";

export default interface Postagem{
    id:number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    usuario: Usuario | null;
}