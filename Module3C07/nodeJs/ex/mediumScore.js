function scored() {
    let student = [
        {
            name: "Ha",
            gender: 'female',
            poin: 8
        },
        {
            name: "Huy",
            gender: 'male',
            poin: 9
        },
        {
            name: "Hung",
            gender: 'male',
            poin: 7
        },
        {
            name: "Phuong",
            gender: 'female',
            poin: 6
        },
        {
            name: "Huyen",
            gender: 'female',
            poin: 10
        },
        {
            name: "Long",
            gender: 'male',
            poin: 5
        },
        {
            name: "Luan",
            gender: 'male',
            poin: 10
        },
        {
            name: "Linh",
            gender: 'female',
            poin: 8
        }

    ];
    let sumScoreMale = 0;
    let sumScoreFemale = 0;
    let countMale = 0;
    let countFemale = 0;
    for (let i = 0; i < student.length; i++) {
        if (student[i].gender === 'male') {
            sumScoreMale += student[i].poin;
            countMale++;
        } else if (student[i].gender === 'female') {
            sumScoreFemale += student[i].poin;
            countFemale++;
        }
    }
    console.log('male', sumScoreMale/countMale);
    console.log('female',sumScoreFemale/countFemale);
}
scored();