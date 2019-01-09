export class DataService {
  public characters = [
    {name: 'Luke Sky', side: ''},
    {name: 'Dark Vador', side: ''},
    {name: 'winnie', side: ''},
    {name: 'gilbertte', side: ''}];

    getCharacters(chosenList) {
      if (chosenList === 'all') {
        return this.characters.slice();
      }
      return this.characters.filter((char) => {
        return char.side === chosenList;
      });
    }

    onSideChosen(charInfo) {
      const pos = this.characters.findIndex((char) => {
        return char.name === charInfo.name;
      });
        this.characters[pos].side = charInfo.side;
    }
}
