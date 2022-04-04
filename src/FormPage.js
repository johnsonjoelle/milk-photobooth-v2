import { useState } from 'react';
import {Link} from 'react-router-dom';

function FormPage(){
    // Variables
    const yourAwesome = document.getElementById('yourAwesome');
    let consentAge = 16;

    // Field Storage
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostal] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const [guardianFirstName, setGFirstName] = useState("");
    const [guardianLastName, setGLastName] = useState("");
    const [guardianPhone, setGPhone] = useState("");
    const [guardianEmail, setGEmail] = useState("");

    
    let firstNameError = document.querySelector("#firstNameError");
    let lastNameError = document.querySelector("#lastNameError");
    let phoneError = document.querySelector("#phoneError");
    let addressError = document.querySelector("#addressError");
    let provinceError = document.querySelector("#provinceError");
    let postalCodeError = document.querySelector("#postalCodeError");
    let birthError = document.querySelector("#birthError");
    let emailError = document.querySelector("#emailError");
    let guardianFirstNameError = document.querySelector("#gFirstNameError");
    let guardianLastNameError = document.querySelector("#gLastNameError");
    let guardianPhoneError = document.querySelector("#gPhoneError");
    let guardianEmailError = document.querySelector("#gEmailError");
    let agreeToRules = document.querySelector("#rulesAndConditions");
    let agreeToTerms = document.querySelector("#termsAndConditions");
    let rules = document.querySelector("#rules-msg");
    let terms = document.querySelector("#terms-msg");

    const fieldsCheck = [
        {field: firstName, checker: hasCharsCheck , error:firstNameError, msg: "First Name must contain at least two letters"},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg: "Last Name must contain at least two letters"},
        {field: phone, checker: hasPhoneCheck, error: phoneError, msg: "Please enter a valid phone number"},
        {field: address, checker: hasAddressCheck, error: addressError, msg: "Please enter a valid address"},
        {field: province, checker: hasProvinceCheck, error: provinceError, msg: "Please enter your province's postal abbreviation"},
        {field: postalCode, checker: hasPostalCheck, error: postalCodeError, msg: "Please enter a valid postal code"},
        {field: birth, checker: hasBirthCheck, error: birthError, msg: "Please enter a valid date of birth"},
        {field: email, checker: hasEmailCheck, error: emailError, msg: "Please enter a valid email address"},
        {field: agreeToRules, checker: agreedToRules, error: rules, msg: "This is required"}, 
        {field: agreeToTerms, checker: agreedToTerms, error: terms, msg: "This is required"}
    ]
    const guardianFieldsCheck = [
        {field: guardianFirstName, checker: hasCharsCheck , error:guardianFirstNameError, msg: "First Name must contain at least two letters"},
        {field: guardianLastName, checker: hasCharsCheck, error: guardianLastNameError, msg: "Last Name must contain at least two letters"},
        {field: guardianPhone, checker: hasPhoneCheck, error: guardianPhoneError, msg: "Please enter a valid phone number"},
        {field: guardianEmail, checker: hasEmailCheck, error: guardianEmailError, msg: "Please enter a valid email address"}
    ]

    // Check Functions
    function hasCharsCheck(dataToCheck){
        let pattern = /^[a-zA-z]+$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function hasPhoneCheck(dataToCheck){
        let pattern = /^[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function hasAddressCheck(dataToCheck){
        let pattern = /^[0-9]+\s{1}\D+$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function hasProvinceCheck(dataToCheck){
        let pattern = /^[A-Z]{2}$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function hasPostalCheck(dataToCheck){
        let pattern = /^[A-Z]{1}[0-9]{1}[A-Z]{1}\s{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;}
    function hasEmailCheck(dataToCheck){
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function hasBirthCheck(dataToCheck){
        let pattern = /^[0-9/]+$/;
        if (pattern.test(dataToCheck.field.value)) {
            return true; 
        }
        return false;
    }
    function agreedToRules(dataToCheck){
        if(dataToCheck.field.checked === true) {
            return true;
        }
        return false;
    }
    function agreedToTerms(dataToCheck){
        if(dataToCheck.field.checked === true) {
            return true;
        }
        return false;
    }
    function secretCheck(strVal) {
        let secPat = /^[S]{1}[t]{1}[u]{1}[A]{1}[R]{1}[T]{1}[L]{1}[i]{1}[k]{1}[e]{1}[S]{1}[A]{1}[L]{1}[i]{1}[e]{1}[n]{1}[E]{1}[A]{1}[S]{1}[T]{1}[E]{1}[R]{1}[E]{1}[g]{1}[g]{1}[S]{1}$/;
        if (secPat.test(strVal)){
            return true; 
        } 
        return false;
    }
    // Error Check
    function errorsReset(){
        fieldsCheck.forEach(inputField => {
            inputField.error.innerText = "";
        });
    }

    function checkAge(date){
        let yearBorn = date.slice(6);
        let today = new Date();
        let currentYear = today.getFullYear();
        let age = currentYear-yearBorn;
        console.log(age);
        if(age<consentAge){
            console.log(age);
            return false;
        } else {
            console.log(age);
            return true;
        }
    }

    function formChecker(e) {
        let errorsDetected = 0;
        e.preventDefault();
        console.log(fieldsCheck);
        errorsReset();

        //* Automate error Checking
        fieldsCheck.forEach(inputField => {
            if(inputField.checker(inputField)===false){
                inputField.error.innerText = inputField.msg;
                errorsDetected +=1;
            }
        });

        // *Check age
        if(hasBirthCheck(fieldsCheck[6])) {
            if(checkAge(birth.value)===false) {
                guardianFieldsCheck.forEach(inputField => {
                    if(inputField.checker(inputField)===false){
                        inputField.error.innerText = inputField.msg;
                        errorsDetected +=1;
                    }
                });
            }
        }

        //* Check For Secret Pattern
        if(errorsDetected>0){
            console.log("Correct Your Errors Please"); 
        } else {
            let showSecret = secretCheck(document.querySelector("#firstName").value);
            if (showSecret){
                console.log("YES IT WORKED");
                yourAwesome.innerText = "Here's a secret: We have an alien cow. New milk products coming soon; from space to you?"
            } else {
                console.log("Good Try Silly");
            }
        }
    }

    return (
        <main className="page-container form-page">
            <aside id="rules1">
                <h1  id="yourAwesome"> </h1> 
                <h1 className="formTitle"> Play For A Weekly Chance To Win!</h1> 
                <div className="rules"> 
                    <ul> 
                        <li className="ruleList"> Contestants must complete the form on this page to participate in the contest. </li>
                        <li className="ruleList"> A new winner will be announced every week and the winning image will be featured on the home page. </li>
                        <li className="ruleList"> Winners will be determined by random draw and will be prompted to answer a simple question to verify their submission.</li>
                        <li className="ruleList"> A winner’s entry may be removed from the site and disqualified by Moon Farms at any time if it is found to be unaligned to the mission and values of Moon Farms.</li>
                        <li className="ruleList"> The contest will take place for two (2) months, beginning April 14, 2022 and ending on June 14, 2022. Any images submitted to Moon Farms after this period will not be considered.</li>
                        <li className="ruleList"> Contestants must be a legal resident of Canada.</li>
                    </ul>
                </div>
            </aside> 
            <article>
                <form id="fieldForm" onSubmit={formChecker}>
                    <h1>Join The Contest</h1>
                    <fieldset>
                        <div>
                            <input name="firstName" id="firstName" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                            <p id="firstNameError"></p>
                        </div>
                        <div>
                            <input name="lastName" id="lastName" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                            <p id="lastNameError"></p>
                        </div>
                        <div>
                            <input name="birth" id="birth" type="text" placeholder="Date Of Birth(mm/dd/year)" onChange={(e) => setBirth(e.target.value)} />
                            <p id="birthError"></p>
                        </div>
                        <div>
                            <input name="phone" id="phone" type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                            <p id="phoneError"></p>
                        </div>
                        <div className="full-span">
                            <input name="address-1" id="address-1" type="text" placeholder="Address Line 1" onChange={(e) => setAddress(e.target.value)} />
                            <p id="addressError"></p>
                        </div>
                        <div className="full-span">
                            <input name="address-2" id="address-2" type="text" placeholder="Address Line 2 (Optional)" />
                        </div>
                        <div>
                            <input name="province" id="province" type="text" placeholder="Province" onChange={(e) => setProvince(e.target.value)} />
                            <p id="provinceError"></p>
                        </div>
                        <div>
                            <input name="postalCode" id="postalCode" type="text" placeholder="Postal Code" onChange={(e) => setPostal(e.target.value)} />
                            <p id="postalCodeError"></p>
                        </div>
                        <div className="full-span">
                            <input name="email"  id="email" type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                            <p id="emailError"></p>
                        </div>
                    </fieldset>
                    <section id="guardian-info">
                        <h1 id="guardian-header"> Guardian Information</h1>
                        <h3 id="disclaimer"> All Contestants under the age of 18 must provide guardian information</h3> 
                        <fieldset>
                            <div>
                                <input name="firstName" id="gFirstName" type="text" placeholder="First Name" onChange={(e) => setGFirstName(e.target.value)} />
                                <p id="gFirstNameError"></p>
                            </div>
                            <div>
                                <input name="lastName" id="gLastName" type="text" placeholder="Last Name" onChange={(e) => setGLastName(e.target.value)} />
                                <p id="gLastNameError"></p>
                            </div>
                            <div>
                                <input name="phone" id="gPhone" type="text" placeholder="Phone Number" onChange={(e) => setGPhone(e.target.value)} />
                                <p id="gPhoneError"></p>
                            </div>
                            <div className="full-span">
                                <input name="email"  id="gEmail" type="text" placeholder="Email Address" onChange={(e) => setGEmail(e.target.value)} />
                                <p id="gEmailError"></p>
                            </div>
                        </fieldset>
                    </section>
                    <section className="agreements">
                        <input className="checkbox" type="checkbox" id="rulesAndConditions" name="rulesAndConditions" value="" />
                        <label className="checkbox" htmlFor="rulesAndConditions"> I have read and agree to the contest rules. </label>
                        <p id="rules-msg" className="checkError"></p>
                    </section>
                    <section className="agreements">
                        <input className="checkbox" type="checkbox" id="termsAndConditions" name="termsAndConditions" value="" />
                        <label className="checkbox" htmlFor="termsAndConditions"> I have read and agree to the <Link to="/legal">terms and conditions</Link> of this website.</label>
                        <p id="terms-msg" className="checkError"></p>
                    </section>
                    <section className="agreements">
                        <input className="checkbox" type="checkbox" id="offersAndConditions" name="offersAndConditions" value="" />
                        <label className="checkbox" htmlFor="offersAndConditions"> I would like to receive offers, promotions and news from Moon Farms. (Optional) </label>
                    </section>
                    <section id="btn-container">
                        <input type="submit" value="Submit" id="formSubmit" />
                    </section>
                </form>
            </article>
        </main>
    )
}

export default FormPage;