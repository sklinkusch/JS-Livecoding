const fortune = (
  numch = 0,
  partn = "Jane Doe",
  loc = "space",
  job = "worker",
  area = 1
) => {
  return `You will be a ${job} in ${loc}, married to ${partn} with ${numch} kids living in a house of ${area} square meters.`;
};

let jobs = [
  "Doctor",
  "Drug dealer",
  "Murderer",
  "Pimp",
  "President",
  "Farmer",
  "Pope"
];
let geolocs = [
  "North Korea",
  "Japan",
  "the US",
  "Germany",
  "Italy",
  "Finland",
  "South Africa",
  "Argentina",
  "Mexico",
  "Vatican City",
  "Australia",
  "Thailand",
  "China"
];
let partners = [
  "a man",
  "a woman",
  "several men",
  "several women",
  "several women and men",
  "no one",
  "your pet",
  "your job"
];

let jobnr = Math.floor(jobs.length * Math.random());
let geonr = Math.floor(geolocs.length * Math.random());
let partnr = Math.floor(partners.length * Math.random());
let childnr = Math.floor(20 * Math.random());
let areanr = Math.floor(1000 * Math.random());

alert(fortune(childnr, partners[partnr], geolocs[geonr], jobs[jobnr], areanr));
