import React, { useEffect, useState } from 'react';
export const makeColorSwatches = (colorSet) => {
  if(colorSet.length) {
    return colorSet.map((color, i) => {
      let key = (color.matchType + (Number(i) + 1));
      return (
        <div key={key} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }}>
          <aside>
            <strong>{(color.matchType)}</strong> hsl({(color.h).toFixed(0)}, {(color.s * 100).toFixed(2)}%, {(color.l * 100).toFixed(2)}%)
          </aside>
        </div>
      );
    });
  }
};
