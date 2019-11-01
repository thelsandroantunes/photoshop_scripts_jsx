
main();

function main(){
	startRulerUnits = app.preferences.rulerUnits
	startTypeUnits = app.preferences.typeUnits
	startDisplayDialogs = app.displayDialogs

	app.preferences.rulerUnits = Units.INCHES
	app.preferences.typeUnits = TypeUnits.PIXELS
	app.displayDialogs = DialogModes.NO

	docWidthInInches = 4
	docHeightInInches = 2
	resolution = 72
	docName = "Bolsista"

	if (app.documents.length == 0) {
		app.documents.add(docWidthInInches, docHeightInInches, resolution, docName)
	}

	app.preferences.rulerunits = startRulerUnits
	app.preferences.typeunits = startTypeUnits
	app.displayDialogs = startDisplayDialogs
}
