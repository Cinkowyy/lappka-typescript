import React from "react";

import { detailProps } from "interfaces";

const Detail: React.FC<detailProps> = ({ detailName, value }) => {
  return (
    <div className="detail">
      <p className="detail-value">{value}</p>
      <p className="detail-name">{detailName}</p>
    </div>
  );
};

export default Detail;
