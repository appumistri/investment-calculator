import InvestmentReturnTableBody from "./investmentReturnTableBody";
import styles from "./InvestmentReturnsList.module.css";

function InvestmentReturnsList(props) {
    if (props.yearlyReturns.length === 0) {
        return (<h2 className={styles.result__fallback}>No investment calculated yet.</h2>);
    }
    else {
        return (
            <table className={styles.result}>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <InvestmentReturnTableBody yearlyReturns={props.yearlyReturns} />
            </table>
        );
    }
}

export default InvestmentReturnsList;
