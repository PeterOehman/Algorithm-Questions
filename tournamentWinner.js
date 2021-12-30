function tournamentWinner(competitions, results) {
	let overallWinner
	let points = {}
  for (let i = 0; i < competitions.length; i++) {
		if (results[i] === 0) {
			let winner = competitions[i][1]
			points[winner] ? points[winner] += 3 : points[winner] = 3
		} else {
			let winner = competitions[i][0]
			points[winner] ? points[winner] += 3 : points[winner] = 3
		}
	}
	for (let key in points) {
		if (points[key] > points[overallWinner] || !overallWinner) {
			overallWinner = key
		}
	}
	return overallWinner
}
