import Record from "./record";

export default function RecordList({ records }) {
  return (
    <div className="row">
      {records.map((record, i) => {
        return <Record key={i} record={record} />
      })}
    </div>
  )
}