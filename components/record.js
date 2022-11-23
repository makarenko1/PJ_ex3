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
            <ul style="list-style: none;">{
            record.laureates.map((laureate) => {
              if (laureate.knownName) {
                return <li key={laureate.id}>{laureate.knownName.en}</li>
              } else if (laureate.orgName) {
                return <li key={laureate.id}>{laureate.orgName.en}</li>
              } else {
                return <li key={laureate.id}>{laureate.fullName.en}</li>
              }
            })}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}