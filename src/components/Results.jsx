import React from 'react'
import { calculateInvestmentResults , formatter} from '../util/investment'

export const Results = ({input}) => {
    const outputData = calculateInvestmentResults(input)
    const initialInvestment = outputData.valueEndOfYear - outputData.interest - outputData.annualInvestment

  return (
    <>
    {console.log(outputData)}
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {outputData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year
                const totalAmounInvested = yearData.valueEndOfYear - totalInterest

                return <tr key={yearData.year }>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmounInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
    </>
  )
}

//anual times the mai 
//once you have a big enough shovel in your ass and you are doing real life work  -- things will feel to be happening

//all the startups at the young age start as side projects - starting a startup for the startup
