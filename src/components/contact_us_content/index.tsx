import React, {useState} from "react";
import {countries} from "./constants"
import styles from "./contactUsContent.module.css"

const ContactUsContent = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [country, setCountry] = useState()
    const [address, setAddress] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', {firstName, lastName, country, address})
        setFirstName('')
        setLastName('')
        setCountry('')
        setAddress('')
    }
    const countryOptions = countries.map((country) => <option value={country?.code}>{country.name}</option>)
 
    return(
        <main className={styles.main}>
            <h1>Need help? Contact us 🥰</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.name}>
                    <div className={styles.label}>
                        <label htmlFor="firstName">Fist Name</label>
                        <input 
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            id="firstName"
                        />
                    </div>
                    <div  className={styles.label}>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            id="lastName"
                        />
                    </div>
                </div>
                <div  className={styles.label}>
                    <label htmlFor="country">Country</label>
                    <select 
                        name="countries"
                        id="countries"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        {countryOptions}
                    </select>
                </div>
                <div  className={styles.label}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.saveButton}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}

export default ContactUsContent