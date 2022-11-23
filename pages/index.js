import { useState } from "react";
import DataIntro from "../components/data-intro";
import Message from "../components/message";
import RecordList from "../components/record-list";
import { useApiData } from "../hooks/data";
import { filterData, sortData } from "../utils";

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();
  const [sortKey, setSortKey] = useState("-");
  const [filterKey, setFilterKey] = useState("-");

  function getDataQueryKeys(event) {
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "data-filter") {
      setFilterKey(event.target.value);
    }
  }

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  const prizes = filterData(sortData(data.nobelPrizes, sortKey), filterKey);

  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} />
      <RecordList records={prizes} />
    </>
  )
}
