import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            address: "",
            city: "",
            pincode: "",
            State: "",
            phone: "",
            gender: "",
            giftItem: true,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    toggleChange = () => {
        this.setState({
          giftItem: !this.state.giftItem,
        });
      };

    handleSubmit = (e) => {
        const {
            fName,
            lName,
            address,
            city,
            pincode,
            State,
            phone,
            gender,
            giftItem,
        } = this.state;
        e.preventDefault();
        alert(` 
          ____Your Details____\n 
          Name : ${fName} ${lName} \n
          Address : ${address}, ${city}, \n${pincode}, ${State}\n  
          Phone Number : ${phone} \n
          Gender : ${gender} \n
          Gift Item Included : ${giftItem}
        `);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <div> <label for="fName">
                        First Name
                        <input
                            type="text"
                            value={this.state.fName}
                            id="fName"
                            name="fName"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label for="lName">
                        Last Name:
                        <input
                            type="text"
                            value={this.state.lName}
                            id="lName"
                            name="lName"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label for="address">
                        Address:
                        <input
                            type="text"
                            value={this.state.address}
                            id="address"
                            name="address"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label for="city">
                        City:
                        <input
                            type="text"
                            value={this.state.city}
                            id="city"
                            name="city"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label for="pincode">
                        Pincode:
                        <input
                            type="tel"
                            value={this.state.pincode}
                            id="pincode"
                            name="pincode"
                            pattern="[0-9]{6}"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label>
                        {" "}
                        Select Your State
                        <select  name="State" onChange={(e) => {
                            this.handleChange(e);}}>
                            <option value="Select State"> Select State</option>
                            <option value="Uttar Pradesh"> Uttar Pradesh</option>
                            <option value="Madhya Pradesh"> Madhya Pradesh</option>
                            <option value="Delhi"> Delhi</option>
                            <option value="Haryana"> Haryana</option>
                        </select>
                    </label>
                    </div>
                    <br />
                    <br />
                    <div value={this.state.gender} onChange={(e) => {
                        this.handleChange(e);
                    }}>
                        Gender:
                        <input
                            type="radio"
                            name="gender" 
                            value="Male"
                        />
                        Male
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                        />
                        Female
                    </div>
                    <br />
                    <br />
                    <div>
                    <label for="phone">
                        Phone NO:
                        <input
                            type="tel"
                            value={this.state.phone}
                            id="phone"
                            name="phone"
                            pattern="[0-9]{10}"
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                        />
                    </label>
                    </div>
                    <br />
                    <br />
                    <label for="giftItem">
        <input type="checkbox"
        id="giftItem"
          checked={this.state.giftItem}
          onChange={this.toggleChange}
        />
        Gift Item Included
      </label>
                      <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
