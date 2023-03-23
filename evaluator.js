
let _scale;

const setEvaluationScale = scale => {

    _scale = scale;

}

const simpleTest = () => { return 'Ei ollutkaan piilossa???'}

const getGrade = points => {

    let grade = 0;

    if(!_scale) {
        return 'There is no evaluation scale defined.';
    }

    for(let i = 0; i < _scale.length; i++) {
        if (points >= _scale[i].points) {
            grade = _scale[i].grade;
        }
    }

    return grade;

}

module.exports.setEvaluationScale = setEvaluationScale;
module.exports.getGrade = getGrade;

// Alla on esimerkki scale-olio
// [{ grade: 1, points: 20},{ grade: 2, points: 35},{ grade: 3, points: 50},
// { grade: 4, points: 65},{ grade: 5, points: 80}]

