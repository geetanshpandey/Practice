export const RevenueCard = ({ title, orderCount, amount }) => {
    return (
      <div className="bg-white rounded shadow-sm p-4 border">
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-2xl font-bold">${amount}</div>
          {orderCount ? (
            <div className="text-gray-500 text-sm">{orderCount} order(s) &gt;</div>
          ) : null}
        </div>
      </div>
    );
  };
  

