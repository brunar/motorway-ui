import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Controls from '../../components/Form/Controls';
import { useForm, Controller } from "react-hook-form";
import { Slider } from '@material-ui/core';
import './Profile.scss';
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

const initialForm = {
    id: 0,
    name: '',
    email: '',
    //dateBirth: new Date(),
    favotiteColor: '',
}


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    '& .MuiFormControl-root': {
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    '& label.Mui-focused': {
        color: '#222',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#c5c5c5',
            backgroundColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#222',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#222',
        },
    }
}));

export default function ProfileForm() {

    const { register, handleSubmit, errors, control } = useForm();

    const [formValues, setFormValues] = useState(initialForm);

    const [valueSlider, setValueSlider] = useState(30);
    const handleChange = (event, newValue) => {
        setValueSlider(newValue);
    };

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        });
    };


    const onSubmit = data => {
        window.alert(JSON.stringify(data));

        setFormValues(data);
    }

    const classes = useStyles();
    return (
        <div className="Profile">

            <div className="Wrapper">
                <h1>Profile</h1>
                <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Controls.Input
                        refInput={register({ required: true })}
                        name="name"
                        label="Name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        error={errors.name}
                        errorMsg={errors.name && 'Name is required'}
                    />
                    <Controls.Input
                        refInput={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        name="email"
                        label="Email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        errorMsg={errors.email && errors.email.message}
                    />
                    <Controls.Input
                        refInput={register({ required: true })}
                        name="favoriteColor"
                        label="Favorite Color"
                        value={formValues.favoriteColor}
                        onChange={handleInputChange}
                        error={errors.favoriteColor}
                        errorMsg={errors.favoriteColor && 'Favorite color is required'}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Controller
                            name="dateBirth"
                            defaultValue="03/03/1985"
                            control={control}
                            render={(props) => (
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="dateBirth"
                                    label="Date Birth"
                                    format="MM/dd/yyyy"
                                    KeyboardButtonProps={{
                                        "aria-label": "change date"
                                    }}
                                    {...props}
                                />
                            )}
                        />
                    </MuiPickersUtilsProvider>
                    <div style={{ marginTop: "50px" }}>

                        <Slider
                            name="salary"
                            label="Salary"
                            value={valueSlider}
                            onChange={handleChange}

                            aria-labelledby="continuous-slider"
                            min={25}
                            max={90}
                            valueLabelDisplay="on" />
                        <label style={{ marginBottom: "40px", display: "block" }}>Salary</label>
                    </div>
                    <button type="submit" className="Button">Submit</button>
                </form>
            </div>
        </div>
    );
}
