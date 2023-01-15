import React from 'react';

export default function ResultText({groutCountResult}) {
  return (
    <div className="results">
        <>{groutCountResult.current > 0 && <p>Z podanych danych wynika, że potrzebujesz {groutCountResult.current} kg/m2 fugi</p>}
        </>
    </div>
  );
}

