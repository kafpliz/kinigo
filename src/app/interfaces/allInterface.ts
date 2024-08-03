export interface Movie {
    name: string
    names: { name: string, language: string, type: string }[]
    description: string
    year: number
    shortDescription: string
    rating: { kp: number }
    poster: { url: string }
    backdrop: { url: string }
    genres: { name: string }[]
    persons: { id: number, photo: string, name: string, enName: string, enProfession: string }[]
    availableLanguages: string[]
    composer: { id: number, photo: string, name: string, enName: string, enProfession: string },
    director: { id: number, photo: string, name: string, enName: string, enProfession: string }
    movie : {link: string, photos:string}
}