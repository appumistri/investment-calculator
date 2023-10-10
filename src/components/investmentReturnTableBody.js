
function InvestmentReturnTableBody(props) {
    return (
        <tbody>
            {
                props.yearlyReturns.map(yi =>
                    <tr>
                        <td>{yi.year}</td>
                        <td>${Number(yi.savingsEndOfYear).toFixed(2)}</td>
                        <td>${Number(yi.yearlyInterest).toFixed(2)}</td>
                        <td>${Number(yi.totalinterest).toFixed(2)}</td>
                        <td>${Number(yi.investedCapital).toFixed(2)}</td>
                    </tr>
                )
            }
        </tbody>
    );
}

export default InvestmentReturnTableBody;
