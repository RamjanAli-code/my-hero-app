import React from 'react';
import {
  BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,
} from "recharts";
const Rating = ({ratings}) => {
    return (
            <div className="w-full h-80 bg-white p-4   shadow-md">
      <h2 className="text-lg font-semibold mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 20, right: 40, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#ff8800" barSize={25} square={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
};

export default Rating;