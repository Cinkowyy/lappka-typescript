import React from "react";

interface detailProps {
  detailName: string;
  value: string;
}

const Detail: React.FC<detailProps> = ({ detailName, value }) => {
  return (
    <div className="detail">
      <p className="detail-value">{value}</p>
      <p className="detail-name">{detailName}</p>
    </div>
  );
};

export default Detail;
