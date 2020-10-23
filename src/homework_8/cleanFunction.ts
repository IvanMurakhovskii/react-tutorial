// 1. Лучшая команда (наибольшее кол-во очков), выводим имя
type Team = {
    name: string,
    score: number
};

const teams: Team[] = [
    { name: 'Lions', score: 5 },
    { name: 'Tigers', score: 4 },
    { name: 'Bears', score: 6 },
    { name: 'Monkeys', score: 2 },
]

const getTopName = (teams: Team[]): string => {
    const result = teams.reduce((team, currentTeam) => {
        if (team.score > currentTeam.score) return team;
        return currentTeam;
    }).name;

    return result;
}

const topTeamName: string = getTopName(teams);
console.log(`Top team name is ${topTeamName}`);

// 2.Querystring из объекта

const qsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value"
}

// '?page=2&amp;pageSize=10&amp;total=205&amp;somethingElse=value'
const createQs = (qsObj: any) => {
    return '?' + Object.keys(qsObj).map(k => {
        return k + '=' + qsObj[k];
    }).join('&');
}
const query = createQs(qsObj);
console.log(query);

// 3. Объект из querystring
const qs = '?page=2&pageSize=10&total=205&somethingElse=value'

// { page: '2', pageSize: '10', total: '205', somethingElse: 'value' }
const parseQs = (qs: string) => {
   return qs.slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, [key, value]) => {
        return ({...obj, [key]: value})
    }, {});
}
const result = parseQs(qs);
console.log(result);
