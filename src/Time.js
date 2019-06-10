import React from 'react';
import { format } from 'date-fns'

function Time() {
  return (
    <div className="time">
       <span> {format(new Date(), 'DD/MM/YYYY')} </span>
    </div>
  );
}

export default Time;