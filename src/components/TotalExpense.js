import React from 'react';
const TotalExpense = ({ expense }) => {
  let arr = [];
  if (expense) {
    expense.map(res => {
      arr.push(res.amount);
    });

    const printTotal = () => {
      let round;
      let percent;
      // or return arr.reduce...
      const x = arr.reduce((total, res) => {
        total += parseFloat(res);
        return total;
      }, 0);
      round = x.toFixed(2);
      percent = round;
      return round;
    };
    const percentage = partialValue => {
      const newVal = printTotal();
      const totalValue = 2000;
      return ((100 * newVal) / totalValue).toFixed(2);
    };

    return (
      <div className='card summary-card mt-4'>
        <div className='top'>
          <i className='fas fa-hand-holding-usd brand-color'></i>
          <div className='info'>
            <p className='text-muted mb-1'>Total expense</p>
            <h4
              className={`font-weight-bold text-${
                percentage() > 100 ? 'danger' : ''
              }`}
            >
              ${printTotal()}
            </h4>
          </div>
        </div>
        <div className='card-body'>
          <div className='progress'>
            <div
              aria-valuemax='100'
              aria-valuemin='0'
              aria-valuenow='0'
              className={`progress-bar spcl-${
                percentage() <= 25
                  ? 'success'
                  : percentage() > 25 && percentage() <= 50
                  ? 'message'
                  : percentage() > 50 && percentage() <= 70
                  ? 'warning'
                  : 'danger'
              }`}
              role='progressbar'
              style={{ width: `${percentage()}%` }}
            ></div>
          </div>
          <p className='card-text mt-2'>
            You spent <strong>{percentage()}%</strong> of your{' '}
            <strong>$2000.00</strong> budget.
          </p>
          {percentage() > 100 ? (
            <p className='text-danger'>
              <i className='fas fa-lightbulb'></i> You have spent more than you
              planned.
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }

  return '';
};

export default TotalExpense;
