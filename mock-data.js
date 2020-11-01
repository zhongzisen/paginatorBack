const getData = function (total) {
    const data = [];
    for (let i = 0; i < total; i++){
        data.push({
            name: `name${i}`,
            age: `age${i}`,
            gender: `gender${i}`
        });
    }
    return { data, total }
}

exports = module.exports = getData;