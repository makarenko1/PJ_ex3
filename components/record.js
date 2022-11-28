export default function Record({ record }) {

//   const listItems = record.laureates.map((laureate) => {
//     if (laureate.knownName) {
//     return laureate.knownName.en
//   } else if (laureate.orgName) {
//     return laureate.orgName.en
//   } else {
//     return laureate.fullName.en
//   }
// });

// console.log(listItems);

  return (
    <div className="item card">
      <div className="content card-content">
        <div className="row">
          <div className="item card-title">
            <h2 className="content">{record.category.en}</h2>
            <p className="text">
              Prize amount (adj): {record.prizeAmountAdjusted}<br />
              Year: {record.awardYear}</p>
            <ul>{
              record.laureates.map((laureate, i) => {
              const name = laureate.knownName || laureate.orgName || laureate.fullName
              let displayedName = ""
              if (name) {
                displayedName = name.en
              }
              return <li key={i}>{displayedName}</li>
            })}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}