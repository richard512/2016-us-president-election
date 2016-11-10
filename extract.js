lines = []
for (istate in jsondata.president.races) {
    state = jsondata.president.races[istate].state
    polis = {}
    for (irace in jsondata.president.races[istate].current.vote_share_expected) {
        lines.push({
            state: state,
            candidate: irace,
            share: jsondata.president.races[istate].current.vote_share_expected[irace][0]
        })
    }
}
console.log(lines)
