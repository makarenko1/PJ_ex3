export function filterData(prizes, key) {
    const filtered = prizes.filter((prize) => {
      if (key === "chemistry") {
        return prize.category.en === "Chemistry";
      } else if (key === "physics") {
        return prize.category.en === "Physics";
      } else if (key === "literature") {
        return prize.category.en === "Literature";
      } else if (key === "peace") {
        return prize.category.en === "Peace";
      } else if (key === "physiology-medicine") {
        return prize.category.en === "Physiology or Medicine";
      } else {
        return true;
      }
    });
    return filtered;
  }
  
  export function sortData(prizes, key) {
    if (key === "-") { return prizes; }

    const sorted = prizes.sort((a, b) => {
      if (a.awardYear > b.awardYear) {
        return key === "oldest-first" ? 1 : -1;
      }
      if (a.awardYear < b.awardYear) {
        return key === "newest-first" ? -1 : 1;
      }
      return 0;
    })
    return sorted;
  }