import {Link} from 'react-router-dom';
function FormPage(){
    return (
        <section>
            <aside id="rules1">
                <h1  id="yourAwesome"> </h1> 
                <h1 class="formTitle"> Play For A Weekly Chance To Win!</h1> 
                <div class="rules"> 
                    <ul> 
                        <li class="ruleList"> Contestants must complete the form on this page to participate in the contest. </li>
                        <li class="ruleList"> A new winner will be announced every week and the winning image will be featured on the home page. </li>
                        <li class="ruleList"> Winners will be determined by random draw and will be prompted to answer a simple question to verify their submission.</li>
                        <li class="ruleList"> A winner’s entry may be removed from the site and disqualified by Moon Farms at any time if it is found to be unaligned to the mission and values of Moon Farms.</li>
                        <li class="ruleList"> The contest will take place for two (2) months, beginning April 14, 2022 and ending on June 14, 2022. Any images submitted to Moon Farms after this period will not be considered.</li>
                        <li class="ruleList"> Contestants must be a legal resident of Canada.</li>
                    </ul>
                </div>
            </aside> 
            <article>
                <form id="fieldForm" action="#">
                    <h1>Join The Contest</h1>
                    <fieldset>
                        <div>
                            <input name="firstName" id="firstName" type="text" placeholder="First Name" />
                            <p id="firstNameError"></p>
                        </div>
                        <div>
                            <input name="lastName" id="lastName" type="text" placeholder="Last Name" />
                            <p id="lastNameError"></p>
                        </div>
                        <div>
                            <input name="birth" id="birth" type="text" placeholder="Date Of Birth(mm/dd/year)" />
                            <p id="birthError"></p>
                        </div>
                        <div>
                            <input name="phone" id="phone" type="text" placeholder="Phone Number" />
                            <p id="phoneError"></p>
                        </div>
                        <div class="full-span">
                            <input name="address-1" id="address-1" type="text" placeholder="Address Line 1" />
                            <p id="addressError"></p>
                        </div>
                        <div class="full-span">
                            <input name="address-2" id="address-2" type="text" placeholder="Address Line 2 (Optional)" />
                        </div>
                        <div>
                            <input name="province" id="province" type="text" placeholder="Province" />
                            <p id="provinceError"></p>
                        </div>
                        <div>
                            <input name="postalCode" id="postalCode" type="text" placeholder="Postal Code" />
                            <p id="postalCodeError"></p>
                        </div>
                        <div class="full-span">
                            <input name="email"  id="email" type="text" placeholder="Email Address" />
                            <p id="emailError"></p>
                        </div>
                    </fieldset>
                    <section id="guardian-info">
                        <h1 id="guardian-header"> Guardian Information</h1>
                        <h3 id="disclaimer"> All Contestants under the age of 18 must provide guardian information</h3> 
                        <fieldset>
                            <div>
                                <input name="firstName" id="gFirstName" type="text" placeholder="First Name" />
                                <p id="gFirstNameError"></p>
                            </div>
                            <div>
                                <input name="lastName" id="gLastName" type="text" placeholder="Last Name" />
                                <p id="gLastNameError"></p>
                            </div>
                            <div>
                                <input name="phone" id="gPhone" type="text" placeholder="Phone Number" />
                                <p id="gPhoneError"></p>
                            </div>
                            <div class="full-span">
                                <input name="email"  id="gEmail" type="text" placeholder="Email Address" />
                                <p id="gEmailError"></p>
                            </div>
                        </fieldset>
                    </section>
                    <section class="agreements">
                        <input class="checkbox" type="checkbox" id="rulesAndConditions" name="rulesAndConditions" value="" />
                        <label class="checkbox" for="rulesAndConditions"> I have read and agree to the contest rules. </label>
                        <p id="rules-msg" class="checkError"></p>
                    </section>
                    <section class="agreements">
                        <input class="checkbox" type="checkbox" id="termsAndConditions" name="termsAndConditions" value="" />
                        <label class="checkbox" for="termsAndConditions"> I have read and agree to the <Link to="/legal">terms and conditions</Link> of this website.</label>
                        <p id="terms-msg" class="checkError"></p>
                    </section>
                    <section class="agreements">
                        <input class="checkbox" type="checkbox" id="offersAndConditions" name="offersAndConditions" value="" />
                        <label class="checkbox" for="offersAndConditions"> I would like to receive offers, promotions and news from Moon Farms. (Optional) </label>
                    </section>
                    <section id="btn-container">
                        <input type="submit" value="Submit" id="formSubmit" />
                    </section>
                </form>
            </article>
        </section>
    )
}

export default FormPage;