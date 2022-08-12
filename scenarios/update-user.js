const testcase = {
    description: '[@updateuser] Update User API Test',
    positive: {
        case1: '[@positive] Occupation & Nationality Updated and return status code 200',
    },
    negative: {
        case1: '[@negative] Update User with Age value 0 will fail and return status code 400'
    }
};

module.exports = {
    testcase
};