export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    //até aqui é o retorno da api
    //aqui para baixo serve apenas para poxy 
    //no mapping para passar para o combobox
    label:string;
    value:number;
}
