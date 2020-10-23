// 1. Поменять объект

type OriginalTeam = {
    size: number,
    name: string,
    league: string
}

type ExpectedTeam = {
    name:string,
    league: string,
    roster: number, 
}

const originalTeam: OriginalTeam = {
size: 15,
name: 'Tampa Bay Roosters',
league: 'Minor'
}

const expectedTeam: ExpectedTeam = {
name: 'New York Badgers',
league: 'Minor',
roster: 25,
}

const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => {
    const {size, ...team} = originalTeam;
    const expectedTeam: ExpectedTeam = {...team, roster: size};
    return expectedTeam;

}

const team: ExpectedTeam = originalTeamToExpectedTeam(originalTeam);
console.log(team);

// 2. Поменять массив

const originalArray = [1, 2, 3, 4]

const expectedArray = ['two', 3, 4, 5]

const originalArrayToExpectedArray = (originalArray: any) => {
    return ['two', ...originalArray];
}
const resultArray = originalArrayToExpectedArray(originalArray);
console.log(resultArray);

// 3. Поменять глубокий объект

type DeepTeam = {
    name: string;
    captain: {
      name: string;
      age: number;
    };
  };

const deepOriginalTeam: DeepTeam = {
name: 'Tampa Bay Roosters',
captain: {
        name: 'Bryan Downey',
        age: 27
    }
}

const deepExpectedTeam: DeepTeam = {
name: 'Tampa Bay Roosters',
captain: {
        name: 'Bryan Downey',
        age: 28
    }
}

const deepOriginalTeamToDeepExpectedTeam = (originalTeam: DeepTeam) => {
    const {captain: copyCaptain} = originalTeam;

    copyCaptain.age = 28;

    return {...originalTeam, captain: copyCaptain}
}
const deepTeam = deepOriginalTeamToDeepExpectedTeam(deepOriginalTeam);
console.log(deepTeam);
