var not_used = ['abate', 'aberrant', 'abeyance', 'abscond', 'abstemious', 'admonish', 'adulterate',
'aesthetic', 'aggregate', 'alacrity', 'alleviate', 'amalgamate', 'ambiguous', 'ambivalence', 'ameliorate', 
'anachronism', 'analogous', 'anarchy', 'anomalous', 'antipathy', 'apathy', 'appease', 'apprise', 
'approbation', 'appropriate', 'arduous', 'artless', 'ascetic', 'assiduous', 'assuage', 'attenuate', 
'austere', 'autonomous', 'aver', 'banal', 'belie', 'beneficent', 'bolster', 'bombastic', 'boorish', 
'burgeon', 'burnish', 'buttress', 'cacophonous', 'capricious', 'castigation', 'caustic', 'chicanery', 
'coagulate', 'coda', 'cogent', 'commensurate', 'compendium', 'complaisant', 'compliant', 'conciliatory', 
'condone', 'confound', 'connoisseur', 'contention', 'contentious', 'contrite', 'conundrum', 'converge', 
'convoluted', 'craven', 'daunt', 'decorum', 'default', 'deference', 'delineate', 'denigrate', 'deride', 
'derivative', 'desiccate', 'desultory', 'deterrent', 'diatribe', 'dichotomy', 'diffidence', 'diffuse', 
'digression', 'dirge', 'disabuse', 'discerning', 'discordant', 'discredit', 'disingenuous', 'disinterested', 
'disjointed', 'dismiss', 'disparage', 'disparate', 'dissemble', 'disseminate', 'dissolution', 'dissonance', 
'distend', 'divest', 'document', 'dogmatic', 'dormant', 'dupe', 'ebullient', 'eclectic', 'efficacy', 
'effrontery', 'elegy', 'elicit', 'embellish', 'empirical', 'emulate', 'endemic', 'enervate', 'engender', 
'enhance', 'ephemeral', 'equanimity', 'equivocate', 'erudite', 'esoteric', 'eulogy', 'euphemism', 
'exacerbate', 'exculpate', 'exigency', 'extrapolation', 'facetious', 'facilitate', 'fallacious', 
'fatuous', 'fawning', 'felicitous', 'fervour', 'flag', 'fledgling', 'flout', 'foment', 'forestall', 
'frugality', 'futile', 'gainsay', 'garrulous', 'goad', 'gouge', 'grandiloquent', 'gregarious','guileless', 
'gullible', 'harangue', 'homogeneous', 'hyperbole', 'iconoclastic', 'idolatry', 'immutable', 'impair', 
'impassive', 'impede', 'impermeable', 'imperturbable', 'impervious', 'implacable', 'implicit', 'implode', 
'inadvertently', 'inchoate', 'incongruity', 'inconsequential', 'incorporate', 'indeterminate', 'indigence', 
'indolent', 'inert', 'ingenuous', 'inherent', 'innocuous', 'insensible', 'insinuate', 'insipid', 'insularity',
'intractable', 'intransigence', 'inundate', 'inured', 'invective', 'irascible', 'irresolute', 'itinerary', 
'laconic', 'lassitude', 'latent', 'laud', 'lethargic', 'levee', 'levity', 'log', 'loquacious', 'lucid', 
'luminous', 'magnanimity', 'malingerer', 'malleable', 'maverick', 'mendacious', 'metamorphosis', 'meticulous',
'misanthrope', 'mitigate', 'mollify', 'morose', 'mundane', 'negate', 'neophyte', 'obdurate', 'obsequious', 
'obviate', 'occlude', 'officious', 'onerous', 'opprobrium', 'oscillate', 'ostentatious', 'paragon', 
'partisan', 'pathological', 'paucity', 'pedantic', 'penchant', 'penury', 'perennial', 'perfidious',
'perfunctory', 'permeable', 'pervasive', 'phlegmatic', 'piety', 'placate', 'plasticity', 'platitude',
'plethora', 'plummet', 'porous', 'pragmatic', 'preamble', 'precarious', 'precipitate', 'precursor', 
'presumptuous', 'prevaricate', 'pristine', 'probity', 'problematic', 'prodigal', 'profound', 'prohibitive',
'proliferate', 'propensity', 'propitiate', 'propriety', 'proscribe', 'pungent', 'qualified', 'quibble',
'quiescent', 'rarefied', 'recalcitrant', 'recant', 'recluse', 'recondite', 'refractory', 'refute', 
'relegate', 'reproach', 'reprobate', 'repudiate', 'rescind', 'resolution', 'resolve', 'reticent', 'reverent',
'sage', 'salubrious', 'sanction', 'satiate', 'savor', 'secrete', 'shard', 'skeptic', 'solicitous',
'soporific', 'specious', 'spectrum', 'sporadic', 'stigma', 'stint', 'stipulate', 'stolid', 'striate',
'strut', 'subpoena', 'subside', 'substantiate', 'supersede', 'supposition', 'tacit', 'tangential',
'tenuous', 'tirade', 'torpor', 'tortuous', 'tractable', 'transgression', 'truculence', 'unwarranted',
'vacillate', 'venerate', 'veracious', 'verbose', 'viable', 'viscous', 'vituperative', 'volatile',
'wary', 'welter', 'whimsical', 'zealot', 'audacious', 'discredit', 'discrepancy', 'diverge',
'saturate', 'distill'];
var cur_in_use = [];
var succ_typed = [];
not_used.push('ToBe');
cur_in_use.push('Current');
succ_typed.push('TypedAh?');
not_used.push('mayI?');

function select_word(){
	var r = Math.random()
	var word_index = parseInt(r*((not_used.length)-1));
	var word = not_used[word_index];
	cur_in_use.push(word);
	not_used.splice(word_index, 1);
	return word;
}

function success_typed(word){
	var index = cur_in_use.indexOf(word);
	if(index> -1){
		succ_typed.push(word);
		cur_in_use.splice(index, 1);	
	}
	else(console.log("Error in moving succ_typed word to succ_typed."));	
}

function not_succ_typed(word){
	var index = cur_in_use.indexOf(word);
	if(index> -1){
		not_used.push(word);
		cur_in_use.splice(index, 1);	
	}
	else(console.log("Error in moving unsucc_typed word to not_used."));
}

//TESTING BLOCK{
if(not_used.indexOf('ToBe'> -1)){
	console.log("success");
}
else{
	console.log("fail");
}
console.log(not_used);
var x = select_word();
console.log(x);
console.log(cur_in_use);
//}