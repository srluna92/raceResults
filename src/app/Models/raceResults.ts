export interface RaceResults {
  name: {
    first: string,
    last: string
  },
  bib: number,
  time: {
    swim: string,
    transition1: string,
    bike: string,
    transition2: string,
    run: string,
    total: string
  },
  distance: {
    swim: string,
    transition1: string,
    bike: string,
    transition2: string,
    run: string
  }
  team: string
}
