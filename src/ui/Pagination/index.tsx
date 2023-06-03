import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons/arrowIcon";

type PaginationParams = { pagination: Pagination; handleNextResults: () => any; handlePrevResults: () => any };

const PaginationControll = ({ pagination, handleNextResults, handlePrevResults }: PaginationParams) => {
  const { offset, total, limit } = pagination;

  return (
    <div style={{ margin: "1rem 0", display: "flex", gap: "1rem", justifyContent: "center" }}>
      {offset > 0 && <ArrowLeftIcon onClick={handlePrevResults} style={{ cursor: "pointer" }} />}
      {total > limit + offset && <ArrowRightIcon onClick={handleNextResults} style={{ cursor: "pointer" }} />}
    </div>
  );
};

const Pagination = ({ setNewData, fetcher }: { setNewData: (any: any) => any; fetcher: (any: any) => any }) => {
  const [pagination, setPagination] = useState<QueryOptions | any>({ limit: 7, offset: 0, order: "desc" });
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromApi = await fetcher({ limit: pagination.limit, offset: pagination.offset, order: "desc" });

      if (dataFromApi?.hits.length) {
        setNewData(dataFromApi);
        setPagination(dataFromApi.pagination);
      }
    };

    fetchData();
  }, [hasFetchedData]);

  const handleNextResults = () => {
    setPagination({ offset: pagination.offset + pagination.limit, limit: 7 });
    setHasFetchedData(!hasFetchedData);
  };

  const handlePrevResults = () => {
    const newOffset = pagination.offset - pagination.limit;
    setPagination({ offset: Math.max(newOffset, 0), limit: 7 });
    setHasFetchedData(!hasFetchedData);
  };

  return <PaginationControll pagination={pagination} handlePrevResults={handlePrevResults} handleNextResults={handleNextResults} />;
};

export default Pagination;
