const activities = [
  { title: "Hiking", date: "2019-06-28" },
  { title: "Shopping", date: "2019-06-10" },
  { title: "Trekking", date: "2019-06-22" }
];

const sortedActivities = activities.sort(function(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

console.log(sortedActivities);


// sort alpha
// objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));