export function CardLoading() {
  return (
    <div className="animate-pulse rounded-lg bg-gray-300 p-4 shadow-md">
      <div className="space-y-4 py-1">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
