export interface Data {    
    results: Array<Characters>
}

export interface Characters {
    id: number,
    name: string,
    species: string,
    image: string
}