export const addSpecialRule = (spiritBoard, ruleName="", ruleEffect="") => {
	spiritBoard.specialRules.rules.push({
		id: spiritBoard.specialRules.rules.length,
		name: ruleName,
		effect: ruleEffect,
	});
	return spiritBoard;
};

export const removeSpecialRule = (spiritBoard, index, ruleName="", ruleEffect="") => {
	spiritBoard.specialRules.rules.splice(index, 1);
	spiritBoard.specialRules.rules.forEach((rule, i) => {
		rule.id = i
	})
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addGrowthSet = (spiritBoard, growthChoiceText="") => {
	spiritBoard.growth.growthSets.push({
		id: spiritBoard.growth.growthSets.length,
		choiceText: growthChoiceText,
		growthGroups: [],
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addGrowthGroup = (spiritBoard, setIndex, groupCost="",groupTint="") => {
	spiritBoard.growth.growthSets[setIndex].growthGroups.push({
		id: spiritBoard.growth.growthSets[setIndex].growthGroups.length,
		cost:groupCost,
		tint:groupTint,
		growthActions: [],
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addGrowthAction = (spiritBoard, setIndex, groupIndex, actionEffect="") => {
	spiritBoard.growth.growthSets[setIndex].growthGroups[groupIndex].growthActions.push({
		id: spiritBoard.growth.growthSets[setIndex].growthGroups[groupIndex].growthActions.length,
		effect: actionEffect,
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addEnergyTrackNode = (spiritBoard,nodeEffect="") => {
	spiritBoard.presenceTrack.energyNodes.push({
		id: spiritBoard.presenceTrack.energyNodes.length,
		effect: nodeEffect,
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addPlaysTrackNode = (spiritBoard,nodeEffect="") => {
	spiritBoard.presenceTrack.playsNodes.push({
		id: spiritBoard.presenceTrack.playsNodes.length,
		effect: nodeEffect,
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};


export const addInnatePower = (spiritBoard, powerName="", powerSpeed="", powerRange="",powerTarget="",powerTargetTitle="",powerNote="",) => {
	spiritBoard.innatePowers.powers.push({
		id: spiritBoard.innatePowers.powers.length,
		name: powerName,
		speed: powerSpeed,
		range: powerRange,
		target: powerTarget,
		targetTitle: powerTargetTitle,
		note: powerNote,
		noteShow:true,
		levels: [],
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};

export const addLevel = (spiritBoard, powerIndex, levelThreshold="", levelEffect="") => {
	spiritBoard.innatePowers.powers[powerIndex].levels.push({
		id: spiritBoard.innatePowers.powers[powerIndex].levels.length,
		threshold: levelThreshold,
		effect: levelEffect,
	});
	spiritBoard = spiritBoard;
	return spiritBoard;
};