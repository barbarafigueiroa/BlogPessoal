import {Usuario} from './Usuario';

export class Postagem {
    public id: number
    public titulo: string
    public text: string
    public data: Date
    public usuario: Usuario
}