interface IDocente {
  nome: String,
  cognome: String
}
export const listaDocenti : Array<IDocente> = [
    {
      "nome": "Mario",
      "cognome": "Rossi"
    },
    {
      "nome": "Luca",
      "cognome": "Bianchi"
    },
    {
      "nome": "Giulia",
      "cognome": "Verdi"
    },
    {
      "nome": "Sara",
      "cognome": "Gallo"
    },
    {
      "nome": "Marco",
      "cognome": "Ferrari"
    },
    {
      "nome": "Anna",
      "cognome": "Russo"
    },
    {
      "nome": "Paolo",
      "cognome": "Lombardi"
    },
    {
      "nome": "Francesca",
      "cognome": "Romano"
    },
    {
      "nome": "Andrea",
      "cognome": "Conti"
    },
    {
      "nome": "Laura",
      "cognome": "Gatti"
    },
    {
      "nome": "Alessandro",
      "cognome": "Barbieri"
    },
    {
      "nome": "Martina",
      "cognome": "Mancini"
    },
    {
      "nome": "Stefano",
      "cognome": "Moretti"
    },
    {
      "nome": "Chiara",
      "cognome": "De Angelis"
    },
    {
      "nome": "Roberto",
      "cognome": "Marino"
    },
    {
      "nome": "Valentina",
      "cognome": "Ferri"
    },
    {
      "nome": "Giovanni",
      "cognome": "Caruso"
    },
    {
      "nome": "Elena",
      "cognome": "Santoro"
    },
    {
      "nome": "Davide",
      "cognome": "Rizzo"
    },
    {
      "nome": "Simona",
      "cognome": "Farina"
    },
    {
      "nome": "Fabio",
      "cognome": "Longo"
    },
    {
      "nome": "Cristina",
      "cognome": "Pellegrini"
    },
    {
      "nome": "Pietro",
      "cognome": "Guerini"
    },
    {
      "nome": "Marta",
      "cognome": "Serra"
    },
    {
      "nome": "Lorenzo",
      "cognome": "Falcone"
    },
    {
      "nome": "Elisa",
      "cognome": "Greco"
    },
    {
      "nome": "Federico",
      "cognome": "Ricci"
    },
    {
      "nome": "Silvia",
      "cognome": "Monti"
    },
    {
      "nome": "Riccardo",
      "cognome": "Vitale"
    },
    {
      "nome": "Veronica",
      "cognome": "Mazza"
    }
  ].sort((a,b)=>a.cognome>b.cognome? 1 : -1)

export function getDocente(id: number): IDocente{
  return listaDocenti[id]
}
