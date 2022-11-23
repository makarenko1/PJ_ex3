export default function Record({ record }) {

//   const listItems = record.laureates.map((laureate) => {
//     if (laureate.knownName) {
//     <li key={laureate.id}>{laureate.knownName.en}</li>
//   } else if (laureate.orgName) {
//     <li key={laureate.id}>{laureate.orgName.en}</li>
//   } else {
//     <li key={laureate.id}>{laureate.fullName.en}</li>
//   }
// });    

  return (
    <div className="item card">
      <div className="content card-content">
        <div className="row">
          <div className="item card-title">
            <h2 className="content">{record.category.en}</h2>
            <p className="text">
              Prize amount (adj): {record.prizeAmountAdjusted}<br />
              Year: {record.awardYear}</p>
            {/* <ul style="list-style: none;">{listItems}</ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}