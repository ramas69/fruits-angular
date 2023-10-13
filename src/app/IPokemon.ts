

export interface IPokemon{
    id:number,
    name:string,
    image:string
    stats:{
        HP:number,
        attack:number,
        defense:number,
        special_attack:number,
        special_defense:number,
        spee:number
    }
    apiTypes:[{
        name:string,
        image:string
    }],
    evolution:[]
}