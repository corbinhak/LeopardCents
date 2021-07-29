<template>
    <div id="taxes">
        <div id="yellow">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                TAXES
            </h1>
            <p>
                Taxes are involuntary fees levied on individuals who make any income in the United States. These fees are used to fund infrastructure, social security, and supplemental support for individuals with low income. It's important that every year individuals file both federal and state tax returns, as there is a fair chance that they may have overpaid on taxes and are entitled to a refund.             </p>
            <h1>
                TAX REFUNDS
            </h1>
            <p>
                You are required to file taxes if your earned income was above $12,000 for the previous year. You are also required to file taxes if your unearned income (income from interest and/or dividends) was more than $1,050. Regardless of the income you made last year, you should always file taxes as you may be entitled to a refund.             </p>
            <h1>
                WHEN TO FILE
            </h1>
            <p>
                You should file your taxes once you received your W2s from your employers (towards end of January). The deadline to file taxes is April 15th, however an extension can be requested on the IRS website. 
            </p>
            <h1>
                WHERE TO FILE
            </h1>
            <ul>
                <li>
                    <h3>
                        Adjusted Gross Income less than $66,000 
                    </h3>
                    <ul>

                        <li>
                            <h5>
                                IRS Free File Software(Online): https://apps.irs.gov/app/freeFile/jsp/wizard.jsp 
                            </h5>
                        </li>
                        <li>
                            <h5>
                                VITA/TCE(ln person) 
                            </h5>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        Adjusted Gross Income above $66,000 
                    </h3>
                    <ul>
                        <li>
                            <h5>
                                IRS Free File Fillable Forms(Online): https://www.freefilefillableforms.com/#/fd 
                            </h5>
                        </li>
                        <li>
                            <h5>
                                Tax Software(Paid)
                            </h5>
                        </li>
                        <li>
                            <h5>
                                Accountant
                            </h5>
                        </li>
                    </ul>
                </li>
            </ul>
            <h1>
                DOCUMENTATION NEEDED
            </h1>
            <ul>
                <li>
                    <h3>
                        Social Security Card 
                    </h3>
                </li>
                <li>
                    <h3>
                        State-Issued ID 
                    </h3>
                </li>
                <li>
                    <h3>
                        Proof of Taxable lncome(W-2's) 
                    </h3>
                </li>
                <li>
                    <h3>
                        If you want to receive a direct deposit: A void check
                    </h3> 
                </li>
                <li>
                    <h3>
                        If Independent and Itemizing Deductions 
                    </h3>
                    <ul>
                        <li>
                            <h5>
                                Form 1098-T(Scholarships and Grants) 
                            </h5>
                        </li>
                        <li>
                            <h5>
                                Student Loan Interest Payments(1098-E) 
                            </h5>
                        </li>
                    </ul>                
                </li>
                <li>
                    <h3>
                        Residents of MA: 
                    </h3>
                    <ul>
                        <li>
                            <h5>
                                Proof of Health Insurance 
                            </h5>
                        </li>
                        <li>
                            <h5>
                                If Com muting: Proof of T-Pass Purchase/ EZ-Pass Payments 
                            </h5>
                        </li>
                        <li>
                            <h5>
                                Rent Payment 
                            </h5>
                        </li>
                    </ul>
                </li>
            </ul>
            <h1>
                GETTING YOUR REFUND
            </h1>
            <p>
                Your tax return will be processed by the IRS within 24 hours of efiling, and 4 weeks after mailing in a return. You will then receive a refund within 21 days. If you want to get your refund faster, be sure to request a direct deposit on your return. 
            </p>
            <h6>
                W-4 FORMS
            </h6>
            <h1>
                WHAT IS A W-4 FORM?
            </h1>
            <p>
                A W-4 Form tell your employer how much tax to withhold from each paycheck. Your employer sends the tax to the IRS on your behalf. At the end of the year, your employer will send you a W-2 showing how much was withheld for you for that year. 
            </p>
            <h1>
                HOW DO I FILL OUT A W-4 FORM?
            </h1>
            <ul>
                <li>
                    <h3>
                        You must complete a W-4 form when you start working for an employer. 
                    </h3>
                </li>
                <li>
                    <h3>
                        You can change your W-4 at any time. 
                    </h3>
                </li>
                <li>
                    <h3>
                        The form can be found at the IRS website, the Student Service Center Website, or can be picked up in person in the Student Service Center (SSC). Once complete, it can be submitted to the SSC. 
                    </h3>
                </li>
                <li>
                    <h3>
                    You will be asked to supply your name, address, marital status, and other basic personal information. 
                    </h3>
                </li>
                <li>
                    <h3>
                        See if you're exempt from tax withholding 
                    </h3>
                </li>
                <li>
                    <h3>
                        Generally, the only way to be exempt is if you got a refund of all your federal income tax last year because you had no tax liability and if you expect the same thing to happen again this year. 
                    </h3>
                </li>
                <li>
                    <h3>
                        You must figure out the number of allowances to claim. 
                    </h3>
                </li>
                <li>
                    <h3>
                        The more allowances you claim, the less tax will be withheld from your paycheck. 
                    </h3>
                </li>
                <li>
                    <h3>
                        The maximum allowances you want to claim on your W-4 is equal to the number of dependents you have plus your spouse.
                    </h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Taxes"
})
</script>

<style scoped>
    
    #taxes {
        margin-top: 0%;
        background-color: #FDB913;

    }
    #yellow {
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
    }
    
    h1{
        font-size: 24px;
        text-align: left;
    }

    p{
        font-size: 18px;
        text-align: left;
        margin-left: 30px;
        padding-bottom: 15px;
    }

    h3{
        text-align: left;
    }

    h4{
        text-align: left;
        margin-left: -20px;
        font-size: 20px;
    }

    h5{
        text-align: left;
    }
    h6{
        font-size: 30px;
    }
</style>