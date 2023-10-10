import { useState } from "react";
import styles from "./InvestmentInputForm.module.css";

function InvestmentInputForm(props) {

    const defaultInvestmentInputValidation = {
        isValid: true,
        invalidCurrentSavingsColor: '',
        invalidYearlySavingsColor: '',
        invalidExpectedInterestColor: '',
        invalidDurationColor: ''
    }
    const [invesntmentInputValidation, setInvesntmentInputValidation] = useState(defaultInvestmentInputValidation);

    const currentSavingsUpdateHandler = (event) => {
        if (event.target.value.length > 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                invalidCurrentSavingsColor: ''
            }));
        }
    }

    const yearlySavingsUpdateHandler = (event) => {
        if (event.target.value.length > 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                invalidYearlySavingsColor: ''
            }));
        }
    }

    const expInterestUpdateHandler = (event) => {
        if (event.target.value.length > 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                invalidExpectedInterestColor: ''
            }));
        }
    }

    const durationUpdateHandler = (event) => {
        if (event.target.value.length > 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                invalidDurationColor: ''
            }));
        }
    }

    const investmentSubmitHandler = (event) => {
        event.preventDefault();

        const currentSavings = event.target["current-savings"].value;
        const yearlyContribution = event.target["yearly-contribution"].value;
        const expectedReturn = event.target["expected-return"].value;
        const duration = event.target["duration"].value;

        if (currentSavings.length === 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                isValid: false,
                invalidCurrentSavingsColor: '#9c0303'
            }));
        }

        if (yearlyContribution.length === 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                isValid: false,
                invalidYearlySavingsColor: '#9c0303'
            }));
        }

        if (expectedReturn.length === 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                isValid: false,
                invalidExpectedInterestColor: '#9c0303'
            }));
        }

        if (duration.length === 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                isValid: false,
                invalidDurationColor: '#9c0303'
            }));
        }

        if (currentSavings.length > 0 && yearlyContribution.length > 0 && expectedReturn.length > 0 && duration.length> 0) {
            setInvesntmentInputValidation(oldValidation => ({
                ...oldValidation,
                isValid: true
            }));
        }
        else {
            return;
        }

        const investmentData = {
            currentSavings: +currentSavings,
            yearlyContribution: +yearlyContribution,
            expectedReturn: +expectedReturn,
            duration: +duration
        }

        props.onSubmit(investmentData);
    }

    const investmentResetHandler = (event) => {
        setInvesntmentInputValidation(defaultInvestmentInputValidation);
        props.onSubmit({});
    }

    return (
        <form className={styles.form} onSubmit={investmentSubmitHandler} onReset={investmentResetHandler}>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="current-savings" style={{ color: invesntmentInputValidation.invalidCurrentSavingsColor }}>Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        style={{ borderColor: invesntmentInputValidation.invalidCurrentSavingsColor }}
                        onChange={currentSavingsUpdateHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution" style={{ color: invesntmentInputValidation.invalidYearlySavingsColor }}>Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        style={{ borderColor: invesntmentInputValidation.invalidYearlySavingsColor }}
                        onChange={yearlySavingsUpdateHandler}
                    />
                </p>
            </div>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="expected-return" style={{ color: invesntmentInputValidation.invalidExpectedInterestColor }}>
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        style={{ borderColor: invesntmentInputValidation.invalidExpectedInterestColor }}
                        onChange={expInterestUpdateHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration" style={{ color: invesntmentInputValidation.invalidDurationColor }}>Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        style={{ borderColor: invesntmentInputValidation.invalidDurationColor }}
                        onChange={durationUpdateHandler}
                    />
                </p>
            </div>
            {!invesntmentInputValidation.isValid && <p className={styles.invalid_input}>Please provide all inputs to caltulate investment.</p>}
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default InvestmentInputForm;