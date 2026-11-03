export function leagueOfLegendsValidator(control:any) {
  if(control.value.toLowerCase().trim() === "league of legends") {
    return {leagueOfLegends:true};
  } else {
    return null;
  }
}
