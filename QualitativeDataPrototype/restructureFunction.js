function restructure (data){
  let newArray = []
  for (let i = 0; i<data.length; i++){
    let newDatum = {}
    newDatum.Country = data[i].Country
    newDatum.Risks = {}
    newDatum.Risks.adolescentMotherhood = data[i].Risks.includes("Teenage pregnancy/adolescent motherhood");
    newDatum.Risks.lackofEducation = data[i].Risks.includes("Barriers to girls' education");
    newDatum.Risks.poorMaternityHealth = data[i].Risks.includes("Maternity related health risks");
    newDatum.Risks.maternalPoverty = data[i].Risks.includes("Maternity related income risks");
    newDatum.Risks.nonconsentualMarriage = data[i].Risks.includes("forced marriage");
    newDatum.Risks.seniorPoverty = data[i].Risks.includes("old age poverty");
    newDatum.Risks.singleMotherhood = data[i].Risks.includes("Single motherhood");
    newDatum.Risks.widowhood = data[i].Risks.includes("Widowhood");

    newArray.push(newDatum)
    }
  return newArray
  }
